import React, { useState } from 'react'
import { useFonts } from "expo-font"
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/componentes/Header";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import ResultScreen from './src/screens/ResultScreen';


export default function App() {

  const [loaded] = useFonts({
    GermaniaOne: require("./src/assets/fonts/GermaniaOne-Regular.ttf"),
  });


  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }



  const handleFinishGame = (selection, number ) => {
    if ((selection === "lower" && userNumber < number) || (selection === "geater" && userNumber > number)) {
      setResult("Win")
    } else {
      setResult("Lose")
    }
    setWinOrLose(true)
  }


  let content = <StartGameScreen onStartGame={handleStartGame} />
  if (userNumber && winOrLose === true) {
    content= <ResultScreen result={result}/>
  }else if(userNumber){
     content = <GameScreen handleResult={handleFinishGame} />
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
