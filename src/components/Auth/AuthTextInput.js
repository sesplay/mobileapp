import React from "react";
import { View, Text, TextInput } from "react-native";
import { black2f } from "../../styles/colors";
import styles from "./styles";

const AuthTextInput = ({label, placeholder, secureTextEntry, onChangeText}) => (
    <View style={styles.inputContainer}>
        <Text style={styles.placeholderText}>{label}</Text>
        <TextInput 
            placeholder={placeholder}
            underlineColorAndroid={black2f}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            style={styles.input}
        />
    </View>
)
export default AuthTextInput;