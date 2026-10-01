import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import colors from '../config/colors'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    let subscription;
    if (notificationListener) {
      subscription = Notifications.addNotificationReceivedListener(
        notificationListener
      );
    }

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  const registerForPushNotifications = async () => {
    try {
      if (!Device.isDevice) {
        console.log("Must use a physical device for push notifications");
        return;
      }

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: colors.primary,
        });
      }

      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        console.log("Permission not granted for push notifications");
        return;
      }

      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;

      const token = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;

      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};

export default useNotifications