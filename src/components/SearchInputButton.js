import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { withNavigation } from 'react-navigation'
import Icon from "./Icon";
import { white, brownish_grey } from "../styles/colors";
import styles from "./styles";

const SearchInputButton = ({navigation}) => (
    <TouchableHighlight 
        onPress={() => navigation.navigate('Search')}
        underlayColor={white}
        style={styles.searchInputContainer}
    >
        <React.Fragment>
            <Icon name="search" size={24} color={brownish_grey} style={styles.searchIcon} />
            <Text style={[styles.searchInputText, styles.searchInputTextButton]}>Search</Text>
        </React.Fragment>
    </TouchableHighlight>
)
export default withNavigation(SearchInputButton);