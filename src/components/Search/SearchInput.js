import React from "react";
import { TextInput, View } from "react-native";
import Icon from "../Icon";
import { brownish_grey } from "../../styles/colors";
import styles from "./styles";

const SearchInput = () => (
    <View style={styles.searchInputContainer}>
        <Icon name="search" size={24} color={brownish_grey} style={styles.searchIcon} />
        <TextInput 
            placeholder="Search"
            placeholderTextColor={brownish_grey}
            style={[styles.searchInputText, styles.searchInput]}
        />
    </View>
)
export default SearchInput;