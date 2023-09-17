import { StyleSheet } from "react-native";
import * as CONST from './constants';
export const logInStyles = StyleSheet.create({
    container: {
        paddingHorizontal: '4%',
       //paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        // paddingVertical:'8%',
        // paddingTop: '10%'

    },
    backicon: {
        position: "absolute",
        top: 20,
        left: 10,
    },
    header: {
        // marginTop: '14%'
    },
    continuetext: {
        marginTop: '10%',
        fontWeight: '500',

    },
    greensteptext:{
        color: CONST.NAVIGATION_ACTIVE_COLOR,
        fontWeight: '500',
    },
    email: {
        width: '100%',
        borderStyle: "solid",
        borderColor: 'black',
        borderStartWidth :1,
        borderEndWidth :1,
        borderTopWidth :1,
        boderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth :1,
        borderRadius: 4,
        marginTop: '5%',
        height: '7%',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    showpwd: {
        marginTop: '4%',
        right: '15%',
        
        marginLeft: 0,
        paddingLeft: 0,
        position: "relative",
        flexDirection: "row",
        justifyContent: 'space-between',
     
    },
    showpwdsquare:{
        width: 20,
        height: 20,
        borderStyle: "solid",
        borderColor: 'black',
        borderStartWidth :1,
        borderEndWidth :1,
        borderTopWidth :1,
        boderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth :1,
        borderRadius: 4,
        marginRight: '4%',
        marginBottom: '10%'
    },


})