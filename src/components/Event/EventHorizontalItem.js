import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';

const EventHorizontalItem = ({event}) => (
    <View style={styles.eventHorizontalContainer}>
        <Image source={{uri: event.images[0].url}} style={styles.eventHorizontalImage} />
        <View style={styles.eventHorizontalNameContainer}>
            <Text style={styles.eventHorizontalNameText}>{event.name.toUpperCase()}</Text>
        </View>
    </View>
)

export default EventHorizontalItem