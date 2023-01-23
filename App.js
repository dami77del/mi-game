import React, { useState } from 'react'
import { useFonts } from "expo-font"
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/componentes/Header";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";


export default function App() {

  const [loaded] = useFonts({
    GermaniaOne: require("./src/assets/fonts/GermaniaOne-Regular.ttf"),
  });


  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />
  if (userNumber) {
    content = <GameScreen />
  }
  if (!loaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Header title={"Guess the number"}
        newStyles={{ fontFamily: "GermaniaOne" }}
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
