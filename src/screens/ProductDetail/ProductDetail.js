import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import {addToBasket} from '../../redux/user/user.actions';

import styles from './styles';

export default function ProductDetail({navigation, route}) {
  const product = route.params;
  const dispatch = useDispatch();
  const boxBasket = useSelector(state => state.user.boxBasket);
  const handleAddToBasket = () => {
    if(boxBasket.includes(product)){
      const newBasket =boxBasket.map((item,index)=>{
        if(!item == product) {
          return item;
        }
      })
      dispatch(addToBasket(newBasket));
    }
    else {
      dispatch(addToBasket([...boxBasket, product]));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsHeaderContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon
            style={styles.backButtonText}
            size={20}
            name="keyboard-backspace"
          />
        </TouchableOpacity>
        <View style={styles.butonsRight}>
          <TouchableOpacity style={styles.backButton}>
            <Icon style={styles.backButtonText} size={20} name="share" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton}>
            <Icon style={styles.backButtonText} size={20} name="basket" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={{uri: product.PictureUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.productBrandContainer}>
        <Text style={styles.productBrand}>{product.ProductBrand}</Text>
        <Text style={styles.title}>{product.ModelName}</Text>
      </View>

      <View style={styles.priceContainer}>
        <View style={styles.priceText}>
          <Text style={styles.price}>{product.StickerPrice}</Text>
          <Text style={styles.discountPrice}>
            {product.DiscountPriceFormatted}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.basketContainer}
          onPress={() => handleAddToBasket()}>
          <Text style={styles.basketText}>{boxBasket.includes(product) ? 'Sepetten Çıkar' : 'Sepete Ekle'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
