import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={[containerStyle, styles.container]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("button pressed")}
      />
    </View>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
