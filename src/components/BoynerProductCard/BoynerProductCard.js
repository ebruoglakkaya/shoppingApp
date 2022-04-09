import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";


const BoynerProductCard = ({product, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{uri: product.PictureUrl}} style={styles.image} resizeMode="contain"/>
            <Text style={styles.title}>{product.ModelName}</Text>
            <View style={styles.footer}>
            <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.StickerPrice}</Text>
            <Text style={styles.discountPrice}>{product.DiscountPriceFormatted}</Text>
            </View>
            </View>
        </TouchableOpacity>
    );
};

export {BoynerProductCard}