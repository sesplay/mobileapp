import React from "react";
import { StatusBar } from 'react-native'
import LineScreenView from "../LineScreenView";

const AuthScreenView = ({children}) => (
    <LineScreenView contentContainerStyle={{paddingHorizontal: 50, paddingTop: 110, paddingBottom: 30}} scrollable>
        <StatusBar backgroundColor="white" hidden={false} barStyle="dark-content" />
        {children}
    </LineScreenView>
)
export default AuthScreenView;