import React from "react";
import { Text } from "react-native";
import { electric_green, very_light_pink } from "../../styles/colors";
import styles from "./styles";

const AuthTitle = ({title, color, style}) => {
    let colorStyle = electric_green
    if (color == "veryLightPink") colorStyle = very_light_pink
    return (
        <Text style={[styles.titleText, {color: colorStyle}, style]}>{title}</Text>
    )
}
export default AuthTitle;