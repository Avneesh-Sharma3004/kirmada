import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import ProductCard from '../components/productCArt';
import products from '../data/products';
import { banners } from '../data/banner';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  // Header component for FlatList (includes banner scroll + search input)
  const renderBannerHeader = () => (
    <View>

    {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      {/* Banner Scroll */}
      <ScrollView
        horizontal
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.bannerScroll}
      >
        {banners.map((banner) => (
          <Image
            key={banner.id}
            source={{ uri: banner.image }}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={renderBannerHeader}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetails', { product: item })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 10,
  },
  bannerContainer: {
    marginTop: 10,
  },
  bannerScroll: {
    paddingRight: 10,
  },
  bannerImage: {
    width: screenWidth * 1.0,
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  productList: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
