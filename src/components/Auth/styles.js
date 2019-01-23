import { StyleSheet } from "react-native";
import { robotoBold, aganeS65 } from "../../styles/fonts";
import { black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    inputContainer: {marginBottom: 40},
    placeholderText: {...robotoBold, fontSize: 14, color: black2f},
    input: {...robotoBold, fontSize: 24, color: black2f, marginHorizontal: -4, paddingBottom: 18, paddingTop: 7, width: '100%'},
    titleText: {...aganeS65, fontSize: 48, letterSpacing: -1.44, lineHeight: 56}
});

export default styles