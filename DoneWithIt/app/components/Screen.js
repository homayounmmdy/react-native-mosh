import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Screen({ children, style }) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
