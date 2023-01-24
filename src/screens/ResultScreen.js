import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import win from '../assets/images/win.jpg'
import Lose from '../assets/images/lose.png'
import Card from '../componentes/Card'
import Colors from '../constants/Colors'
const ResultScreen = ({ result }) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        handleImage()
    }, [])

    const handleImage = () => {
        if (result === "Win") {
            setImage(win)
            return
        }
        setImage(Lose)
    }
    return (
        <SafeAreaView  style={styles.container}>
        <View>
            <Card>
                <Text>{`Your  ${result}`}</Text>
            </Card>
            <Image source={image} style={styles.imageContainer} />
        </View>
        </SafeAreaView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.primary
    },
    imageContainer: {
         height:320,
         width:320,  
         marginTop: 50
    }
})