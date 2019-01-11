import { StyleSheet } from "react-native";
import { robotoMedium, roboto } from "../../styles/fonts";
import { black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    eventVerticalContainer: {alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10},
    eventVerticalImage: {height: 100, width: 150, borderRadius: 5},
    eventVerticalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, width: 150, textAlign: 'center', marginTop: 15},
    eventVerticalDateText: {...roboto, fontSize: 12, lineHeight: 21, letterSpacing: 0.3, color: black2f, textAlign: 'center'},
    eventHorizontalContainer: {flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10},
    eventHorizontalImage: {width: 54, height: 36, borderRadius: 5},
    eventHorizontalNameContainer: {flex: 1, justifyContent: 'center'},
    eventHorizontalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, marginLeft: 10},
});

export default styles