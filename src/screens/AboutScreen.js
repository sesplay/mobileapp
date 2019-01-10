import React, { Component } from "react";
import { ScrollView, View, Text, Image, StatusBar } from "react-native";
import { AboutFooter, AboutContent, AboutHeader, ScreenView } from "../components";
import { white, black12, black_20 } from "../styles/colors";

class AboutScreen extends Component {
    render() {
        return (
            <ScreenView 
                scrollable
                backgroundColor={black12}
                backgroundImage={require('../assets/about_background.png')}
                statusBarBackgroundColor={black_20}
                statusBarTranslucent
                headerBar
                headerTitle="About"
                headerColor={white}
            >
                <AboutHeader />
                <AboutContent />
                <AboutFooter />
            </ScreenView>
        );
    }
}
export default AboutScreen;