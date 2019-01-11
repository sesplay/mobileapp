import { StyleSheet } from "react-native";
import { robotoLight, robotoMedium, robotoBlack } from "../../styles/fonts";
import { black, white, black_20, brownish_grey, black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    // SEARCH INPUT & BUTTON
    searchInputContainer: {flexDirection: 'row', margin: 15, borderRadius: 6, backgroundColor: white, borderWidth: 0.5, borderColor: black_20, paddingLeft: 16},
    searchIcon: {paddingTop: 18, marginRight: 10},
    searchInputText: {...robotoMedium, lineHeight: 21,letterSpacing: 0.3,color: brownish_grey},
    searchInputTextButton: {paddingTop: 16, paddingBottom: 17},
    searchInput: {flex: 1, paddingTop: 14, paddingBottom: 13},
    // RECENT SEARCH
    recentSearchTitleText: {...robotoBlack, fontSize: 14, letterSpacing: 0.07, color: black2f, padding: 15},
    // SEARCH TITLE
    searchTitleText: {...robotoLight, fontSize: 22, letterSpacing: 1, color: black, paddingHorizontal: 15, marginBottom: 2.5, marginTop: 15},
});

export default styles