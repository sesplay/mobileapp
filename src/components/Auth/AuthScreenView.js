import React from "react";
import { View } from "react-native";
import styles from "./styles";

const AuthScreenView = ({children}) => (
    <React.Fragment>
        <View style={styles.lineScreenView}></View>
        <View>{children}</View>
    </React.Fragment>
)
export default AuthScreenView;