import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "../Utils/styles";
import { useNavigation } from "@react-navigation/native";
import * as CONST from "../Utils/constants";
import { profileStyles } from "../Utils/profileStyles";
import { taskstyles } from "../Utils/taskStyles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppButton } from "../Components/JoinBtn";
import { StatusBar } from "react-native";
import { Iconify } from "react-native-iconify";
import { SmallPostItem } from "../Components/SmallPostItem";
import client from "../api/client";
import {
  getAllPostOfUser,
  getUserInfo,
  getUserRankLatestCampaign,
} from "../api/user";
import { useLogin } from "../Contexts/LoginProvider";

export default function ProfileScreen({ navigation: { goBack }, route }) {
  const navigation = useNavigation();
  let userId;
  //console.log('rout', route.params)
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [profileUserInfo, setProfileUserInfo] = useState({});
  const [profileUserPoint, setProfileUserPoint] = useState(null);
  const [profileUserRank, setProfileUserRank] = useState(null);
  const [fetchedPost, setIsFetchPost] = useState(false);
  const [PostList, setPostList] = useState([]);
  const getLocalUser = async () => {
    const tk = await AsyncStorage.getItem("token");
    //console.log('token get',token)
    setToken(tk);
    const str = await AsyncStorage.getItem("userInfo");
    //console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    //console.log('in local ',userInfo_)
    setUserInfo(userInfo_);
    if (isCurrentUser) {
      setProfileUserPoint(
        userInfo_?.campaignPoint.postPoint +
        userInfo_?.campaignPoint.votingPoint +
        userInfo_?.campaignPoint.votedPoint
      );
    }
  };
  const getProfileUser = async () => {
    console.log("user d", userId);
    const user = await getUserInfo(userId);
    //console.log('user profile', user.data)
    setProfileUserInfo(user.data.userInfo);
    setProfileUserPoint(
      user.data.userInfo?.campaignPoint[0].postPoint +
      user.data.userInfo?.campaignPoint[0].votingPoint +
      user.data.userInfo?.campaignPoint[0].votedPoint
    );
  };
  const [headerUser, setHeaderUser] = useState({ avatar: "", fullname: "" });
  const fetchPostList = async () => {
    try {
      if (userId && !fetchedPost) {
        const res = await getAllPostOfUser(userId);
        // console.log("res", res);
        setPostList(res.posts.reverse());
        setIsFetchPost(true);
        setHeaderUser({ avatar: res.avatar, fullname: res.fullname });
      }
    } catch (error) {
      console.log("error while fetching postlist", error);
    }
  };
  const fetchRankUser = async () => {
    try {
      const res = await getUserRankLatestCampaign(userId);
      setProfileUserRank(res.rank);
      //  console.log('rank', res)
    } catch (error) {
      console.log("error while get rank", error);
    }
  };
  useEffect(() => {
    getLocalUser();
  }, [userInfo]);

  useEffect(() => {
    // if the screen is transfered from somewhere
    if (route.params) {
      ({ fullname, userId, avatar } = route.params);
      setProfileUserInfo({ fullname, userId, avatar });
      // console.log('fullname, user id', fullname, userId)
      // if is current logged in is profile's user
      if (userId === userInfo.userId) {
        setIsCurrentUser(true);
        setProfileUserInfo(userInfo);
      }
      // if is current logged in isn't profile's user
      else {
        // console.log('userId', userId)
        // getProfileUser(userId);
        setIsCurrentUser(false);
      }
    }
    // if the screen isn't transfered from somewhere, user just click profile button on navigation bar
    // => sure that logged in user is profile user
    else {
      ({ fullname, userId } = userInfo);
      // userId='64fec297428317cfb0a2fc21'
      // fullname= 'Nguyen Tuyet Anh'
      //console.log("not route param");
      setIsCurrentUser(true);
      setProfileUserInfo(userInfo);
      // console.log('profile user when not ruote param kkk', userInfo)
      // console.log('profile user when not ruote param', profileUserInfo)
    }

    // console.log("");
    if (isCurrentUser) {
      // const parts = profileUserInfo.fullname.split(" ");
      // firstName = parts[parts.length - 1];
    }
  }, [userInfo]);
  useEffect(() => {
    fetchPostList();
    fetchRankUser();
  }, [isCurrentUser, userInfo]);
  useEffect(() => {
    if (!isCurrentUser) {
      getProfileUser();
    }
  }, [isCurrentUser]);
  // console.log('user info after getting in useEffect toekn', token)
  const { setIsLoggedIn } = useLogin();
  const handleSettingBtn = async () => {
    console.log("setting button click");
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userInfo");

    setTimeout(() => setIsLoggedIn(false), 10000);
  };
  const renderTaskItem = ({ item }) => (
    <SmallPostItem
      postId={item.postId}
      point={item.point}
      fullname={headerUser.fullname}
      userId={item.userId}
      icon={item.icon}
      shortAddr={item.shortAddr}
      addr={item.address}
      taskName={item.taskName}
      taskId={item.taskId}
      createdDate={item.createdDate}
      caption={item.caption}
      votedPoint={item.votedPoint}
      photos={item.photos}
      avatar={headerUser.avatar}
    />
  );
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={profileStyles.container}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={profileStyles.backicon}
        >
          <Image
            source={require("../assets/images/Back.png")}
            style={profileStyles.backicon}
          />
        </TouchableOpacity>
        <View style={profileStyles.header}>
          <Text style={styles.heading2}>Profile</Text>
        </View>

        {/* activity container */}
        <View style={profileStyles.greenStepContainer}>
          {PostList.length >= 1 ? (
            <SafeAreaView style={profileStyles.postListContainer}>
              <FlatList
                keyExtractor={(task, index) => index.toString()}
                data={PostList}
                renderItem={renderTaskItem}
                ListHeaderComponent={
                  <>
                    <View style={profileStyles.inforContainer}>
                      <View style={profileStyles.avatar}>
                        <Image
                          style={profileStyles.avatarPhoto}
                          src={profileUserInfo?.avatar}
                          width={20}
                          height={20}
                        />
                      </View>
                      <View style={profileStyles.mid}>
                        <Text style={profileStyles.nameText}>
                          {profileUserInfo?.fullname}
                        </Text>
                        <Text style={profileStyles.pointText}>
                          Top {profileUserRank}
                          <Text style={profileStyles.linePoint}> | </Text>
                          <Text> {profileUserPoint} Points </Text>
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={profileStyles.right}
                        onPress={() => handleSettingBtn()}
                      >
                        {/* solar/settings-outline/ */}
                        {isCurrentUser ? (
                          <View>
                            <Iconify
                            // ic:round-logout
                              icon="ic:round-logout"
                              style={profileStyles.icon}
                              size={CONST.responsiveHeight(30)}
                              color={CONST.FEATURE_COLOR}
                            />
                          </View>
                        ) : (
                          <></>
                        )}
                      </TouchableOpacity>
                    </View>
                    {/* green step container */}
                    <View style={profileStyles.greenStepContainer}>
                      <View style={profileStyles.headerSection}>
                        <Iconify
                          icon="majesticons:edit-pen-4"
                          style={profileStyles.icon}
                          size={CONST.responsiveHeight(26)}
                          color={CONST.NAVIGATION_ACTIVE_COLOR}
                        />
                        {isCurrentUser ? (
                          <Text style={profileStyles.greenStepTitleText}>
                            Your Green Steps
                          </Text>
                        ) : (
                          <Text style={profileStyles.greenStepTitleText}>
                            {firstName}'s Green Steps
                          </Text>
                        )}
                      </View>
                      <View style={profileStyles.calendarContainer}>
                        <Image
                          source={require("../assets/images/calendar.png")}
                          style={{
                            width: CONST.responsiveWidth(340),
                            height: CONST.responsiveHeight(280),
                          }}
                          // style= {{flex: 0.1}}
                        />
                      </View>
                      <View style={profileStyles.headerSection}>
                        <Iconify
                          icon="fluent:earth-leaf-16-filled"
                          style={profileStyles.icon}
                          size={CONST.responsiveHeight(26)}
                          color={CONST.NAVIGATION_ACTIVE_COLOR}
                        />
                        <Text style={profileStyles.greenStepTitleText}>
                          Activities
                        </Text>
                      </View>
                    </View>
                  </>
                }
              />
            </SafeAreaView>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20%",
              }}
            >
              <Text
                style={{
                  fontSize: CONST.responsiveHeight(18),
                  color: CONST.FEATURE_TEXT_COLOR,
                  alignItems: "center",
                }}
              >
                You haven't post any activity yet!
              </Text>
              <Image
                source={require("../assets/images/chuadangbai.gif")}
                style={{
                  width: CONST.responsiveWidth(100),
                  height: CONST.responsiveHeight(120),
                  marginTop: "10%",
                }}
              />
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
