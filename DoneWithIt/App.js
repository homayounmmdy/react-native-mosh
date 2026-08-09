import { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
