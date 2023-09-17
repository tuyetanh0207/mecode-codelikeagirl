import { StyleSheet } from "react-native";
import * as CONST from './constants'

export const notLoggedInStyles = StyleSheet.create({
    container: {
        width: CONST.TRUTH_SCREEN[0],
        height: '75%',
        marginTop: CONST.TRUTH_SCREEN[1] * 0.05,
        //marginBottom: CONST.TRUTH_SCREEN[1] * 1,
    },
    bottom: {
        height: '25%',
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: '8%',
        paddingTop: '5%',
        width: '100%',
    },
    taskListButton: {
        maxWidth: '70%',
        height: CONST.responsiveHeight(45),
      
        paddingHorizontal: '25%',
        borderRadius: CONST.responsiveHeight(40),
        borderWidth: CONST.responsiveHeight(1),
        backgroundColor: CONST.BACKGROUND_COLOR,
        borderColor: CONST.SHADOW_BLACK_COLOR,
        marginBottom: '4%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5,
        alignItems: "center",
    },
    signInButton: {
        maxWidth: '70%',
        height: CONST.responsiveHeight(45),
      
        paddingHorizontal: '15%',
        //paddingVertical: 10,
        borderRadius: CONST.responsiveHeight(40),
        borderWidth: CONST.responsiveHeight(1),
        backgroundColor: CONST.BACKGROUND_COLOR,
        borderColor: CONST.SHADOW_BLACK_COLOR,
        marginBottom: '4%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5,
        backgroundColor: 'black',
    },
    mapButton: {
        maxWidth: '70%',
        height: CONST.responsiveHeight(45),
      
        paddingHorizontal: '30%',
        borderRadius: CONST.responsiveHeight(40),
        borderWidth: CONST.responsiveHeight(1),
        backgroundColor: CONST.BACKGROUND_COLOR,
        borderColor: CONST.SHADOW_BLACK_COLOR,
        marginBottom: '4%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5,
        alignItems: "center",
    },
    taskListtext: {
        width: '100%',
    },
    signIntext: {
        width: '100%',
        color: CONST.BACKGROUND_COLOR,
    
    }
})