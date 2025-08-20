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


 function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    if (username === "admin" && password === "admin") {
      Alert.alert("Welcome admin");
    } else {
      Alert.alert("Incorrect user");
    }
  };

  return (
    <View style ={Styles.page}>
      <Text style={Styles.sign}>LogIn</Text>
        <View>
          <TextInput
            style={Styles.inputs}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={Styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={Styles.Forget}>Forget Password</Text>
        </View>
      <View>
        <TouchableOpacity  style={Styles.Button} onPress={Login}>
          <Text style={Styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.other}>Or Login with</Text>
      <View>
        
      </View>
    </View>
  );
}
export default LoginPage;

const Styles = StyleSheet.create({
  sign: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 100,
    textAlign: 'center'
  },
  inputs: {
    height: 40,         
    borderColor: 'gray',
    borderWidth: 1,  
    borderRadius: 10,
    fontSize: 16,
    marginTop:10,
  },
  page:{
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Forget:{
    textAlign:"right",
    padding:19,
  },
  other:{
    
    marginTop:20,
  },
  Button:{
    backgroundColor:"#008000",
    paddingVertical:10,
    paddingHorizontal:150,
    borderRadius:10,
    elevation:4,
  },
  login:{
    fontSize:10,
    color:"#fff",
    fontWeight:"bold",
  },
  
  
  
  
});
