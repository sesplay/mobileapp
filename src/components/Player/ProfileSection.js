import React from "react";
import { View, Text } from "react-native";
import TitleSection from "../TitleSection";

const ProfileSection = ({title, children, contentContainerStyle}) => (
    <View style={{marginTop: 30}}>
        <TitleSection title={title} />
        <View style={contentContainerStyle}>
            {children}
        </View>
    </View>
)
export default ProfileSection;