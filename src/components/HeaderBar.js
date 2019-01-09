import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { withNavigation } from 'react-navigation'
import Icon from "./Icon";
import styles from "./styles";
import { black2f, white_two } from "../styles/colors";

const HeaderBar = ({navigation, color, title, titleStyle, headerLeft = true, style}) => (
    <View style={[styles.headerBarContainer, style]}>
        <TouchableHighlight 
            onPress={() => navigation.goBack()}
            underlayColor={white_two}
            style={styles.headerButtonContainer}
        >
            {headerLeft ? <Icon name="arrow-left" size={24} color={color ? color : black2f} /> : null}
        </TouchableHighlight>
        <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerTitleText, titleStyle, {color: color ? color : black2f}]}>{title}</Text>
        </View>
        <View style={styles.headerButtonContainer}>

        </View>
    </View>
)
export default withNavigation(HeaderBar);