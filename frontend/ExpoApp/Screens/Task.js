import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, ImageBackground,Image, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from '../Utils/styles';
// import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';
import { AppButton } from '../Components/JoinBtn.js';
import { Item } from '../Components/TaskItem';

export default function Task() {
    const navigation = useNavigation();
    const [TaskList, setTaskList] = useState([
        {
            name: "Collect trash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: "fluent:bin-recycle-20-regular"
        },
        {
            name: "Collect trash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
        {
            name: "Collect rash",
            shortAddr: "Thao Cam Vien Zoo",
            addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
            dist: 80,
            icon: 'fluent:bin-recycle-20-regular'
        },
    ])
    // add icon
    TaskList.forEach(task => {
        if (task.name.includes("trash", 0))
            task.icon = 'fluent:bin-recycle-20-regular'
    });


    const renderTaskItem = ({ item }) => (
        <Item name={item.name} icon={item.icon} shortAddr={item.shortAddr} addr={item.addr} dist={item.dist}/>
    )
    const handlePressJoinBtn=()=>{
        navigation.navigate('TaskDetails')
    }
    return (
        <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.imageBackground}
    >
        <View style={taskstyles.container}>
            <View style= {taskstyles.header}>
                <Text style={styles.heading2}>Task list</Text>
            </View>
            <SafeAreaView style={taskstyles.list}>
                <FlatList
                //keyExtractor={(task, index)=> index.toString()}
                data = {TaskList}
                renderItem={renderTaskItem}
                
                style={{
                    //flex: 1,
                    //marginBottom : 150,
                 
                }}
               // ListFooterComponent={<View style={{height: 20}}/>}
                />
            </SafeAreaView>
            
        </View>
    </ImageBackground>
    );
}

const taskstyles= StyleSheet.create({
    imageBackground: {
        flex: 1
    },
    container: {
        flex: 1,
        marginVertical: '2%',
        marginTop: StatusBar.currentHeight || 0,

    },
    header: {
        flex: 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    list: {
        flex: 1,
        // flexGrow: 1,
        // marginBottom: 10
    }
});
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
        alignItems: 'center'
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