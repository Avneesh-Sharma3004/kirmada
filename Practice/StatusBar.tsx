import { useState } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  FlatList,
  View,
} from "react-native";

{/*StatusBar ka use statusbar me changes ya styles krne ke liye kiye jate hai*/}


export default function bar() {

  

  return (
    <View>
        <StatusBar
        backgroundColor="orange"
        barStyle="light-content"
        />
      
    </View>
  )
}
