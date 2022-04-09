import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";


const BoynerProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: product.PictureUrl}} style={styles.image} resizeMode="contain"/>
            <Text style={styles.title}>{product.ModelName}</Text>
            <View style={styles.footer}>
            <Text style={styles.price}>{product.StickerPrice}</Text>
            </View>
        </View>
    );
};

export {BoynerProductCard}