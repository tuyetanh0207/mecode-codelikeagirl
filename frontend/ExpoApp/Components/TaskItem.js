import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';
import { AppButton } from '../Components/JoinBtn.js';
import TaskDetailsScreen from '../Screens/TaskDetails';
import { useNavigation, useRoute } from '@react-navigation/native';


export const Item = ({ name, icon, shortAddr, addr, dist }) => {
    const navigation = useNavigation()
    const handlePressJoinBtn=()=>{
        navigation.navigate('TaskDetails', {name: name, icon:"", shortAddr: shortAddr, addr:addr, dist: dist })
    }
    
    return (
        <TouchableOpacity style={taskDetailstyles.container}>
        <View style={taskDetailstyles.left}>
            <View style={taskDetailstyles.icon}>
                {name.includes("trash", 0)
                    ?
                    <Iconify icon='fluent:bin-recycle-20-regular' size={CONST.responsiveHeight(60)} color={CONST.FEATURE_TEXT_COLOR} />
                    :
                    name.includes("bottle", 0)
                        ?
                        <Iconify icon='solar:bottle-linear' size={CONST.responsiveHeight(60)} color={CONST.FEATURE_TEXT_COLOR} />
                        :
                        name.includes("bag", 0)
                            ?
                            <Iconify icon='solar:bag-4-linear' size={CONST.responsiveHeight(60)} color={CONST.FEATURE_TEXT_COLOR} />
                            :
                            // bắt đầu thay thế từ đây (!!! NEED TO TRANSLATE THIS COMMENT TO ENGLISH !!!)
                            <Iconify icon='solar:bag-4-linear' size={CONST.responsiveHeight(60)} color={CONST.FEATURE_TEXT_COLOR} />
                }

            </View>
            <View style={taskDetailstyles.dis}>
                <Text style={taskDetailstyles.disText}>{dist}m</Text>
            </View>
        </View>
        <View style={taskDetailstyles.mid}>
            <Text style={taskDetailstyles.name} numberOfLines={1}>
                {name} 
            </Text>
            <Text style={taskDetailstyles.shortAddr}>
                {shortAddr}
            </Text>
            <Text style={taskDetailstyles.addr} numberOfLines={2}>
                {addr}
            </Text>
        </View>
        <View style={taskDetailstyles.right}>
            <TouchableOpacity 
            onPress={handlePressJoinBtn} >
                <AppButton 
                title="Join" 
                backgroundColor={CONST.LIGHT_PINK_COLOR} 
                color={CONST.DARK_PINK_COLOR} 
                size="sm" 
                />
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
    )
}
  
    
    



const taskDetailstyles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        marginHorizontal: 18,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 16,
        paddingHorizontal: 8

    },
    left: {
        flex: 0.1,
        //flexDirection:'row'
        //alignItems: 'center'
    },
    icon: {
        flex: 1
    },
    disText: {
        flex: 0,
        color: CONST.FEATURE_TEXT_COLOR,
        fontSize: 16,
        justifyContent: 'flex-end'
    },
    mid: {
        flex: 0.55,
        paddingRight: 14
    },
    name: {
        color: CONST.NAVIGATION_ACTIVE_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    shortAddr: {
        color: CONST.FEATURE_TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 13
    },
    right: {
        flex: 0.2,
        justifyContent: 'center'
    },
    addr: {
        fontSize: 13,
        fontWeight: '400',
        //lineHeight: 10
    },
    btn: {
        backgroundColor: CONST.LIGHT_PINK_COLOR,
        color: CONST.DARK_PINK_COLOR,
    }
})