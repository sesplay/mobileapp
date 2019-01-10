import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const AboutFooterSection = ({title, content, containerStyle, children}) => (
    <View style={containerStyle}>
        <Text style={styles.aboutFooterSectionTitle}>{title}</Text>
        { typeof content == "string" ? (
            <Text style={styles.aboutFooterSectionContentText}>{content}</Text>
        ) : children}
    </View>
)

const AboutFooter = () => (
    <View style={styles.aboutFooterContainer}>
        <AboutFooterSection 
            title="Contact us"
            content="help@sesplay.com"
            containerStyle={{marginBottom: 70}}
        />
        <AboutFooterSection title="Made by">
            <View style={{alignItems: 'center'}} >
                <Image source={require('../../assets/logo_kinwep.png')}/>
            </View>
        </AboutFooterSection>
    </View>
)

export default AboutFooter;