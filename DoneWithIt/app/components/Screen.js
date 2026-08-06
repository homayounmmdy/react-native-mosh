import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Screen({ children }) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
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
