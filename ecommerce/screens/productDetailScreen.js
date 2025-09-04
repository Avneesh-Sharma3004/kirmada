// ecommerce/screens/ProductDetailsScreen.js

import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../components/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cartItems, addToCart } = useContext(CartContext);

  const isInCart = cartItems.some((item) => item.id === product.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>🛒 {cartItems.length}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, cartItems.length]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.image || 'https://via.placeholder.com/250' }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.header}>Reviews:</Text>
      {[1, 2, 3, 4].map((i) => (
        <View key={i} style={styles.reviewRow}>
          <Text>{product[`reviews${i}`] || 'User Experience'}</Text>
          <Text>{product[`Stars${i}`] || '⭐️⭐️⭐️⭐️'}</Text>
        </View>
      ))}

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, isInCart && styles.disabledButton]}
          onPress={() => !isInCart && addToCart(product)}
          disabled={isInCart}
        >
          <Text style={styles.buttonText}>{isInCart ? 'Already in Cart' : 'Add to Cart'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 100, // extra space for buttons
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 20 },
  price: { fontSize: 20, color: 'green', marginVertical: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  header: { fontWeight: 'bold', marginTop: 20 },
  reviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 30,
    gap: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 16 },
  disabledButton: {
    backgroundColor: '#999',
  },
});

export default ProductDetailsScreen;
