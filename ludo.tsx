import React,{useState}from "react";
import { View, Text, Button, Touchable, TouchableOpacity,Alert,StyleSheet,Image} from 'react-native';

const diceImage:Record<number, string> = {
    1: 'https://thenounproject.com/icon/dice-one-5227045/',
    2: 'https://thenounproject.com/icon/ludo-dice-two-5227046/',
    3: 'https://thenounproject.com/icon/ludo-dice-three-5227047/',
    4: 'https://thenounproject.com/icon/ludo-dice-four-5227048/',
    5: 'https://thenounproject.com/icon/ludo-dice-five-5227044/',
    6: 'https://thenounproject.com/icon/ludo-dice-six-5227049/',
}



function Tabs () {
    const [ diceNumber,setDiceNumber] = useState(1);

    const rollDice = () =>{
        const randomNum = Math.floor(Math.random()*6)+1;
        setDiceNumber(randomNum);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ludo Dice Game</Text>

            <TouchableOpacity onPress={rollDice}>
                <Image 
                    source={{uri:diceImage [diceNumber] }}
                    style={styles.diceImage}
                 />
            </TouchableOpacity>
            <Text style={styles.numberText}> You rolled;{diceNumber}</Text>
        </View>
    )
}



const styles=StyleSheet.create({
        container:{
           flex:1,
           backgroundColor:"#e3f2fd",
           alignItems:"center",
           justifyContent:"center",
        },
        diceImage:{
            width:150,
            height:150,
            margin:20,

        },
        title:{
            fontSize:28,
            fontWeight:"bold",
            color:"#1565c0"
        },
        numberText:{
            
        }
})


export default Tabs;