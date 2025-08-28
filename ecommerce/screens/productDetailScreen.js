import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.header}>Reviews :</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
      <Text>{product.reviews1}</Text>
      <Text>{product.Stars1}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text>{product.reviews2}</Text>
      <Text>{product.Stars2}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text>{product.reviews3}</Text>
      <Text>{product.Stars3}</Text>
      </View>
      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text>{product.reviews4}</Text>
        <Text>{product.Stars4}</Text>
      </View>
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'stretch'}}>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'blue', borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center',}}>Buy Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  header:{
   fontWeight:'bold',
   marginTop: 20,
  }
});

export default ProductDetailsScreen;
