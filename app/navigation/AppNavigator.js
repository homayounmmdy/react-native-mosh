import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addListener((notification) => console.log(notification));
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
