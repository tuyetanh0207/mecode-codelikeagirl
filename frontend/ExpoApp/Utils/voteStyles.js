import { StyleSheet } from 'react-native'
import * as CONST from './constants'
import { StatusBar } from 'react-native'
export const voteStyles = StyleSheet.create({
    container: {
       // flex: 1,
        marginVertical: "2%",
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '4%',
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
        flexDirection:'row'
      },
    backicon: {
        position: 'absolute',
        left: '4%',
        top: '6%'
    },
   
    intruct: {
        
    },
    intruct2Text: {
        color: CONST.NAVIGATION_ACTIVE_COLOR
    },
    photos: {
       marginTop: '8%',
    },
    photo: {
        marginTop: '4%',
        width: CONST.responsiveWidth(360),
        height: CONST.responsiveHeight(290),
        borderRadius: 20

    }

  
})

