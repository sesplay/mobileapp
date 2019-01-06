import { StyleSheet } from "react-native";
import { electric_green, white } from "../styles/colors";
import { robotoBlack } from "../styles/fonts";

const styles = StyleSheet.create({
    // BUTTON
    buttonContainer: {paddingVertical: 10, paddingHorizontal: 15, borderRadius: 32, backgroundColor: electric_green, width: 170},
    buttonText: {...robotoBlack, fontSize: 18, color: white, textAlign: 'center'},
    buttonTextOnly: {color: electric_green}
});

export default styles