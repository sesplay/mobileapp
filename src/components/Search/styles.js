import { StyleSheet } from "react-native";
import { white, black_20, brownish_grey } from "../styles/colors";
import { robotoMedium } from "../styles/fonts";

const styles = StyleSheet.create({
    // SEARCH INPUT & BUTTON
    searchInputContainer: {flexDirection: 'row', margin: 15, borderRadius: 6, backgroundColor: white, borderWidth: 0.5, borderColor: black_20, paddingLeft: 16},
    searchIcon: {paddingTop: 18, marginRight: 10},
    searchInputText: {...robotoMedium, lineHeight: 21,letterSpacing: 0.3,color: brownish_grey},
    searchInputTextButton: {paddingTop: 16, paddingBottom: 17},
    searchInput: {flex: 1, paddingTop: 14, paddingBottom: 13},
});

export default styles