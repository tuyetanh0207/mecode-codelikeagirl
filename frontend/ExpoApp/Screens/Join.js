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
import { AppButton } from "../Components/JoinBtn";
import * as CONST from "../Utils/constants";
import { joinstyles } from "../Utils/joinStyles";
import styles from "../Utils/styles";
export default function Join({ navigation: { goBack }, route }) {
  //const navigation = useNavigate();
  const taskName = "Collect garbage";
  const taskShortAddr = "Hoa binh park";
  const taskAddr = "2 Nguyen Chi Thanh, Ward 9, Ho Chi Minh City";
  const userFullName = "Nguyen Thi Anh Tuyet";
  const [feeling, setFeeling] = useState("");
  const [photos, setPhotos] = useState([
    {
      src: require("../assets/images/samplephotopost.png"),
    },
    {
      src: require("../assets/images/samplephotopost.png"),
    },
    {
      src: require("../assets/images/samplephotopost.png"),
    },
    {
      src: require("../assets/images/samplephotopost.png"),
    },
    {
      src: require("../assets/images/samplephotopost.png"),
    },
    {
      src: require("../assets/images/addPhoto.png"),
    },
  ]);
  const handleAddPhoto = () => {};
  const handlePostBtn = () => {};
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
      <View style={joinstyles.container}>
        {/* header */}
        <View style={joinstyles.header}>
          {/* backicon */}
          <View style={joinstyles.left}>
            <TouchableOpacity onPress={() => goBack()}>
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
                  <TouchableOpacity
                    style={joinstyles.photo}
                    onPress={handleAddPhoto}
                  >
                    <Image source={item.src} style={joinstyles.addicon} />
                    <Text style={joinstyles.addtext}>Add</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={joinstyles.photo}>
                    <TouchableOpacity
                      onPress={() => handleXicon(index)}
                      style={joinstyles.xicon}
                    >
                      <Image source={require("../assets/images/x.png")} />
                    </TouchableOpacity>

                    <Image source={item.src} />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            ></FlatList>
          </View>
          {/* Info */}
          <View style={joinstyles.info}>
            <Text style={joinstyles.taskNametext}>{taskName}</Text>
            <Text style={joinstyles.taskShortAddrtext}>{taskShortAddr}</Text>
            <Text style={joinstyles.taskAddrtext}>{taskAddr}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
// import React from 'react';
// import { View, Text, Button, ImageBackground } from 'react-native';
// import styles from '../Utils/styles';
// import { useNavigation } from '@react-navigation/native';
// import CameraComponent from '../Components/Camera';
// import { Iconify } from 'react-native-iconify';

// export default function Join() {
//     // const navigation = useNavigation();
//     return (
//         // choose video or photos
//         // photo
//         // video

//         <ImageBackground
//             source={require('../assets/images/background.png')}
//             style={styles.imageBackground}
//         >
//             <CameraComponent />
//         </ImageBackground>
//     );
// }
