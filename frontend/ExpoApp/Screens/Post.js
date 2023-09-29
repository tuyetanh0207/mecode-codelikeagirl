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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as CONST from '../Utils/constants';
import { joinstyles } from "../Utils/joinStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppButton } from "../Components/JoinBtn";
import VideoPlayer from '../Components/VideoPlayer';
// use style of Join screen

export default function Post({navigation: {goBack}, route}) {
  const navigation = useNavigation()
  var mp4ReExpression = /\.mp4$/; 
    const {isJustPosted, userId, taskName, taskId,campaignId, 
    caption, photos, postId, addr, shortAddr, fullname, avatar,
    createdDate} = route.params
    const [token, setToken] = useState('') ;
  const [userInfo, setUserInfo] = useState({})
  const getUser = async () => {
    const tk = await AsyncStorage.getItem("token");
    //console.log('token get',token)
    setToken(tk)
    const str = await AsyncStorage.getItem("userInfo");
    //console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    console.log(userInfo_)
    setUserInfo(userInfo_)

  };
  useEffect(()=>{
    getUser()
  },[])
  const handleXicon = (currIdx) => {
    setPhotos(photos.filter((photo, index) => index !== currIdx));
    return;
  };
    return (
        <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      
        <View style={joinstyles.container}>
          {/* header */}
          <View style={joinstyles.header}>
            {/* backicon */}
            <View style={joinstyles.left}>
              {/* <TouchableOpacity onPress={() => goBack()}> */}
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={joinstyles.backIcon}>
                <Image
                  source={require("../assets/images/x.png")}
                  style={joinstyles.backicon}
                />
              </TouchableOpacity>
            </View>
            <View style={joinstyles.mid}>
                {isJustPosted === true? 
                <Text style={joinstyles.headertext}>Posted</Text>
                :
                <Text style={joinstyles.headertext}>Create post</Text>
                }
              
            </View>
            {/* post btn */}
            <TouchableOpacity style={joinstyles.right} >
             
            </TouchableOpacity>
           
          </View>
          {/* post */}
          <View style={joinstyles.post}>
            {/* profile */}
            <View style={joinstyles.profile}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile', {userId: userId, fullname: fullname})}
                style={joinstyles.profilePhoto}
              >
                {avatar?
                <Image
                src={avatar}
                style={joinstyles.profileImage}
                />
                :
                <Image
                    source={require("../assets/images/samplephotopost.png")}
                    style={joinstyles.profileImage}
                />}
                
              </TouchableOpacity>
              <Text style={joinstyles.nametext}>{fullname}</Text>
            </View>
            {/* text input */}
            <Text
              style={joinstyles.feelinginput}>
                {caption}
              </Text>
            {/* Photos */}
            <View style={joinstyles.photos}>
            
             <FlatList
             data={photos}
             numColumns={3}
             renderItem={({ item, index }) => {
               return <>
                {!mp4ReExpression.test(item) ?
                  <View style={joinstyles.photo}>
                    <Image
                      src={ item }
                      style={{ width: "100%", height: 100 }}
                    />
                  </View>
                  :
                  <VideoPlayer videoUri={photos[0]} width={340} height={300}/>
                 }
                  </>
             }
            }
             keyExtractor={(item, index) => index}
            ></FlatList>
        
              
            </View>
            {/* Info */}
            <View style={joinstyles.info}>
              <Text style={joinstyles.taskNametext}>{taskName}</Text>
              <Text style={joinstyles.taskShortAddrtext}>{shortAddr}</Text>
              <Text style={joinstyles.taskAddrtext}>{addr}</Text>
              <Text style={joinstyles.taskAddrtext}>{createdDate.slice(0, createdDate.length - 29)}</Text>
            </View>
          </View>
        </View>
   
    </ImageBackground>
    );
}