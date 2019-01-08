import React from "react";
import { View, Text, Image } from "react-native";
import { dateFormat } from "../../functions/date";
import styles from "./styles";

const EventHorizontalItem = ({event}) => (
    <View style={styles.eventHorizontalContainer}>
        <Image source={{uri: event.images[0].url}} style={styles.eventHorizontalImage} />
        <Text style={styles.eventHorizontalNameText}>{event.name.toUpperCase()}</Text>
        <Text style={styles.eventHorizontalDateText}>{dateFormat(event.date)}</Text>
    </View>
)
export default EventHorizontalItem;