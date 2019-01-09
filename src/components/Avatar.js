import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Avatar = ({url, rating = null, size}) => (
    <View style={{width: size, height: size}}>
        <Image source={{uri: url}} style={{width: size, height: size, borderRadius: size/2}} />
        { rating ? (
            <View style={[styles.ratingContainer, size >= 150 ? styles.ratingLargeContainer : null]}>
                <Text style={[styles.ratingText, size >= 150 ? styles.ratingLargeText : null]}>{rating.toFixed(1)}</Text>
            </View>
        ) : null }
    </View>
)
export default Avatar;