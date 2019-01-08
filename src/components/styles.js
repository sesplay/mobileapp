import { StyleSheet } from "react-native";
import { electric_green, white, black_20, brownish_grey, black2f } from "../styles/colors";
import { robotoBlack, robotoMedium, robotoLight, robotoBold } from "../styles/fonts";

const styles = StyleSheet.create({
    // BUTTON
    buttonContainer: {paddingVertical: 10, paddingHorizontal: 15, borderRadius: 32, backgroundColor: electric_green, width: 170},
    buttonText: {...robotoBlack, fontSize: 18, color: white, textAlign: 'center'},
    buttonTextOnly: {color: electric_green},
    // SEARCH
    searchInputContainer: {flexDirection: 'row', margin: 15, borderRadius: 6, backgroundColor: white, borderWidth: 0.5, borderColor: black_20, paddingLeft: 16},
    searchIcon: {paddingTop: 18, marginRight: 10},
    searchInputText: {...robotoMedium, lineHeight: 21,letterSpacing: 0.3,color: brownish_grey},
    searchInputTextButton: {paddingTop: 16, paddingBottom: 17},
    searchInput: {flex: 1, paddingTop: 14, paddingBottom: 13},
    // TITLE SECTION
    titleSection: {color: black2f},
    titleSectionLight: {...robotoLight, fontSize: 22, letterSpacing: 1},
    titleSectionBold: {...robotoBold, fontSize: 28}
});

export default styles