import { StyleSheet } from "react-native";
import { electric_green, white, black_20, brownish_grey, black2f, black } from "../styles/colors";
import { robotoBlack, robotoMedium, robotoLight, robotoBold, roboto } from "../styles/fonts";

const styles = StyleSheet.create({
    // BUTTON
    buttonContainer: {paddingVertical: 10, paddingHorizontal: 15, borderRadius: 32, backgroundColor: electric_green, width: 170},
    buttonText: {...robotoBlack, fontSize: 18, color: white, textAlign: 'center'},
    buttonTextOnly: {color: electric_green},
    loadMoreButtonText: {...robotoBlack, fontSize: 14, letterSpacing: 0.07, color: black, padding: 15},
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
    // LINE SCREEN VIEW
    lineScreenView: {width: 10, position: 'absolute', top: 0, left: 0, bottom: 0, backgroundColor: electric_green, zIndex: 100},
});

export default styles