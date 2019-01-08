import React, { Component } from "react";
import { View } from "react-native";
import { AuthScreenView, AuthTitle, AuthTextInput, Button } from "../../components";

class RegisterProfileScreen extends Component {
    render() {
        return (
            <AuthScreenView>
                <View style={{marginBottom: 65}}>
                    <AuthTitle 
                        title="Your registration almost done."
                        style={{fontSize: 32, lineHeight: 36, letterSpacing: -0.96,}}
                    />
                </View>
                <AuthTextInput 
                    label="First Name"
                    placeholder="first name"
                />
                <AuthTextInput 
                    label="Last Name"
                    placeholder="last name"
                />
                <AuthTextInput 
                    label="Username"
                    placeholder="username"
                />
                <Button 
                    title="Finish" 
                    style={{alignSelf: 'center', marginTop: 5}} 
                    onPress={() => this.props.navigation.navigate('App')}
                />
            </AuthScreenView>
        );
    }
}
export default RegisterProfileScreen;