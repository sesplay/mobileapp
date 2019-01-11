import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon, TitleSection, ScreenView } from "../components";

class EventScreen extends Component {
    static navigationOptions = {
        title: "Event",
        tabBarIcon: ({ tintColor }) => <Icon name="event" color={tintColor} size={22}/>,
    }
    render() {
        return (
            <ScreenView>
                <TitleSection title="Event" style={{marginTop: 35, marginBottom: 25}} />
            </ScreenView>
        );
    }
}
export default EventScreen;