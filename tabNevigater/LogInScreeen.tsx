import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";


 function LogIn({ navigation}:any) {
  

  return (
    <View style={{marginTop:80,}}>
      <Text style={{fontSize:30,color:"blue",textDecorationLine:"underline",marginLeft:50,marginTop:30,}}>We Provides Our Best</Text>
        <View style={{marginTop:30,alignItems:"center"}}>
          <TextInput
          style={{color:"blue",borderRadius:5,borderWidth:1,width:250,}}
            placeholder="Username"
          />
          <TextInput
          style={{color:"blue",margin:20,borderRadius:5,borderWidth:1,marginTop:20,width:250,}}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        
      <View>
        <TouchableOpacity>
          <Text style={{borderWidth:1,margin:50,textAlign:"center",backgroundColor:"#9b2a2aff",borderRadius:10,marginTop:10,width:180,marginLeft:98}}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <Text>Don't Have An Account! SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LogIn;

