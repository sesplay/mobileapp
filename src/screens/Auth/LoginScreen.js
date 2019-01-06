import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { AuthScreenView, AuthTextInput, Button, TextButton, AuthTitle } from "../../components";

class LoginScreen extends Component {
    render() {
        return (
            <AuthScreenView>
                <ScrollView contentContainerStyle={{paddingHorizontal: 50, paddingTop: 110, paddingBottom: 30}}>
                    <View style={{width: 228, marginBottom: 85}}>
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
                    <Button title="Login" style={{alignSelf: 'center', marginTop: 5}} />
                    <TextButton 
                        title="Register" 
                        style={{marginTop: 30}} 
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                    <TextButton title="Forgot Password" style={{marginTop: 140}} />
                </ScrollView>
            </AuthScreenView>
        );
    }
}
export default LoginScreen;