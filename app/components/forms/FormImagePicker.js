import { ErrorMessage, useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import ImageInputList from "../ImageInputList";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUris) => imageUris !== uri),
    );
  };
  return (
    <>
      <ImageInputList
        imageUri={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove} 
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
