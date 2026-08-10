import {  Formik } from "formik";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors , setFieldTouched , touched}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email}/>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched('password')}
              placeholder="password"
              secureTextEntry
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password}/>
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
