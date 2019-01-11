import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const LoadMoreButton = ({title, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text style={styles.loadMoreButtonText}>{title}</Text>
    </TouchableOpacity>
)
export default LoadMoreButton;