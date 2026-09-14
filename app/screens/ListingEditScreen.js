import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import listingApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  image: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing) => {
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress),
    );
    setUploadVisible(false);

    if (!result.ok) return alert("Could not save the listing.");

    alert("success");
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} /> 
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8} // includes 10000.99
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3} // only works on android
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
