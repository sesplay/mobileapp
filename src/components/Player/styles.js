import { StyleSheet, Dimensions } from "react-native";
import { robotoMedium, robotoBold, robotoLight, roboto, robotoBlack } from "../../styles/fonts";
import { black2f, black, electric_green, brownish_grey, very_light_pink, black_50 } from "../../styles/colors";

const styles = StyleSheet.create({
    playerVerticalContainer: {alignItems: 'center', paddingVertical: 5, paddingHorizontal: 5},
    playerVerticalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, width: 115, marginTop: 15, textAlign: 'center'},
    playerHorizontalContainer: {paddingHorizontal: 15, paddingVertical: 12.5, flexDirection: 'row'},
    playerHorizontalNameContainer: {flex: 1, justifyContent: "center"},
    playerHorizontalNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, marginLeft: 10},
    // PROFILE HEADER
    playerProfileHeaderContainer: {alignItems: 'center', marginTop: 30},
    playerProfileNameText: {...robotoBold, fontSize: 28, color: black2f, marginTop: 35, marginBottom: 5},
    playerProfileDescText: {...robotoLight, fontSize: 22, letterSpacing: 1, color: black},
    playerProfileRowContainer: {flexDirection: 'row', marginVertical: 35, width: 320},
    playerProfileColumnContainer: {alignItems: 'center', flex: 1},
    playerProfileValueText: {...robotoBold, fontSize: 18, color: black2f},
    playerProfileValueDescText: {...roboto, fontSize: 18, color: electric_green},
    // PROFILE CONTENT
    playerProfileAboutText: {...roboto, fontSize: 16, lineHeight: 21, color: black2f, paddingHorizontal: 15},
    // PROFILE EVENT
    profileEventItemContainer: {flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10},
    profileEventImage: {width: 54, height: 36, borderRadius: 5},
    profileEventNameContainer: {flex: 1, justifyContent: 'center'},
    profileEventNameText: {...robotoMedium, fontSize: 14, lineHeight: 21, letterSpacing: 0.3, color: black2f, marginLeft: 10},
    // PROFILE SKILL
    profileSkillItemContainer: {paddingHorizontal: 10, paddingVertical: 7, borderColor: black_50, borderWidth: 0.5, borderRadius: 15, width: 100, marginHorizontal: 2.5, marginBottom: 10},
    profileSkillText: {...robotoMedium, fontSize: 12, letterSpacing: 0.4, color: black2f, textAlign: 'center'},
    // PROFILE REVIEW
    profileReviewItemContainer: {marginLeft: 15},
    profileReviewRowContainer: {flexDirection: 'row'},
    profileReviewInfoContainer: {marginLeft: 20},
    profileReviewInfoText: {...roboto, fontSize: 18, color: black2f},
    profileReviewInfoBoldText: {...robotoBold},
    profileReviewDateText: {...roboto, fontSize: 12, lineHeight: 16, letterSpacing: 0.4, color: very_light_pink, marginTop: 2},
    profileReviewRatingText: {...robotoLight, fontSize: 22, letterSpacing: 1, color: black, marginTop: 2},
    profileReviewRatingContainer: {width: 44, alignItems: 'center'},
    profileReviewText: {...roboto, fontSize: 16, lineHeight: 21, color: brownish_grey, flex: 1, marginLeft: 20},
    // PROFILE WORK
    profileWorkItemContainer: {padding: 15, flex: 1, marginBottom: 5},
    profileWorkImage: {width: '100%', height: (Dimensions.get('window').width-60)/2},
    profileWorkNameText : {...robotoBold, fontSize: 18, color: black, marginTop: 20, textAlign: 'center'},
});

export default styles