import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const PlayerHorizontalItem = ({player}) => (
    <View style={styles.playerHorizontalContainer}>
        <View>
            <Image source={{uri: player.images[2].url}} style={styles.playerHorizontalImage} />
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{player.rating.toFixed(1)}</Text>
            </View>
        </View>
        <Text style={styles.playerHorizontalNameText}>{player.name}</Text>
    </View>
)
export default PlayerHorizontalItem;