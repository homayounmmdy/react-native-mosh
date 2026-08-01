import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita
        aliquam ipsa eius laborum corrupti nisi, impedit perferendis soluta
        quisquam aspernatur qui enim aut modi magnam eaque? Cum, perferendis
        accusantium?
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: 'center',
    alignContent : "center"
  },
});
