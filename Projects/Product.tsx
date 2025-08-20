import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from 'react-native';

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

const Api = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch products from API
  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    if (cart.find((item) => item.id === product.id)) {
      return;
    }
    setCart([...cart, product]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId: number) => {
    Alert.alert(
      'Remove from Cart',
      'Are you sure you want to remove this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
          },
        },
      ]
    );
  };

 
  const BuyOrCart = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      
      <View
        style={{
          padding: 12,
          backgroundColor: '#eee',
          marginBottom: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
          {cart.map((item) => (
            <View
              key={item.id}
              style={{
                padding: 8,
                backgroundColor: '#ddd',
                borderRadius: 5,
                marginRight: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{ marginBottom: 4 }}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(item.id)}
                style={{
                  backgroundColor: '#f44336',
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

    
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
              elevation: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
              {selectedProduct?.title}
            </Text>
            <Text style={{ marginBottom: 20 }}>Buy or Add to Cart?</Text>

            <Pressable
              style={{
                backgroundColor: '#2196F3',
                padding: 10,
                borderRadius: 5,
                width: '100%',
                marginBottom: 10,
              }}
              onPress={() => {
                if (selectedProduct) handleAddToCart(selectedProduct);
                setShowModal(false);
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Add to Cart</Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: '#f44336',
                padding: 10,
                borderRadius: 5,
                width: '100%',
              }}
              onPress={() => {
                setShowModal(false);
                setTimeout(() => {
                  alert('Purchase failed! Insufficient balance.');
                }, 300);
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Buy</Text>
            </Pressable>

            <Pressable onPress={() => setShowModal(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: '#888' }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 24 }}>
              <TouchableOpacity onPress={() => BuyOrCart(item)}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ width: '100%', height: 200, borderRadius: 10 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Api;
