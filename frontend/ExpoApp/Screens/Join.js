import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
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
export default function Join({ navigation: { goBack }, route }) {
  //const navigation = useNavigate();

  // const { name, shortAddr, addr, dist, icon, hint } = route.params;
  const name = "haha";
  const id = "aaa";
  const shortAddr = "haha";
  const addr = "jaaa";
  let token = "";
  let userInfo = {};
  const [isTakingPhoto, setIsTakingPhoto] = useState(true);
  const getUser = async () => {
    token = await AsyncStorage.getItem("token");
    const str = await AsyncStorage.getItem("userInfo");

    userInfo = str ? JSON.parse(str) : [];

  };
  getUser();

  //const userFullName = AsyncStorage.getItem('userInfo')

  const userFullName = userInfo.fullname
  const [feeling, setFeeling] = useState("");
  const [photos, setPhotos] = useState([]);
  const handleAddPhoto = () => {
    setIsTakingPhoto(true);
  };
  let formData;
  const handlePostBtn = async () => {
    formData = new FormData();
    //process string info
    console.log("ruserid", userInfo.userId);
    formData.append("userId", userInfo.userId);
    formData.append("taskName", name);
    formData.append("taskId", id);
    formData.append("caption", feeling);
    formData.append("address", "1 Le Duan");

    // process photos
    photos.forEach((pt, idx) => {
      formData.append("photos", {
        name: new Date() + "_profile",
        uri: photos[idx],
        type: "image/jpg",
      });
    });

    try {
      const res = await client.post("/create-post", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${token}`,
        },
      });
      console.log("result posting: ", res.data);

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
                <Image
                  source={require("../assets/images/samplephotopost.png")}
                  style={joinstyles.profileImage}
                />
              </TouchableOpacity>
              <Text style={joinstyles.nametext}>{userFullName}</Text>
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
                  );
                }}
                keyExtractor={(item, index) => index}
              ></FlatList>
            </View>
            {/* Info */}
            <View style={joinstyles.info}>
              <Text style={joinstyles.taskNametext}>{name}</Text>
              <Text style={joinstyles.taskShortAddrtext}>{shortAddr}</Text>
              <Text style={joinstyles.taskAddrtext}>{addr}</Text>
            </View>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
