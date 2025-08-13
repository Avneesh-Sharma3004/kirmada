import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './SignupScreen';
import LogIn from './LogInScreeen';

const Stack = createNativeStackNavigator();

export default function Appppp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn"
      screenOptions={{ headerShown: false }}

      >
        
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
