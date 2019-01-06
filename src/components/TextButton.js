import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const TextButton = ({title, onPress, style}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <Text style={[styles.buttonText, styles.buttonTextOnly, style]}>
            {title}
        </Text>
    </TouchableWithoutFeedback>
)
export default TextButton;