import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import missingImage from '../assets/imageMissing.jpg';

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [validImages, setValidImages] = useState({});
  const [refreshing, setRefreshing] = useState(false); // For pull-to-refresh

  // Function to check if an image URL is valid
  const checkImageValidity = async (productId, url) => {
    try {
      const response = await fetch(url, {method: 'HEAD'});
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  // Function to fetch product data
  const fetchProducts = async () => {
    setRefreshing(true); // Start loading animation
    try {
      const response = await axios.get('http://10.0.2.2:5000/products');
      const productsData = response.data;
      setProducts(productsData);

      // Check validity for all product images
      const imageChecks = await Promise.all(
        productsData.map(async product => {
          const isValid = await checkImageValidity(
            product._id,
            product.imageUrl,
          );
          return {[product._id]: isValid};
        }),
      );

      const validImageMap = Object.assign({}, ...imageChecks);
      setValidImages(validImageMap);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false); // Stop loading animation
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedProducts = filteredProducts.sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price,
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products by name"
        value={search}
        onChangeText={setSearch}
      />
      <Button
        title={`Sort by Price (${sortAsc ? 'Ascending' : 'Descending'})`}
        onPress={() => setSortAsc(!sortAsc)}
      />

      <FlatList
        style={{marginVertical: 10}}
        data={sortedProducts}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ProductDetails', {productId: item._id})
            }>
            <Image
              source={
                validImages[item._id] ? {uri: item.imageUrl} : missingImage
              }
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
        onEndReached={fetchProducts} // Refresh when scrolling down
        onEndReachedThreshold={0.2} // Adjust this for earlier/later triggering
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchProducts} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#ddd',
  },
  cardContent: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default HomeScreen;
