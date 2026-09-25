import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import userApi from "../api/users";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);

  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password,
    );
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={error} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
});
