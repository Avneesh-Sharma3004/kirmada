import React,{useState}from "react";
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
import { text } from "stream/consumers";


 function SignUp({navigation}:any) {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('') 

  function sendCred() {
  fetch("http://10.0.2.2:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error sending credentials:", error);
    });
}


  return (
    <View style={{marginTop:80,}}>
      <Text style={{fontSize:30,color:"blue",textDecorationLine:"underline",marginLeft:50,marginTop:30,}}>We Provides Our Best</Text>
      <Text style={{marginLeft:120,marginTop:25,textDecorationLine:"underline",textDecorationColor:"black"}}>Create An Account</Text>
        <View style={{marginTop:30,alignItems:"center"}}>
          <TextInput
          style={{color:"blue",borderRadius:5,borderWidth:1,width:250,}}
            placeholder="Email"
            
            onChangeText={(text) =>setEmail(text)}
          />
          <TextInput
          style={{color:"blue",margin:20,borderRadius:5,borderWidth:1,marginTop:20,width:250,}}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
          />
        </View>
        
      <View>
        <TouchableOpacity onPress={()=> sendCred()}>
          <Text style={{borderWidth:1,margin:50,textAlign:"center",backgroundColor:"#9b2a2aff",borderRadius:10,marginTop:10,width:180,marginLeft:98}}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
      <Text>Already Have An Account! LogIn</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SignUp;

