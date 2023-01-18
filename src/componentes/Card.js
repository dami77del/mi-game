import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const Card = ({ newStyles, children }) => {
  return <View style={{ ...styles.container, ...newStyles }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: Colors.secundary,
  },
});
