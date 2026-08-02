import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Image tapped");
        }}
      >
        <Image
          // blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqB29nphbJsAHewsrwWTmt-rlpWHOlBvz5tEPVYDGnMA&s=10",
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: "red" }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
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
