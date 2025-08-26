import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: '46%',
    margin: '2%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 3,
  },
  image: {
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
});

export default ProductCard;
