import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const TitleSection = ({title, style, light = false}) => (
    <Text style={[styles.titleSection, light ? styles.titleSectionLight : styles.titleSectionBold, style]}>{title}</Text>
)
export default TitleSection;