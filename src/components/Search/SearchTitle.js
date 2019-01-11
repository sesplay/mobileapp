import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const SearchTitle = ({title}) => (
    <Text style={styles.searchTitleText}>{title}</Text>
)
export default SearchTitle;