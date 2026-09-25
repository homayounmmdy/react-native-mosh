import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
