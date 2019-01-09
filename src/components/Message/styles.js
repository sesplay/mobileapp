import { StyleSheet } from "react-native";
import { robotoBold, roboto } from "../../styles/fonts";
import { brownish_grey, black2f } from "../../styles/colors";

const styles = StyleSheet.create({
    messageContainer: {flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 20},
    messageAvatar: {width: 44, height: 44, borderRadius: 22},
    messageTextContainer: {marginLeft: 20, marginTop: -3},
    messageNameText: {...robotoBold, fontSize: 18, color: black2f},
    messageText: {...roboto, fontSize: 14, lineHeight: 21, color: brownish_grey}
});

export default styles