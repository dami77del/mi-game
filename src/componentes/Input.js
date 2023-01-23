import { StyleSheet,TextInput } from "react-native";
import React from "react";

const Input = ({ newStyle, ...RestProps }) => {
  return <TextInput style={{ ...styles.input, newStyle }} {...RestProps} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
  },
});
