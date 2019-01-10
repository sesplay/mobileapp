import React from "react";
import { View, Text, FlatList } from "react-native";
import { AboutOne, AboutTwo, AboutThree, AboutFour, AboutFive } from "../../assets";
import styles from "./styles";

const AboutContentData = [
    {
        key: "1",
        description: "Connect musician (Solo Artist and Band) with session players to collaborate when performing, recording, and collaborating on a song or music project.",
        image: <AboutOne />
    },
    {
        key: "2",
        description: "Book Solo Artist or Band to an Event.",
        image: <AboutTwo />
    },
    {
        key: "3",
        description: "Providing ticket purchases for a music event.",
        image: <AboutThree />
    },
    {
        key: "4",
        description: "As a music portfolio for musicians and bands.",
        image: <AboutFour />
    },
    {
        key: "5",
        description: "Connect, share, and learn. Building community of musician. ",
        image: <AboutFive />
    }
]

const AboutContentSection = ({description, containerStyle, children}) => (
    <View style={[styles.aboutContentSectionContainer, containerStyle]}>
        {children}
        <Text style={styles.aboutContentSectionDescText}>{description}</Text>
    </View>
)

const AboutContent = () => (
    <View style={{paddingTop: 160, paddingHorizontal: 20}}>
        <Text style={styles.aboutContentTitle}>Services</Text>
        <FlatList 
            data={AboutContentData}
            renderItem={({item}) => (
                <AboutContentSection description={item.description}>
                    {item.image}
                </AboutContentSection>
            )}
        />
    </View>
)
export default AboutContent;