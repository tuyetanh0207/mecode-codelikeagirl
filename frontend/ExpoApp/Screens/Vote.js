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
import { voteStyles } from "../Utils/voteStyles";
import { taskstyles } from "../Utils/taskStyles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppButton } from "../Components/JoinBtn";
import { StatusBar } from "react-native";
import { Iconify } from "react-native-iconify";
import { SmallPostItem } from "../Components/SmallPostItem";
import client from "../api/client";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  GetPostToVote,
  VotePost,
  getAllPostOfUser,
  getUserInfo,
} from "../api/user";
import { profileStyles } from "../Utils/profileStyles";
export default function ProfileScreen({ navigation: { goBack }, route }) {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [isVoted, setIsVoted] = useState(false);
  const [next, setNext] = useState(1);
  const [noti, setNoti] = useState("");
  const fetchPosts = async () => {
    const res1 = await GetPostToVote(userInfo.userId);
    console.log("res11", res1.data);
    setFirstList(res1.data);
    setIsVoted(false);
  };
  const getLocalUser = async () => {
    const tk = await AsyncStorage.getItem("token");
    //console.log('token get',token)
    setToken(tk);
    const str = await AsyncStorage.getItem("userInfo");
    //console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    console.log(userInfo_);
    setUserInfo(userInfo_);
  };
  useEffect(() => {
    fetchPosts();
  }, [next]);
  useEffect(() => {
    getLocalUser();
  }, []);

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
  const handleClick = (idx) => {
    navigation.navigate("Post", {
      shortAddr: firstList[idx].shortAddr,
      addr: firstList[idx].address,
      taskId: firstList[idx].taskId,
      isJustPosted: false,
      userId: firstList[idx].userId,
      postId: firstList[idx]._id,
      fullname: firstList[idx].fullname,
      caption: firstList[idx].caption,
      photos: firstList[idx].photos,
      //fullname: firstList[idx].fullname,
      //createdDate: firstList[idx].createdDate,
      // avatar: firstList[idx].avatar
      fullname: "",
      createdDate: "",
      avatar: "",
      taskName: firstList[idx].taskName,
    });
  };
  const handleSwipeRight = async (idx) => {
    console.log("swipe right", idx);
    try {
      // if(!isVoted) {
      //   const res = await VotePost(userInfo.userId,firstList[idx]._id,firstList[idx].userId)
      //   console.log('res', res.data)
      //   if (res.data.success ===1){
      //    // setIsVoted(true)
      //    setNext(next-1)
      //    setIsVoted(true)
      //     setNoti('You just voted for this post!')
      //     setTimeout(() => {
      //       setNoti('')
      //     }, 2000);
      //   }
      //  }
    } catch (error) {
      setNext(next - 1);
      console.log("error in voting", error);
    }
  };
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <TouchableOpacity onPress={() => goBack()} style={voteStyles.backicon}>
        <Image
          source={require("../assets/images/Back.png")}
          // style={profileStyles.backicon}
        />
      </TouchableOpacity>
      <View style={voteStyles.container}>
        <View style={profileStyles.header}>
          <Text style={styles.heading2}>Vote</Text>
        </View>
        <Text style={voteStyles.intruct1Text}>
          You can get point by voting these!
        </Text>
        <Text style={voteStyles.intruct2Text}>
          Click to view detail, swipe right to vote!
        </Text>
        {noti ? (
          <Text style={voteStyles.intruct2Text}>{noti}</Text>
        ) : (
          <Text style={voteStyles.intruct2Text}></Text>
        )}
        <View style={voteStyles.photos}>
          {firstList ? (
            <GestureHandlerRootView>
              <Swipeable
                renderRightActions={(progress, dragX) => {
                  // handleSwipeRight(0)
                }}
              >
                <TouchableOpacity onPress={() => handleClick(0)}>
                  <Image
                    src={firstList[0]?.photos[0]}
                    style={voteStyles.photo}F
                  />
                </TouchableOpacity>
              </Swipeable>

              <Swipeable
                renderRightActions={(progress, dragX) => {
                  // handleSwipeRight(1)
                }}
              >
                <TouchableOpacity onPress={() => handleClick(1)}>
                  <Image
                    src={firstList[1]?.photos[0]}
                    style={voteStyles.photo}
                  />
                </TouchableOpacity>
              </Swipeable>
            </GestureHandlerRootView>
          ) : (
            <></>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
