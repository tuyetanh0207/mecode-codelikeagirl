import { StyleSheet } from 'react-native'
import * as CONST from './constants'
import { StatusBar } from 'react-native'
export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: "2%",
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: '4%',
    },
    header: {
        //flex: 0.2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
        flexDirection:'row'
      },
    backicon: {
        position: 'absolute',
        //left: '5%',
        top: '2%'
    },
    inforContainer: {
        width: '100%',
        //height: '10%',
        marginTop: '4%',
        backgroundColor: 'black',
        padding: '4%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'center',

        
    },
    avatar: {
        overflow: "hidden",
      //  borderRadius: 200,
      flex: 2,
    },
    avatarPhoto: {
        width: CONST.responsiveHeight(56),
        height: CONST.responsiveHeight(56),
        borderRadius: 30,
    },
    mid: {
        flex: 9
    },
    nameText: {
        color: CONST.BACKGROUND_COLOR,
        fontSize: CONST.responsiveHeight(20)

    },
    pointText: {
        color: CONST.BACKGROUND_COLOR,
        fontSize: CONST.responsiveHeight(16),
        fontWeight: '300',

    },
    linePoint: {
        color: CONST.FEATURE_COLOR
    },
    right: {
        //flex: 0.5
        justifyContent: 'center',
    },
    greenStepContainer: {
        marginTop: '6%',

    },
    calendarContainer: {
        marginTop: '3%',
        width: '100%',
        height: CONST.responsiveHeight(160),
        backgroundColor: CONST.BACKGROUND_COLOR,
        borderRadius: 14,

    },
    headerSection: {
        flexDirection: 'row',
        
    },
    greenStepTitleText: {
        color: CONST.DARK_GREEN_COLOR,
        fontSize: CONST.responsiveHeight(22),
        fontWeight: '500',
        marginLeft: '2%'
    },
    postListContainer: {
        marginTop: '3%',
    },
    dateText: {
        fontSize: 14,
        fontWeight: "300",
    },
  
})

// list: {
//     flex: 1,
//     // flexGrow: 1,
//     // marginBottom: 10
// },