import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from 'react-navigation'
import { ScreenView } from '../components'
import { SesplayLogo } from '../assets/logo'
import { black } from "../styles/colors";
import deviceStorage from "../functions/deviceStorage";

class SplashScreen extends Component {
    loadApp = async() => {
        // await deviceStorage.clear()
        const walkthrough = await deviceStorage.getWalkthrough()
        const apiToken = await deviceStorage.getApiToken()
        if (!walkthrough) return this.props.navigation.navigate('Walkthrough')
        if (!apiToken) return this.props.navigation.navigate('Auth')
        return this.props.navigation.navigate('App')
    }
    componentDidMount() {
        this.loadApp()
    }
    render() {
        return (
            <ScreenView 
                hiddenStatusBar
                style={{flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{scale: 1.8}]}}
            >
                <NavigationEvents onDidFocus={this.loadApp} />
                <SesplayLogo color={black} />
            </ScreenView>
        );
    }
}
export default SplashScreen;