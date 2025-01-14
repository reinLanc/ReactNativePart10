import React from "react";
import { useField } from "formik";
import { Text, TextInput, View } from "react-native-web";
import { StyleSheet } from "react-native";
import theme from "../config/theme";

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    fontSize: 12,
    marginTop: 4,
  },
  text: {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, showError && styles.errorInput]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
