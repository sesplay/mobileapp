import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import styles from "./styles";

const Line = ({color}) => (
    <View style={[styles.lineScreenView, color ? {backgroundColor: color} : null]}></View>
)

const LineScreenView = ({children, lineColor, scrollable = false, contentContainerStyle}) => (
    <React.Fragment>
        <Line color={lineColor} />
        { scrollable ? (
            <ScrollView contentContainerStyle={contentContainerStyle}>{children}</ScrollView>
        ) : (
            <View style={contentContainerStyle}>{children}</View>
        )}
    </React.Fragment>
)
export default LineScreenView;