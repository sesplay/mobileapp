import { StyleSheet } from "react-native";
import { aganeS55, aganeS65, aganeS75 } from "../../styles/fonts";
import { brown_grey, black12, white } from "../../styles/colors";

const styles = StyleSheet.create({
    // HEADER
    aboutHeaderContainer: {paddingTop: 50, paddingBottom: 450},
    aboutHeaderText: {...aganeS55, fontSize: 17, lineHeight: 21, color: white, marginHorizontal: 20, textAlign: 'center'},
    // CONTENT
    aboutContentTitle: {...aganeS75, fontSize: 24, color: white, textAlign: 'center', marginBottom: 80},
    aboutContentSectionContainer: {marginBottom: 100, alignItems: 'center'},
    aboutContentSectionDescText: {...aganeS55, fontSize: 16, lineHeight: 20, letterSpacing: -0.2, color: white, textAlign: 'center', marginTop: 50},
    // FOOTER
    aboutFooterContainer: {backgroundColor: white, paddingHorizontal: 20, paddingVertical: 50},
    aboutFooterSectionTitle: {...aganeS55, fontSize: 14, color: brown_grey, textAlign: 'center', marginBottom: 14},
    aboutFooterSectionContentText: {...aganeS65, fontSize: 16, color: black12, textAlign: 'center'}
});

export default styles