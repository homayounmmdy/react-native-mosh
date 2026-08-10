import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Screen({ children, style }) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
      </SafeAreaView>
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
