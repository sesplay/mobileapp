import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const InsightItem = ({insight}) => (
    <View style={styles.insightContainer}>
        <Image source={{uri: insight.images[0].url}} style={styles.insightImage} />
    </View>
)
export default InsightItem;