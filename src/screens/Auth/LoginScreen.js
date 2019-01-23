import React, { Component } from "react";
import { View } from "react-native";
import { AuthScreenView, AuthTextInput, Button, TextButton, AuthTitle } from "../../components";
import { very_light_pink } from "../../styles/colors";
import deviceStorage from "../../functions/deviceStorage";

class LoginScreen extends Component {
    login = async() => {
        const user = {
            id: "123das",
            name: "Rinaldy Dwi Istanto"
        }
        const apiToken = "123456789"
        await deviceStorage.saveUserInfo(user)
        await deviceStorage.saveApiToken(apiToken)
        return this.props.navigation.navigate('App')
    }
    render() {
        return (
            <AuthScreenView>
                <View style={{marginBottom: 85}}>
                    <AuthTitle 
                        title="Start Here."
                        style={{marginBottom: 5}}
                    />
                    <AuthTitle 
                        title="Please login with your account."
                        color="veryLightPink"
                        style={{fontSize: 24, lineHeight: 28, width: 228, letterSpacing: -0.72}}
                    />
                </View>
                <AuthTextInput 
                    label="Username"
                    placeholder="username"
                />
                <AuthTextInput 
                    label="Password"
                    placeholder="password"
                    secureTextEntry
                />
                <Button 
                    title="Login" 
                    style={{alignSelf: 'center', marginTop: 5}}
                    onPress={this.login}
                />
                <TextButton 
                    title="Register" 
                    style={{marginTop: 30}} 
                    onPress={() => this.props.navigation.navigate('Register')}
                />
                <TextButton 
                    title="Forgot Password" 
                    style={{marginTop: 140, color: very_light_pink}}
                />
            </AuthScreenView>
        );
    }
}
export default LoginScreen;