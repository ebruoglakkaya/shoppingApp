import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles';

const BoynerProductCard = ({product, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: product.PictureUrl}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.ProductContainer}>
      <View>
      <Text>{product.ProductBrand}</Text>
      <Text style={styles.title}>{product.ModelName}</Text>
      </View>
      <Icon size={20} name="material-ui" />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{product.StickerPrice}</Text>
          <Text style={styles.discountPrice}>
            {product.DiscountPriceFormatted}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {BoynerProductCard};
