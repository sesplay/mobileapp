import { StyleSheet } from "react-native";
import { robotoMedium, roboto } from "../../styles/fonts";
import { black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    eventHorizontalContainer: {alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10},
    eventHorizontalImage: {height: 100, width: 150, borderRadius: 5},
    eventHorizontalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, width: 150, textAlign: 'center', marginTop: 15},
    eventHorizontalDateText: {...roboto, fontSize: 12, lineHeight: 21, letterSpacing: 0.3, color: black2f, textAlign: 'center'}
});

export default styles