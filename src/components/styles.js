import { StyleSheet } from "react-native";
import { electric_green, white, black_20, brownish_grey, black2f } from "../styles/colors";
import { robotoBlack, robotoMedium, robotoLight, robotoBold, roboto } from "../styles/fonts";

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
    titleSectionBold: {...robotoBold, fontSize: 28, paddingHorizontal: 15, marginBottom: 20},
    // HEADER BAR
    headerBarContainer: {flexDirection: 'row'},
    headerButtonContainer: {width: 42, height: 42, padding: 10, margin: 10, borderRadius: 21, alignItems: 'center', justifyContent: 'center'},
    headerTitleContainer: {paddingHorizontal: 15, justifyContent: 'center', flex: 1},
    headerTitleText: {...roboto, fontSize: 20},
    // RATING
    ratingContainer: {height: 35, width: 35, backgroundColor: electric_green, borderRadius: 32/2, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, bottom: 0},
    ratingText: {...robotoMedium, fontSize: 12,lineHeight: 16,letterSpacing: -0.3,color: white},
    ratingLargeContainer: {width: 41, height: 41, borderRadius: 41/2},
    ratingLargeText: {fontSize: 16, lineHeight: 20},
});

export default styles