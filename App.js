import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUris) => imageUris !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        imageUri={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
