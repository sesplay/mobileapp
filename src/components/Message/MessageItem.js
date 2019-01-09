import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation'
import styles from "./styles";
import Avatar from "../Avatar";

const MessageItem = ({navigation, message}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.messageContainer}
    >
        <React.Fragment>
            <Avatar size={44} url={message.images[0].url} />
            <View style={styles.messageTextContainer}>
                <Text style={styles.messageNameText}>{message.name}</Text>
                <Text style={styles.messageText}>{message.message}</Text>
            </View>
        </React.Fragment>
    </TouchableOpacity>
)
export default withNavigation(MessageItem);