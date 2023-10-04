import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import React, {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CameraComponent from "../Components/Camera";
import { AppButton } from "../Components/JoinBtn";
import * as CONST from "../Utils/constants";
import { joinstyles } from "../Utils/joinStyles";
import styles from "../Utils/styles";
import client from "../api/client";
import Video from "react-native-video";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";
import VideoPlayer from "../Components/VideoPlayer";
import { ChooseTaskBtn } from "../Components/ChooseTaskBtn";
import ChooseTaskList from "../Components/ChooseTaskList";

export default function Join({ navigation: { goBack }, route }) {
  const navigation = useNavigation();
  // let { name, shortAddr, addr, dist, icon, hint, taskId } ={}
  let name,
    shortAddr,
    addr,
    dist,
    icon,
    hint,
    taskId,
    idCampaign,
    nameCampaign,
    isContraint,
    luckywheelID;
  let IsNeedChoosingTask=false
  let isChoosed=false
  //console.log('rout', route.params)
 // const [IsNeedChoosingTask, setIsNeedChoosingTask] = useState(false)
  if (route.params) {
    ({
      name,
      shortAddr,
      addr,
      dist,
      icon,
      hint,
      taskId,
      idCampaign,
      nameCampaign,
      isContraint,
      luckywheelID,
    } = route.params);
  } else {
    //setIsNeedChoosingTask(true)
    IsNeedChoosingTask=true
    name = "";
    shortAddr = "";
    addr = "";
    dist = "";
    icon = "";
    hint = "";
    taskId = "";

    idCampaign = "";
    nameCampaign = "";
    isContraint = "";
    luckywheelID = "";
  }

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isTakingPhoto, setIsTakingPhoto] = useState(true);
  const getUser = async () => {
    const tk = await AsyncStorage.getItem("token");
    ////console.log('token get',token)
    setToken(tk);
    const str = await AsyncStorage.getItem("userInfo");
    ////console.log('token', token)
    const userInfo_ = str ? JSON.parse(str) : {};
    //console.log(userInfo_)
    setUserInfo(userInfo_);
  };
  useEffect(() => {
    getUser();
  }, []);

  //const userFullName = userInfo.fullname
  const [feeling, setFeeling] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isRecordingParent, setIsRecordingParent] = useState(false);
  const [hasRecordedParent, setHasRecordedParent] = useState(false);
  const [currentVideoParent, setCurrentVideoParent] = useState(null);
  const [isChoosing, setIsChoosing] = useState(0);
  const [taskChoosed, setTaskChoosed] = useState(null)

  var mp4ReExpression = /\.mp4$/;
  const handleAddPhoto = () => {
    setIsTakingPhoto(true);
  };
  let formData;
  useEffect(() => {
    console.log("video uri: ", currentVideoParent);
  }, [currentVideoParent]);
  const [noti, setNoti] = useState('')
  const handlePostBtn = async () => {
    formData = new FormData();
    if(IsNeedChoosingTask && isChoosing!==2)
    {
      setNoti('Please choose the task you want to join to post!')
    }
    //process string info
    //console.log("userId:", userInfo.userId);
    formData.append("userId", userInfo.userId);
    formData.append("caption", feeling);
    if (IsNeedChoosingTask && isChoosing===2){
      formData.append("taskName", taskChoosed.name);
      formData.append("taskId", taskChoosed.taskId);
     //\\ formData.append("shortAddr", taskChoosed.shortAddr);
      formData.append("address", taskChoosed.addr);
      formData.append("idCampaign", taskChoosed.idCampaign);
      formData.append("nameCampaign", taskChoosed.nameCampaign);
      formData.append("isContraint", taskChoosed.isContraint);
      formData.append("luckywheelID", taskChoosed.luckywheelID);
    }
     if(IsNeedChoosingTask===false) {
      formData.append("taskName", name);
      formData.append("taskId", taskId);
      formData.append("shortAddr", shortAddr);
      formData.append("address", addr);
      formData.append("idCampaign", idCampaign);
      formData.append("nameCampaign", nameCampaign);
      formData.append("isContraint", isContraint);
      formData.append("luckywheelID", luckywheelID);
    }


    // process photos
    // if a video
    if (mp4ReExpression.test(currentVideoParent)) {
      formData.append("photos", {
        name: new Date() + "_profile",
        uri: currentVideoParent,
        type: "video/mp4",
      });
      formData.append("isMp4", true);
    }

    photos.forEach((pt, idx) => {
      console.log("uri:", idx, "   ", pt);
      formData.append("photos", {
        name: new Date() + "_profile",
        uri: pt,
        type: "image/jpg",
      });
    });

    try {
      // //console.log('token send:', token)
      // //console.log('form data', formData)
      const res = await client.post("/post/create-post", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${token}`,
        },
      });
      console.log("result posting: ", res.data);
      if (res.data.success === true) {
        const donePost = res.data.post;

        navigation.navigate("Post", {
          isJustPosted: true,
          userId: donePost.userId,
          taskName: donePost.taskName,
          taskId: donePost.taskId,
          campaignId: donePost.campaignId,
          caption: donePost.caption,
          photos: donePost.photos,
          postId: donePost._id,
          addr: donePost.address,
          createdDate: donePost.createdDate,
          shortAddr: shortAddr,
          fullname: donePost.fullname,
          avatar: donePost.avatar,
        });
      }
    } catch (error) {
      //console.log(error.message);
    }
  };

  const handleXicon = (currIdx) => {
    setPhotos(photos.filter((photo, index) => index !== currIdx));
    return;
  };
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      {/* container */}
      {isTakingPhoto ? 
        (
          <CameraComponent
            setIsTakingPhoto={setIsTakingPhoto}
            setPhotos={setPhotos}
            photos={photos}
            isRecordingParent={isRecordingParent}
            setIsRecordingParent={setIsRecordingParent}
            hasRecordedParent={hasRecordedParent}
            setHasRecordedParent={setHasRecordedParent}
            currentVideoParent={currentVideoParent}
            setCurrentVideoParent={setCurrentVideoParent}
          />
        ) : ( isChoosing===0 || isChoosing===2?
          <View style={joinstyles.container}>
            {/* header */}
            <View style={joinstyles.header}>
              {/* backicon */}
              <View style={joinstyles.left}>
                {/* <TouchableOpacity onPress={() => goBack()}> */}
                <TouchableOpacity onPress={() => setIsTakingPhoto(true)}>
                  <Image
                    source={require("../assets/images/Back.png")}
                    style={joinstyles.backicon}
                  />
                </TouchableOpacity>
              </View>
              <View style={joinstyles.mid}>
                <Text style={joinstyles.headertext}>Create post</Text>
              </View>
              {/* post btn */}
              <TouchableOpacity
                style={joinstyles.right}
                onPress={handlePostBtn}
              >
                <AppButton
                  title="Post"
                  color={CONST.FEATURE_TEXT_COLOR}
                  backgroundColor={CONST.BACKGROUND_COLOR}
                  size="sm"
                ></AppButton>
              </TouchableOpacity>
            </View>
            {/* post */}
            <View style={joinstyles.post}>
              {/* profile */}
              <View style={joinstyles.profile}>
                <TouchableOpacity
                  onPress={() => goBack()}
                  style={joinstyles.profilePhoto}
                >
                  {userInfo.avatar ? (
                    <Image
                      src={userInfo.avatar}
                      style={joinstyles.profileImage}
                    />
                  ) : (
                    <Image
                      source={require("../assets/images/samplephotopost.png")}
                      style={joinstyles.profileImage}
                    />
                  )}
                </TouchableOpacity>
                <View style={joinstyles.name}>
                  <Text style={joinstyles.nametext}>{userInfo.fullname}</Text>
                  {IsNeedChoosingTask === true ? (
                    <TouchableOpacity  onPress = {()=>{setIsChoosing(1); setNoti('')}}>
                    <ChooseTaskBtn isChoosed={isChoosing} taskChoosed={taskChoosed} />
                    </TouchableOpacity>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
              {/* text input */}
              <TextInput
                style={joinstyles.feelinginput}
                placeholder="How do you feel?"
                placeholderTextColor="#868484"
                multiline={true}
                value={feeling}
                onChangeText={(text) => setFeeling(text)}
              />
              {/* Photos */}
              <View style={joinstyles.photos}>
                {/* if there is no photo and no video to display */}
                {photos.length === 0 && currentVideoParent == null ? (
                  <TouchableOpacity
                    style={joinstyles.photo}
                    onPress={handleAddPhoto}
                  >
                    <Image
                      source={require("../assets/images/addPhoto.png")}
                      style={joinstyles.addicon}
                    />
                    <Text style={joinstyles.addtext}>Add</Text>
                  </TouchableOpacity>
                ) : photos.length >= 0 ? (
                  // if there is a photo array to display
                  <FlatList
                    data={photos}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                      return index === photos.length - 1 ? (
                        // add button
                        <>
                          <View style={joinstyles.photo}>
                            <TouchableOpacity
                              onPress={() => handleXicon(index)}
                              style={joinstyles.xicon}
                            >
                              <Image
                                source={require("../assets/images/x.png")}
                              />
                            </TouchableOpacity>

                            <Image
                              source={{ uri: item }}
                              style={{
                                width: CONST.responsiveHeight(100),
                                height: CONST.responsiveHeight(100),
                              }}
                            />
                          </View>
                          <TouchableOpacity
                            style={joinstyles.photo}
                            onPress={handleAddPhoto}
                          >
                            <Image
                              source={require("../assets/images/addPhoto.png")}
                              style={joinstyles.addicon}
                            />
                            <Text style={joinstyles.addtext}>Add</Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        // photo element
                        <View style={joinstyles.photo}>
                          <TouchableOpacity
                            onPress={() => handleXicon(index)}
                            style={joinstyles.xicon}
                          >
                            <Image source={require("../assets/images/x.png")} />
                          </TouchableOpacity>
                          <Image
                            source={{ uri: item }}
                            style={{
                              width: CONST.responsiveHeight(100),
                              height: CONST.responsiveHeight(100),
                            }}
                          />
                        </View>
                      );
                    }}
                    keyExtractor={(item, index) => index}
                  ></FlatList>
                ) : (
                  <></>
                )}
                {currentVideoParent &&
                mp4ReExpression.test(currentVideoParent) ? (
                  <VideoPlayer
                    videoUri={currentVideoParent}
                    width={340}
                    height={300}
                  />
                ) : (
                  <></>
                )}
              </View>
              {/* Info */}
              <View style={joinstyles.info}>
                {route.params ? (
                  <>
                    <Text style={joinstyles.taskNametext}>{name}</Text>
                    <Text style={joinstyles.taskShortAddrtext}>
                      {shortAddr}
                    </Text>
                    <Text style={joinstyles.taskAddrtext}>{addr}</Text>
                  </>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </View>
          :
          <ChooseTaskList onCallBack = {setIsChoosing} setTaskChoosed={setTaskChoosed}/>
        )
        }
        <Text style={joinstyles.notiText}>{noti}</Text>
    </ImageBackground>
  );
}
