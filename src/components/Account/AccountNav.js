import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const AccountNav = ({title, onPress}) => (
    <TouchableOpacity 
        onPress={onPress}
    >
        <Text style={styles.accountNavTitleText}>{title}</Text>
    </TouchableOpacity>
)
export default AccountNav;