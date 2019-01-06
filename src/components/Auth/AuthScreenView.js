import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

const AuthScreenView = ({children}) => (
    <React.Fragment>
        <View style={styles.lineScreenView}></View>
        <ScrollView contentContainerStyle={{paddingHorizontal: 50, paddingTop: 110, paddingBottom: 30}}>{children}</ScrollView>
    </React.Fragment>
)
export default AuthScreenView;