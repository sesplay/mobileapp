import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const LoadMoreButton = ({title, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.loadMoreButtonText}>{title}</Text>
    </TouchableOpacity>
)
export default LoadMoreButton;