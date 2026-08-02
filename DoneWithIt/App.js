import { View } from "react-native";

export default function App() {
  return <View style={{
    backgroundColor: "#fff",
    flex : 0.5
  }}>
    <View style={{backgroundColor: "dodgerblue", flex: 2}}/>
    <View style={{backgroundColor: "gold", flex: 1}}/>
    <View style={{backgroundColor: "tomato", flex: 1}}/>
  </View>;
}
