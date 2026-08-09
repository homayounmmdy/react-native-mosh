import { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  {label : "Furniture" , value : 1},
  {label : "Clothing" , value : 2},
  {label : "Cameras" , value : 3},
]

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email "/>
    </Screen>
  );
}
