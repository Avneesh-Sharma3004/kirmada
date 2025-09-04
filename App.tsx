// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ecommerce/screens/Homescreens';
import productDetailsScreen from './ecommerce/screens/productDetailScreen';
import LoginPage from './ecommerce/screens/LoginScreen';
import CartScreen from './ecommerce/screens/CartScreen';
import { CartProvider } from './ecommerce/components/CartContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetails" component={productDetailsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="ProductDetail" component={productDetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
