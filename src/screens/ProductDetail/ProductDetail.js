import {View, Text, Button, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';

export default function ProductDetail({navigation, route}) {
  const product = route.params;

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
      <Image
        source={{uri: product.PictureUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.productBrandContainer}>
      <Text style={styles.productBrand}>{product.ProductBrand}</Text>
      <Text style= {styles.title}>{product.ModelName}</Text>
      </View>
      

      <View style={styles.priceContainer}>
      <View style={styles.priceText}>
      <Text style={styles.price}>{product.StickerPrice}</Text>
      <Text style={styles.discountPrice}>{product.DiscountPriceFormatted}
      </Text>
      </View>

      <TouchableOpacity style={styles.basketContainer}>
              <Text style={styles.basketText}>Sepete Ekle</Text>
          </TouchableOpacity>
      </View>
         
    </View>
  );
}
