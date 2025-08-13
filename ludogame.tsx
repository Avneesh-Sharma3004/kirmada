import React, { useState } from "react";
import { View, Text, Button, Touchable, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const diceImage: Record<number, any> = {
  1: require('./assets/dice1.jpeg'),
  2: require('./assets/dice2.jpeg'),
  3: require('./assets/dice3.jpeg'),
  4: require('./assets/dice4.jpeg'),
  5: require('./assets/dice5.jpeg'),
  6: require('./assets/dice6.jpeg'),
};




function Tabs() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNum);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ludo Dice Game</Text>

      <TouchableOpacity onPress={rollDice}>
        <Image
          source={diceImage[diceNumber]}
          style={styles.diceImage}
        />
      </TouchableOpacity>
      <Text style={styles.numberText}> You rolled :- {diceNumber}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  diceImage: {
    width: 150,
    height: 150,
    margin: 20,


  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565c0"
  },
  numberText: {
    fontSize: 22,
    color: "#000",
    marginTop: 20,
  }
})


export default Tabs;