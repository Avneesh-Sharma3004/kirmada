import React, { useState } from "react";
import { View, Text,StyleSheet, Button, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview'

export default function Modal ()  {
    const[show,setshow]=useState(false)
    return (
        
       <View style={styles.container}>
        {
            show ?
            <View style={styles.modal}>
            <View style={styles.body}>
                <Text>This is a ad</Text>
                <View style={styles.closeButton}>
                <Button title="Close" onPress={()=>setshow(false)}/>
                </View>
            </View>

        </View>
        :null
        }

            <Button title="open" onPress={()=>setshow(true)}/>
       </View>
    
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:25
},
modal:{
    flex:1,
    backgroundColor:"rgba(50, 50, 50, 0.5)",
    justifyContent:'center',
    alignItems:"center",
},
body:{
    backgroundColor:"#fff",
    height:300,
    width:"100%",
    padding:5,
},
closeButton:{
    flex:1,
    justifyContent:"flex-end"
}
})

