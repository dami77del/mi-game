import { Button, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Dimensions, Platform, ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../componentes/Card";
import Colors from "../constants/Colors";
import Input from "../componentes/Input";


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const OS =  Platform.OS

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')


  useEffect(()=> {
 console.log(width,height, OS)
  },[])



  const handleConfirmation = () => {
    const choseNumber  = parseInt(value)
    if (choseNumber  === NaN || choseNumber  <= 0 || choseNumber  > 99) return
    setConfirmed(true)
    setSelectedNumber(choseNumber)
    setValue('')
  }
  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => {
    setValue("")
    setConfirmed(false)
  }
  return (
    <KeyboardAvoidingView  style={{ flex: 1 }} behavior={  OS ==="ios" ? "padding" : "height"}>
      <ScrollView style={{backgroundColor: Colors.primary}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                  onPress={handleResetInput}
                />
              </View>
              <View style={styles.confirmButton}>
                <Button
                  title="Confirm"
                  onPress={handleConfirmation}
                />
              </View>
            </View>
          </Card>
          {
            confirmed && (
              <Card newStyles={styles.selectedCard}>
                <Text style={{ color: "white" }}> Your number is:</Text>
                <View>
                  <Text style={styles.selectNumberSelected}>{selectedNumber}</Text>
                  <View style={styles.confirmButton} >
                    <Button title="Start Game" onPress={() => onStartGame(selectedNumber)} />
                  </View>
                </View>
              </Card>
            )}
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginVertical: height > 900 ? 20 : 10,
    color: "white",
  },
  subtitle: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: width < 400 ? "100%" : 250,
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
  selectedCard: {
    marginTop: 50,
    width: "50%",
  },
  selectNumberSelected: {
    color: "white", marginVertical: 20, fontSize: 25, textAlign: "center"
  }
});
