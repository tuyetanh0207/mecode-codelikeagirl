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
import { useNavigation } from '@react-navigation/native';
export default function Join({ navigation: { goBack }, route }) {
  const navigation = useNavigation();
  if(route.params){
    const { name, shortAddr, addr, dist, icon, hint, taskId } = route.params;
  }
   
  // const name = "haha";
  // const id = "aaa";
  // const shortAddr = "haha";
  // const addr = "jaaa";
  const [token, setToken] = useState('') ;
  const [userInfo, setUserInfo] = useState({})
  const [isTakingPhoto, setIsTakingPhoto] = useState(true);
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


  //const userFullName = userInfo.fullname
  const [feeling, setFeeling] = useState("");
  const [photos, setPhotos] = useState([]);
  const handleAddPhoto = () => {
    setIsTakingPhoto(true);
  };
  let formData;
  const handlePostBtn = async () => {
    formData = new FormData();
    //process string info
    console.log("userId:", userInfo.userId);
    formData.append("userId", userInfo.userId);
    formData.append("taskName", name);
    formData.append("taskId", taskId);
    formData.append("caption", feeling);
    formData.append("address", addr);

    // process photos
    photos.forEach((pt, idx) => {
      formData.append("photos", {
        name: new Date() + "_profile",
        uri: pt,
        type: "image/jpg",
      });
    });

    try {
      // console.log('token send:', token)
      // console.log('form data', formData)
      const res = await client.post("/post/create-post", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${token}`,
        },
      });
      console.log("result posting: ", res.data);
      if (res.data.success===true){
        const donePost = res.data.post
        navigation.navigate('Post', {
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
           shortAddr: shortAddr
           })
      }
    } catch (error) {
      console.log(error.message);
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
      {isTakingPhoto ? (
        <CameraComponent
          setIsTakingPhoto={setIsTakingPhoto}
          setPhotos={setPhotos}
          photos={photos}
        />
      ) : (
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
            <TouchableOpacity style={joinstyles.right} onPress={handlePostBtn}>
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
                {userInfo.avatar?
                <Image
                src={userInfo.avatar}
                style={joinstyles.profileImage}
              />:
              <Image
                  source={require("../assets/images/samplephotopost.png")}
                  style={joinstyles.profileImage}
                />}
                
              </TouchableOpacity>
              <Text style={joinstyles.nametext}>{userInfo.fullname}</Text>
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
              {photos.length === 0 ? 
               <TouchableOpacity
               style={joinstyles.photo}
               onPress={handleAddPhoto}
             >
               <Image
                 source={require("../assets/images/addPhoto.png")}
                 style={joinstyles.addicon}
               />
               <Text style={joinstyles.addtext}>Add</Text>
             </TouchableOpacity>:
             <FlatList
             data={photos}
             numColumns={3}
             renderItem={({ item, index }) => {
               return index === photos.length - 1 ? (
                 <>
                   <View style={joinstyles.photo}>
                     <TouchableOpacity
                       onPress={() => handleXicon(index)}
                       style={joinstyles.xicon}
                     >
                       <Image source={require("../assets/images/x.png")} />
                     </TouchableOpacity>

                     <Image
                       source={{ uri: item }}
                       style={{ width: "100%", height: 100 }}
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
                 <View style={joinstyles.photo}>
                   <TouchableOpacity
                     onPress={() => handleXicon(index)}
                     style={joinstyles.xicon}
                   >
                     <Image source={require("../assets/images/x.png")} />
                   </TouchableOpacity>

                   <Image
                     source={{ uri: item }}
                     style={{ width: "100%", height: 100 }}
                   />
                 </View>
               )
             }}
             keyExtractor={(item, index) => index}
            ></FlatList>
             }
              
            </View>
            {/* Info */}
            <View style={joinstyles.info}>
              {route.params?
              <>
                <Text style={joinstyles.taskNametext}>{name}</Text>
                <Text style={joinstyles.taskShortAddrtext}>{shortAddr}</Text>
                <Text style={joinstyles.taskAddrtext}>{addr}</Text>
              </>:<>
              </>}
             
            </View>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
