import { StyleSheet } from 'react-native'
import * as CONST from './constants'
import { StatusBar } from 'react-native'
export const voteStyles = StyleSheet.create({
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
    

  
})

