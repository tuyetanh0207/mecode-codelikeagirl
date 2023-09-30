import { StyleSheet } from "react-native";
import * as CONST from "../Utils/constants";
import { StatusBar } from 'react-native';

export const LeaderBoardStyles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: "4%",
    },
    title: {
        color: CONST.HEADING2_COLOR,
        fontFamily: 'Inter-Bold',
        fontSize: CONST.responsiveHeight(32),
        lineHeight: CONST.responsiveHeight(39),
        letterSpacing: -0.005,
        textAlign: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'center',
    },
    subContainer: {
        paddingTop: CONST.responsiveHeight(15),
        paddingBottom: CONST.responsiveHeight(15),
        flexDirection: "row",
        alignItems: "center",
        marginRight: CONST.responsiveWidth(20),
    },
    subContainerTop: {
        width: "65%",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: 'wrap',
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: "6%",
        justifyContent: 'space-between',
    },
    username: {
        fontFamily: 'Inter-Medium',
        fontSize: CONST.responsiveHeight(16),
        lineHeight: CONST.responsiveHeight(19),
        letterSpacing: 0,
        color: CONST.NAVIGATION_ACTIVE_COLOR,
        marginRight: CONST.responsiveWidth(50),
    },
    usernameTop: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 0,
        color: CONST.NAVIGATION_ACTIVE_COLOR,
    },
    score: {
        fontFamily: 'Inter-Medium',
        fontSize: CONST.responsiveHeight(16),
        lineHeight: CONST.responsiveHeight(19),
        letterSpacing: 0,
        color: CONST.FEATURE_TEXT_COLOR,
    },
    avatar: {
        width: CONST.responsiveWidth(30),
        height: CONST.responsiveWidth(30),
        borderRadius: CONST.responsiveWidth(15),
        marginHorizontal: CONST.responsiveWidth(20),
    },
    avatarTop1: {
        width: CONST.responsiveWidth(60),
        height: CONST.responsiveWidth(60),
        borderRadius: CONST.responsiveWidth(30),
    },
    avatarTop2: {
        width: CONST.responsiveWidth(40),
        height: CONST.responsiveWidth(40),
        borderRadius: CONST.responsiveWidth(20),
    },
    rank: {
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        letterSpacing: 0,
        textAlign: 'center',
        color: CONST.DARK_PINK_COLOR,
    },
    starIcon: {
        width: CONST.responsiveWidth(20),
        height: CONST.responsiveWidth(20),
        alignItems: 'center',
    },
    starIconTop1: {
        width: CONST.responsiveWidth(40),
        height: CONST.responsiveWidth(40),
        alignItems: 'center',
    },
    starIconTop2: {
        width: CONST.responsiveWidth(30),
        height: CONST.responsiveWidth(30),
        alignItems: 'center',
    },
    topContainer: {
        alignItems: 'center',
        marginVertical: CONST.PRIMARY_VERTICAL_MARGIN,
        marginHorizontal: "-1%",
    },

    campaignTime: {
        color: CONST.DARK_PINK_COLOR,
        fontFamily: 'Inter-Medium',
        fontSize: CONST.responsiveHeight(20),
        letterSpacing: 0,
        textAlign: 'center',
        marginVertical: CONST.PRIMARY_VERTICAL_MARGIN,
    },
    campaignContainer: {
        width: "95%",
        height: "auto",
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: CONST.PRIMARY_VERTICAL_MARGIN,
        elevation: 5,
        shadowColor: '#fd85c7',
        shadowOffset: { width: -4, height: -2 },
        shadowOpacity: 0.7,
        shadowRadius: 30,
    },

    top3Container: {
        flexDirection: 'row',
    },

    overlay: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: -1,
        width: CONST.responsiveWidth(40),
        height: CONST.responsiveWidth(40),
        borderRadius: 140,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});