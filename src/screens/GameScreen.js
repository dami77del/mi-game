import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useEffect, useState  } from 'react'
import Card from '../componentes/Card'
import colors from '../constants/Colors'


const GameScreen = () => {
  const  [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 -1) +1 ))

  }, [])
  
 
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>La suposicion del oponente</Text>
      <Text  style={styles.textColorNumber}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => console.log("menor")}
        />
        <Button
          title="Mayor"
          onPress={() =>  console.log("mayor")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor:colors.primary
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  textColor:{
    color:"#ffff"
  },
  textColorNumber:{
    fontSize:40,
    color:"red"
  }
});