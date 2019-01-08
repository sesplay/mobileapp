import { StyleSheet } from "react-native";
import { robotoMedium } from "../../styles/fonts";
import { electric_green, white, black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    playerHorizontalContainer: {alignItems: 'center', paddingVertical: 5, paddingHorizontal: 5},
    playerHorizontalImage: {height: 100, width: 100, borderRadius: 50},
    playerHorizontalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, width: 115, marginTop: 15, textAlign: 'center'},
    // RATING
    ratingContainer: {height: 35, width: 35, backgroundColor: electric_green, borderRadius: 32/2, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, bottom: 0},
    ratingText: {...robotoMedium, fontSize: 12,lineHeight: 16,letterSpacing: -0.3,color: white}
});

export default styles