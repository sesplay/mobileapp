import { StyleSheet } from "react-native";
import { robotoMedium } from "../../styles/fonts";
import { black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    playerHorizontalContainer: {alignItems: 'center', paddingVertical: 5, paddingHorizontal: 5},
    playerHorizontalImage: {height: 100, width: 100, borderRadius: 50},
    playerHorizontalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, width: 115, marginTop: 15, textAlign: 'center'},
});

export default styles