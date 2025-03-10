import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import missingImage from '../assets/imageMissing.jpg';

const ProductDetailsScreen = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState(null);

  const [isImageValid, setIsImageValid] = useState(true);

  const checkImageValidity = async url => {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        setIsImageValid(true);
      } else {
        setIsImageValid(false);
      }
    } catch (error) {
      setIsImageValid(false);
    }
  };

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/products/${productId}`)
      .then(response => {
        const {imageUrl} = response.data;
        setProduct(response.data);

        if (imageUrl) {
          checkImageValidity(imageUrl);
        } else {
          setIsImageValid(false);
        }
      })
      .catch(error => console.error(error));
  }, [productId]);

  return product ? (
    <View style={styles.container}>
      <Image
        source={isImageValid ? {uri: product.imageUrl} : missingImage}
        style={styles.image}
      />
      <Text>Name: {product.name}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Price: {product.price}</Text>
    </View>
  ) : (
    <Text>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default ProductDetailsScreen;
