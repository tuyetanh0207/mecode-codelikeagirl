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
import { profileStyles } from "../Utils/profileStyles";
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
    let   fullname ='Nguyen Tuyet Anh'
    let userId
   //console.log('rout', route.params)
   const [token, setToken] = useState('');
   const [userInfo, setUserInfo] = useState({})
   const [isCurrentUser, setIsCurrentUser] = useState(false)
   const rank = 20
   const point = 20
   let firstName =''
   const [profileUserInfo, setProfileUserInfo]=useState({})
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
    console.log('token get',token)
    setToken(tk)
    const str = await AsyncStorage.getItem("userInfo");
    //console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    console.log('in local ',userInfo_)
    setUserInfo(userInfo_)

  };
  const getProfileUser = async (userId) => {
    const user = await getUserInfo(userId)
    console.log('user profile', user)
    setProfileUserInfo(user.userInfo)

  };
  const fetchPostList = async () => {
    try {
      const res = await getAllPostOfUser(userId);
      console.log('res', res)
      setPostList(res.posts)
    } catch (error) {
      console.log('error while fetching postlist', error)
    }
    
    
  }
  useEffect(()=>{
    getLocalUser()
  },[])

    useEffect(() => {
         // if the screen is transfered from somewhere
        if (route.params) {
          ({ fullname, userId } = route.params);
          // if is current logged in is profile's user
          if (userId === userInfo.userId) {
            setIsCurrentUser(true)
            setProfileUserInfo(userInfo)
          }
           // if is current logged in isn't profile's user
          else {
           
            getProfileUser(userId)
            setIsCurrentUser(false)
          }
        } 
        // if the screen isn't transfered from somewhere, user just click profile button on navigation bar
        // => sure that logged in user is profile user
        else {
          ({fullname, userId} = userInfo)
          // userId='64fec297428317cfb0a2fc21'
          // fullname= 'Nguyen Tuyet Anh'
          console.log('not route param')
            setIsCurrentUser(true)
            setProfileUserInfo(userInfo)
            console.log('profile user when not ruote param kkk', userInfo)
            console.log('profile user when not ruote param', profileUserInfo)
        }

        fetchPostList()
        console.log('')
        if(isCurrentUser){
          // const parts = profileUserInfo.fullname.split(" ");
          // firstName = parts[parts.length - 1];
        }
    }, [userInfo, isCurrentUser])
    console.log('user info after getting in useEffect toekn', token)

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
        <View style={profileStyles.container}>
          <TouchableOpacity onPress={() => goBack()} style={profileStyles.backicon}>
            <Image
              source={require("../assets/images/Back.png")}
              style={profileStyles.backicon}
            />
          </TouchableOpacity>
          <View style={profileStyles.header}>
            
            <Text style={styles.heading2}>Profile</Text>
          </View>
          <View style={profileStyles.inforContainer}>
            <View style={profileStyles.avatar}>
              <Image style={profileStyles.avatarPhoto} 
              src={profileUserInfo.avatar} width={20} height={'100%'}/>
            </View>
            <View style={profileStyles.mid}>
              <Text style={profileStyles.nameText}>{profileUserInfo.fullname}</Text>
              <Text style={profileStyles.pointText}>
                Top {profileUserInfo.rank} 
                <Text style={profileStyles.linePoint}>     |     </Text>
                <Text> {profileUserInfo.point} Points </Text>
              </Text>
            </View>
            <View style={profileStyles.right}>
              {/* solar/settings-outline/ */}
              {isCurrentUser?
              <Iconify icon= 'solar:settings-outline'
                style={profileStyles.icon} 
                size={CONST.responsiveHeight(30)} color={CONST.FEATURE_COLOR}
              />:
              <></>
              }
      
            </View>
          </View>
          {/* green step container */}
          <View style={profileStyles.greenStepContainer}>
            <View style={profileStyles.headerSection}>
              <Iconify icon='majesticons:edit-pen-4'
                style={profileStyles.icon} 
                size={CONST.responsiveHeight(26)} color={CONST.NAVIGATION_ACTIVE_COLOR}/>
                {isCurrentUser?
                <Text style={profileStyles.greenStepTitleText}>
                Your Green Steps
                </Text>
                :
                <Text style={profileStyles.greenStepTitleText}>
                {firstName}'s Green Steps
                </Text>
                }
                
              </View>
            <View style={profileStyles.calendarContainer}></View>
          </View>
          {/* activity container */}
          <View style={profileStyles.greenStepContainer}>
            <View style={profileStyles.headerSection}>
            <Iconify icon='fluent:earth-leaf-16-filled'
                style={profileStyles.icon} 
                size={CONST.responsiveHeight(26)} color={CONST.NAVIGATION_ACTIVE_COLOR}
            />
              <Text style={profileStyles.greenStepTitleText}>
              Activities
              </Text>
            </View>
            
            <SafeAreaView style={profileStyles.postListContainer}>
              <FlatList
                keyExtractor={(task, index) => index.toString()}
                data={PostList}
                renderItem={renderTaskItem}
              />
            </SafeAreaView>
          </View>
          
        </View>
      </ImageBackground>
    );

}