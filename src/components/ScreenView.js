import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { white } from "../styles/colors";
import HeaderBar from "./HeaderBar";

const Basic = ({headerBar = false, headerTitle, headerTitleStyle, headerColor}) => (
    <React.Fragment>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        { headerBar ? <HeaderBar title={headerTitle} titleStyle={headerTitleStyle} color={headerColor} /> : null }
    </React.Fragment>
)

const ScreenView = ({style, scrollable = false, children}) =>
    scrollable ?
        (
            <ScrollView contentContainerStyle={style}>
                <Basic {...this.props} />
                {children}
            </ScrollView>
        ) : 
        (
            <View style={style}>
                <Basic {...this.props} />
                {children}
            </View>
        )

export default ScreenView;