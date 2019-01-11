import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation'
import Avatar from "../Avatar";
import styles from "./styles";

const PlayerHorizontalItem = ({navigation, player}) => (
    <TouchableOpacity 
        onPress={() => navigation.navigate('Profile', {playerId: player.id})}
        style={styles.playerHorizontalContainer}
    >
        <React.Fragment>
            <Avatar size={36} url={player.images[2].url} rating={player.rating} />
            <View style={styles.playerHorizontalNameContainer}>
                <Text style={styles.playerHorizontalNameText}>{player.name}</Text>
            </View>
        </React.Fragment>
    </TouchableOpacity>
)
export default withNavigation(PlayerHorizontalItem);