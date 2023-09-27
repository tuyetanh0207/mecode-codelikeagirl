import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import * as CONST from '../Utils/constants';
import { voteStyles } from "../Utils/voteStyles";
import {taskstyles} from '../Utils/taskStyles'
import { taskDetailstyles } from '../Utils/taskDetailsStyles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppButton } from "../Components/JoinBtn"; 
import { StatusBar } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { SmallPostItem } from '../Components/SmallPostItem'
import client from '../api/client';
import { getAllPostOfUser, getUserInfo } from '../api/user';
export default function ProfileScreen({navigation: {goBack}, route}) {
    const navigation = useNavigation();
   const [token, setToken] = useState('');
   const [userInfo, setUserInfo] = useState({})
   const [PostList, setPostList] =useState([{
    taskName: 'Collect trash',
    addr: '1, Nguyen Chi Thanh',
    shortAddr:'Hoa binh',
    createdDate: '12:20 12/04/23',
    postId: '6506ece166adf132aa477e61',
    point: 20,
    fullname: 'dd',
    userId: 'aaa',
    icon: 'ddd',
    shortAddr: 'ddd',
    addr: 'ddd',
    taskId: 'ddd',
    createdDate: 'Sun Sep 17 2023 19:11:13 GMT+0700 (Indochina Time)',
    caption: 'ddd',
    votedPoint: 'ddd',
    photos: ['http://res.cloudinary.com/dzcxfc257/image/upload/v1694952669/64fec297428317cfb0a2fc21_post_Sun%20Sep%2017%202023%2019:11:10%20GMT%2B0700%20%28Indochina%20Time%29_0.jpg'],
   }])
  const getLocalUser = async () => {
    const tk = await AsyncStorage.getItem("token");
    //console.log('token get',token)
    setToken(tk)
    const str = await AsyncStorage.getItem("userInfo");
    //console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    console.log(userInfo_)
        setUserInfo(userInfo_)

  };

    
    
  
    useEffect(() => {
        getLocalUser()
       
    }, [])
    

    const renderTaskItem = ({ item }) => (
      <SmallPostItem
        postId={item.postId}
        point={item.point}
        fullname={item.fullname}
        userId={item.userId}
        icon={item.icon}
        shortAddr={item.shortAddr}
        addr={item.addr}
        taskName={item.taskName}
        taskId={item.taskId}
        createdDate={item.createdDate}
        caption={item.caption}
        votedPoint={item.votedPoint}
        photos={item.photos}
      />
    );
    return (
        <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imageBackground}
      >
        <View style={voteStyles.container}>
          <TouchableOpacity onPress={() => goBack()} style={profileStyles.backicon}>
            <Image
              source={require("../assets/images/Back.png")}
              style={profileStyles.backicon}
            />
          </TouchableOpacity>
          <View style={profileStyles.header}>
            
            <Text style={styles.heading2}>Vote</Text>
          </View>
          <View style={profileStyles.inforContainer}>
            
          </View>
          
        </View>
      </ImageBackground>
    );
    
}