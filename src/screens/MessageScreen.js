import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Icon, TitleSection, MessageItem } from "../components";
import { messages } from "../data/message";

class MessageScreen extends Component {
    static navigationOptions = {
        title: "Message",
        tabBarIcon: ({ tintColor }) => <Icon name="chat" color={tintColor} size={22}/>,
    }
    constructor() {
        super()
        this.state = {
            messages: messages
        }
    }
    render() {
        return (
            <View>
                <TitleSection title="Message" style={{marginTop: 35, marginBottom: 20}} />
                <FlatList 
                    data={this.state.messages}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                       <MessageItem message={item} />
                    )}
                />
            </View>
        );
    }
}
export default MessageScreen;