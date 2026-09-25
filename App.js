import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
