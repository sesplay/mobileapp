import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { AuthScreenView, AuthTitle, AuthTextInput, Button, TextButton } from "../../components";

class RegisterScreen extends Component {
    render() {
        return (
            <AuthScreenView>
                <ScrollView contentContainerStyle={{paddingHorizontal: 50, paddingTop: 110, paddingBottom: 30}}>
                    <View style={{width: 228, marginBottom: 150}}>
                        <AuthTitle 
                            title="Register"
                            style={{marginBottom: 5}}
                        />
                    </View>
                    <AuthTextInput 
                        label="Email"
                        placeholder="example@mail.com"
                    />
                    <AuthTextInput 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                    />
                    <Button 
                        title="Register" 
                        style={{alignSelf: 'center', marginTop: 5}} 
                        onPress={() => this.props.navigation.navigate('RegisterProfile')}
                    />
                    <TextButton 
                        title="Login" 
                        style={{marginTop: 30}} 
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </ScrollView>
            </AuthScreenView>
        );
    }
}
export default RegisterScreen;