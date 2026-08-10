import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name }) {
  const { setFieldTouched, touched, handleChange, errors, ...otherProps } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
