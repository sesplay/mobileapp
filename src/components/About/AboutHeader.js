import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const AboutHeader = () => (
    <View style={styles.aboutHeaderContainer}>
        <Text style={styles.aboutHeaderText}>
            Adanya musisi atau pemain musik yang belum mendapatkan rekan pemain musik untuk berkolaborasi pada saat perform, rekaman, dan berkolaborasi pada sebuah lagu atau project musik.
        </Text>
    </View>
)
export default AboutHeader;