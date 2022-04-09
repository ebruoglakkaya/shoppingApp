import {View, Text, Button, SafeAreaView, Image} from 'react-native';
import React from 'react';

import styles from './styles';

export default function ProductDetail({navigation, route}) {
  console.log(route.params);
  const product = route.params;

  return (
    <SafeAreaView>
      <Image
        source={{uri: product.PictureUrl}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{product.ModelName}</Text>
      <Text>{product.DiscountPriceFormatted}</Text>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.StickerPrice}</Text>
          <Text style={styles.discountPrice}>
            {product.DiscountPriceFormatted}
          </Text>
        </View>
      </View>

      <Button title="Go Back!" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
