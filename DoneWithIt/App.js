import { Alert, Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          // Alert.alert("My title", "My message", [
          //   { text: "Yes", onPress: () => console.log("Yes") },
          //   { text: "No", onPress: () => console.log("No") },
          // ])  
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
