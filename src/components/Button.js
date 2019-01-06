import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { very_light_pink } from "../styles/colors";

const Button = ({title, onPress, style}) => (
    <TouchableHighlight 
        onPress={onPress}
        style={[styles.buttonContainer, style]}
        underlayColor={very_light_pink}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
)
export default Button;