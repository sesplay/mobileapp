import React from "react";
import { View, Text, Image } from "react-native";
import { dateFormat } from "../../functions/date";
import styles from "./styles";

const EventHorizontalItem = ({event}) => (
    <View style={styles.eventVerticalContainer}>
        <Image source={{uri: event.images[0].url}} style={styles.eventVerticalImage} />
        <Text style={styles.eventVerticalNameText}>{event.name.toUpperCase()}</Text>
        <Text style={styles.eventVerticalDateText}>{dateFormat(event.date)}</Text>
    </View>
)
export default EventHorizontalItem;