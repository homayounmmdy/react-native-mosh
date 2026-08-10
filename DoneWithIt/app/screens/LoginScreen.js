import Formik from "formik";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
              placeholder="password"
              secureTextEntry
              textContentType="password"
            />
            <AppButton
              title="login"
              onPress={handleSubmit}
            />
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
