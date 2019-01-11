import React from "react";
import { View, Text } from "react-native";
import Avatar from "../Avatar";
import Button from "../Button";
import styles from "./styles";

const ProfileHeader = ({player}) => (
    <View style={styles.playerProfileHeaderContainer}>
        <Avatar size={150} url={player.images[1].url} rating={player.rating} /> 
        <Text style={styles.playerProfileNameText}>{player.name}</Text>
        <Text style={styles.playerProfileDescText}>Session Player</Text>
        <Text style={[styles.playerProfileDescText, {lineHeight: 24}]}>{player.location}</Text>
        <View style={styles.playerProfileRowContainer}>
            <View style={styles.playerProfileColumnContainer}>
                <Text style={styles.playerProfileValueText}>{player.followers}</Text>
                <Text style={styles.playerProfileValueDescText}>Followers</Text>
            </View>
            <View style={styles.playerProfileColumnContainer}>
                <Text style={styles.playerProfileValueText}>{player.fee}</Text>
                <Text style={styles.playerProfileValueDescText}>Service Fee</Text>
            </View>
        </View>
        <Button 
            title="Invite"
        />
    </View>
)
export default ProfileHeader;