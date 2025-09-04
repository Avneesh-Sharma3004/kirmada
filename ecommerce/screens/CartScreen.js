import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CartContext } from '../components/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              >
                <Image source={{ uri: item.image }} style={styles.image} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </Text>

                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.remove}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={{ color: 'white' }}>Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  name: { fontSize: 18, fontWeight: '500' },
  price: { fontSize: 16, color: 'green' },
  remove: { color: 'red', marginTop: 5 },
  clearButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
