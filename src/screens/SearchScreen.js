import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { SearchInput, ScreenView } from "../components";

class SearchScreen extends Component {
    render() {
        return (
            <ScreenView scrollable>
                <SearchInput />
            </ScreenView>
        );
    }
}
export default SearchScreen;