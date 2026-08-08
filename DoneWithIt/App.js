import { useState } from "react";
import { Text, TextInput } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
      
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBlockColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
