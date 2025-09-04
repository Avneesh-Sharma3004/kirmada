import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Animated, // <-- import Animated
} from "react-native";

function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Animated values for opacity and vertical slide
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current; // Start 20px down

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const Login = () => {
    if (username === "admin" && password === "1234") {
      navigation.replace("Home");
    } else {
      Alert.alert("Incorrect user");
    }
  };

  return (
    <View style={Styles.page}>
      <Text style={Styles.sign}>LogIn</Text>

      {/* Animate inputs and button together */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
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

        <TouchableOpacity style={Styles.Button} onPress={Login}>
          <Text style={Styles.login}>Login</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={Styles.other}>Or Login with</Text>
      <View>{/* You can add social login buttons here */}</View>
    </View>
  );
}

export default LoginPage;

const Styles = StyleSheet.create({
  sign: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 80,
    textAlign: "center",
  },
  inputs: {
    height: 60,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
    padding: 20,
  },
  page: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f04a4aff",
  },
  Forget: {
    textAlign: "right",
    padding: 19,
  },
  other: {
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#008000",
    paddingVertical: 10,
    paddingHorizontal: 150,
    borderRadius: 10,
    elevation: 4,
    marginTop: 10,
  },
  login: {
    fontSize: 18, // made this bigger for better visibility
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
