import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const MessageItem = ({message}) => (
    <TouchableOpacity
        style={styles.messageContainer}
    >
        <React.Fragment>
            <Image source={{uri: message.images[0].url}} style={styles.messageAvatar} />
            <View style={styles.messageTextContainer}>
                <Text style={styles.messageNameText}>{message.name}</Text>
                <Text style={styles.messageText}>{message.message}</Text>
            </View>
        </React.Fragment>
    </TouchableOpacity>
)
export default MessageItem;