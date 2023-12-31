import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { AppButton } from "../Components/JoinBtn.js";
import * as CONST from "../Utils/constants";
import { useLogin } from "../Contexts/LoginProvider.js";

export const Item = ({ name, icon, shortAddr, addr, dist, hint, taskId, idCampaign, nameCampaign, isContraint, luckywheelID, latitude, longitude }) => {
  const navigation = useNavigation();
  const {isLoggedIn} = useLogin()
  const handlePressJoinBtn = () => {
    if (isLoggedIn){
      navigation.navigate("TaskDetails", {
        name: name,
        icon: icon,
        shortAddr: shortAddr,
        addr: addr,
        dist: dist,
        hint: hint,
        taskId: taskId,
        idCampaign: idCampaign,
        nameCampaign: nameCampaign,
        isContraint: isContraint,
        luckywheelID: luckywheelID,
        latitude: latitude,
        longitude: longitude,
      });
    } else {
      navigation.navigate("TaskDetailsNotLoggedIn", {
        name: name,
        icon: icon,
        shortAddr: shortAddr,
        addr: addr,
        dist: dist,
        hint: hint,
        taskId: taskId,
        idCampaign: idCampaign,
        nameCampaign: nameCampaign,
        isContraint: isContraint,
        luckywheelID: luckywheelID,
        latitude: latitude,
        longitude: longitude,
      });
    }
   
  };

  return (
    <TouchableOpacity style={taskDetailstyles.container}>
      <View style={taskDetailstyles.left}>
        <View style={taskDetailstyles.icon}>
          {icon}
        </View>
        <View style={taskDetailstyles.dis}>
          <Text style={taskDetailstyles.disText} numberOfLines={1}>{dist}m</Text>
        </View>
      </View>
      <View style={taskDetailstyles.mid}>
        <Text style={taskDetailstyles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={taskDetailstyles.shortAddr}>{shortAddr}</Text>
        <Text style={taskDetailstyles.addr} numberOfLines={2}>
          {addr}
        </Text>
      </View>
      <View style={taskDetailstyles.right}>
        <TouchableOpacity onPress={handlePressJoinBtn}>
          <AppButton
            title="Join"
            backgroundColor={CONST.LIGHT_PINK_COLOR}
            color={CONST.DARK_PINK_COLOR}
            size="sm"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const taskDetailstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginHorizontal: 18,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  left: {
    flex: 0.2,
    alignItems: 'center'
  },
  icon: {
    flex: 1,
  },
  disText: {
    flex: 0,
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(16),
    justifyContent: "flex-end",
  },
  mid: {
    flex: 0.55,
    paddingRight: '4%',
  },
  name: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(20),
    fontWeight: "bold",
  },
  shortAddr: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: CONST.responsiveHeight(13),
  },
  right: {
    flex: 0.2,
    justifyContent: "center",
  },
  addr: {
    fontSize: CONST.responsiveHeight(13),
    fontWeight: "400",
  },
  btn: {
    backgroundColor: CONST.LIGHT_PINK_COLOR,
    color: CONST.DARK_PINK_COLOR,
  },
});
