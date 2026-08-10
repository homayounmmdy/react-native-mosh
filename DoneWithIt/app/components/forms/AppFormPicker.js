import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";


export default function AppFormPicker({
  items,
  name,
  placeholder,
  width
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onItemSelect={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        width={width}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}  
