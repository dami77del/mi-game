import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "../componentes/Card";
import Colors from "../constants/Colors";
import Input from "../componentes/Input";

const StartGameScreen = () => {
  const [value, setValue] = useState("");

  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Game</Text>
      <Card>
        <Text style={styles.subtitle}> Chose a number</Text>
        <Input
          blurOnSubmit
          autocapitalize="none"
          autoCorrect={false}
          keyboardType={"numeric"}
          maxLength={2}
          value={value}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cleanButton}>
            <Button
              title="Clean"
              onPress={() => console.log("limpiar")}
              color={"#7D7D8B"}
            />
          </View>
          <View style={styles.confirmButton}>
            <Button
              title="Confirm"
              onPress={() => console.log("confirmar")}
              color={"#ffff"}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white",
  },
  subtitle: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  cleanButton: {
    width: 100,
    backgroundColor: Colors.disableColor,
    borderRadius: 10,
  },
  confirmButton: {
    width: 100,
    backgroundColor: Colors.actionColor,
    borderRadius: 10,
  },
});
