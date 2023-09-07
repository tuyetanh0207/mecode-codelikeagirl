import { StyleSheet } from "react-native";
import * as CONST from '../Utils/constants'
export const joinstyles = StyleSheet.create({
    container: {
        marginHorizontal: '4%',
        marginTop: '10%',
        fontSize:   19,
        fontWeight: '500',
        color: CONST.NAVIGATION_ACTIVE_COLOR,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    left: {
        flex: 1,
        justifyContent: 'center'
    },
    mid: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    headertext: {
        fontSize:   19,
        fontWeight: '500',
        color: CONST.NAVIGATION_ACTIVE_COLOR,
    },
    right: {
        flex: 1.5
    },
    post: {
        padding: '4%',
        backgroundColor: CONST.BACKGROUND_COLOR,
        borderRadius: 10,
        marginTop: '3%'
    },
    profile: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: '4%'
    },
    nametext: {
        fontSize:   15,
        fontWeight: '500',
        color: CONST.NAVIGATION_ACTIVE_COLOR,
    },
    feelinginput: {
        height: '20%',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: '4%',

    },
    photos: {
        flexDirection: "column",
        fle
    }
    
})