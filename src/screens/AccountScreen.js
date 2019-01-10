import React, { Component } from "react";
import { Icon, TitleSection, ScreenView, AccountNav } from "../components";

class AccountScreen extends Component {
    static navigationOptions = {
        title: "Account",
        tabBarIcon: ({ tintColor }) => <Icon name="account" color={tintColor} size={22}/>,
    }
    render() {
        return (
            <ScreenView>
                <TitleSection title="Account" style={{marginTop: 35, marginBottom: 25}} />
                <AccountNav title="Edit Profile"/>
                <AccountNav title="Change Password"/>
                <AccountNav 
                    title="About"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </ScreenView>
        );
    }
}
export default AccountScreen;