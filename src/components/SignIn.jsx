import { Formik } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, View } from "react-native-web";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Sign in" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
