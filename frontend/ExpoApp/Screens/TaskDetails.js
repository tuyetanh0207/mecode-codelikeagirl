import React, {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import { AppButton } from "../Components/JoinBtn";
import * as CONST from "../Utils/constants";
import styles from "../Utils/styles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
import MapComponent from '../Components/Map'
import { getIconByTitle } from "../Utils/constants";
export default function TaskDetailsScreen({ navigation: { goBack }, route }) {
  const { name, shortAddr, addr, dist, icon, taskId, hint, idCampaign, nameCampaign, isContraint, luckywheelID, latitude, longitude } = route.params;
  const navigation = useNavigation();
  const handleJoinBtn = () => {
    navigation.navigate("Join", {
      name: name,
      icon: icon,
      shortAddr: shortAddr,
      addr: addr,
      dist: dist,
      hint: hint,
      idCampaign: idCampaign,
      nameCampaign: nameCampaign,
      isContraint: isContraint,
      luckywheelID: luckywheelID,
      taskId: taskId,
      latitude: latitude,
      longitude: longitude,
    });
  };
  const handldeBackBtn = () =>{
   console.log('back')
   goBack()
  }
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      
       <TouchableOpacity onPress={handldeBackBtn}
         style={taskDetailstyles.backicon}>
          <Image
            source={require("../assets/images/Back.png")}
         //   style= {{width:  CONST.responsiveHeight(16), height:  CONST.responsiveHeight(20)}}
          />
        </TouchableOpacity>
      <View style={taskDetailstyles.header}>
       

        <Text style={taskDetailstyles.title}>Task details</Text>
      </View>
      {/* content + map*/}
      <ScrollView>
        {/* content */}
        <View style={taskDetailstyles.content}>
          {/* icon + name */}

          <View style={taskDetailstyles.name}>
            {/* icon */}
            <View style={taskDetailstyles.left}>
              {icon}
            </View>
            {/* name */}
            <View style={taskDetailstyles.right}>
              <Text style={taskDetailstyles.nametext}>{name}</Text>
              <Text style={taskDetailstyles.distext}>{dist}m</Text>
            </View>
          </View>
          {/* address */}
          <View style={taskDetailstyles.addr}>
            <Text style={taskDetailstyles.shortAddrtext}>{shortAddr}</Text>
            <Text style={taskDetailstyles.addrtext}>{addr}</Text>
          </View>
          {/* Hint */}
          <View style={taskDetailstyles.hint}>
            <Text style={taskDetailstyles.hinttext}>Hint</Text>
            <Text style={taskDetailstyles.hintContenttext}>{hint}</Text>
          </View>
        </View>
        {/* map */}
        <View style={taskDetailstyles.map}>
          <View style={taskDetailstyles.mapContainer}>
            <MapComponent currentTask={{
              nameTask: name,
              latitude: latitude,
              longitude: longitude
            }} />


          </View>
        </View>
      </ScrollView>
      {/* btn */}
      <TouchableOpacity onPress={handleJoinBtn} style={taskDetailstyles.btn}>
        <AppButton
          title="Join"
          backgroundColor={CONST.LIGHT_PINK_COLOR}
          color={CONST.DARK_PINK_COLOR}
          size="m"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}
