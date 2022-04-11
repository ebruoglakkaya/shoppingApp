import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../BoynerProductCard/styles';


const BasketCard = ({product, onPress}) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.containerCloseIcon} size={20} name="close" onPress={onPress} />
      <Image
        source={{uri: product?.PictureUrl}}
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
    </View>
  );
};

export default BasketCard;
