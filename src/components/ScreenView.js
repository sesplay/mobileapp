import React from "react";
import { View, ScrollView, StatusBar, Image, Dimensions } from "react-native";
import HeaderBar from "./HeaderBar";
import { white } from "../styles/colors";

const Basic = ({backgroundImage, statusBarBackgroundColor, statusBarTranslucent = false, headerBar = false, headerBarStyle, headerTitle, headerTitleStyle, headerColor}) => (
    <React.Fragment>
        <StatusBar barStyle="dark-content" backgroundColor={statusBarBackgroundColor ? statusBarBackgroundColor : white} translucent={statusBarTranslucent} />
        { backgroundImage ? <Image source={backgroundImage} style={{width: '100%', height: Dimensions.get('window').width * 1.868613139, position: 'absolute', top: 0}} /> : null }
        { statusBarTranslucent ? <View style={{height: StatusBar.currentHeight}}></View> : null }
        { headerBar ? <HeaderBar title={headerTitle} titleStyle={headerTitleStyle} color={headerColor} semutyle={headerBarStyle} /> : null }
    </React.Fragment>
)

const ScreenView = (props) => {
    let {backgroundColor, style, scrollable = false, children} = props
    return scrollable ?
        (
            <ScrollView contentContainerStyle={[backgroundColor ? {backgroundColor: backgroundColor} : null, style]}>
                <Basic {...props} />
                {children}
            </ScrollView>
        ) : 
        (
            <View style={[backgroundColor ? {backgroundColor: backgroundColor} : null, style]}>
                <Basic {...props} />
                {children}
            </View>
        )
}

export default ScreenView;