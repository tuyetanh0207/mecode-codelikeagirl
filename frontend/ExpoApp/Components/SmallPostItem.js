import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { AppButton } from "./JoinBtn.js";
import * as CONST from "../Utils/constants.js";

export const SmallPostItem = ({ postId, point, fullname, userId, icon, shortAddr, addr, taskName, taskId, createdDate, caption, votedPoint, photos }) => {
   const navigation = useNavigation();
   
  const handlePressJoinBtn = () => {
    navigation.navigate("TaskDetails", {

      icon: icon,
      shortAddr: shortAddr,
      addr: addr,
      dist: dist,
      hint: hint,
      taskId: taskId
    });
  };

  return (
    <TouchableOpacity style={smallPoststyles.container}>
      {addr?
       <View style={smallPoststyles.left}>
        <View style={smallPoststyles.header}>
          {CONST.getIconByTitle(taskName,mappingType = CONST.boldHeading2TextColorIconMapping)}
          <Text style={smallPoststyles.name} numberOfLines={1}>
            {taskName}
          </Text>
        </View>
        <Text style={smallPoststyles.shortAddr} numberOfLines={2}>{shortAddr} - <Text style={smallPoststyles.addr} >
            {addr}
          </Text>
        </Text>
        {createdDate? <Text style={smallPoststyles.dateText}>{createdDate.slice(0, createdDate.length - 29)}</Text>
        :
        <></>}
     </View>
     :
     <View style={smallPoststyles.left}>
     <View style={smallPoststyles.header}>
       {CONST.getIconByTitle(taskName,mappingType = CONST.boldHeading2TextColorIconMapping_44)}
       <Text style={smallPoststyles.name} numberOfLines={1}>
         {taskName}
       </Text>
       {createdDate? <Text style={smallPoststyles.dateText}>{createdDate.slice(0, createdDate.length - 29)}</Text>
     :
     <></>}
     </View>
   
     {addr?
     <Text style={smallPoststyles.shortAddr} numberOfLines={2}>{shortAddr} - <Text style={smallPoststyles.addr} >
         {addr}
     </Text>
   </Text>
   :
   <Text style={smallPoststyles.shortAddr} numberOfLines={2}>{shortAddr}  <Text style={smallPoststyles.addr} >
         {addr}
     </Text>
   </Text>}
  
     {addr?createdDate? <Text style={smallPoststyles.dateText}>{createdDate.slice(0, createdDate.length - 29)}</Text>
     :
     <></>
   :
   <></>}
     
   </View>
      }
     
      <View style={smallPoststyles.right}>
        {
          photos.length >=0? 
          <Image  src={ photos[0] }
          style={[{ width: CONST.responsiveHeight(100), height: CONST.responsiveHeight(100) }, smallPoststyles.photo]}/>
          :
          <></>
        }
        
       
        
      </View>
    
    </TouchableOpacity>
  );
};

const smallPoststyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",

    marginBottom: 12,
    paddingVertical: '4%',
    borderRadius: 16,
    paddingHorizontal: '4%',
  },
  left: {
    flex: 7,
   // alignItems: 'center'
  },
  header: {
    flexDirection: 'row'
  },
  icon: {
    flex: 1,
  },
  disText: {
    flex: 0,
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: 16,
    justifyContent: "flex-end",
  },

  name: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: 20,
    fontWeight: "400",
    marginLeft: '3%'
  },
  shortAddr: {
    color: CONST.FEATURE_TEXT_COLOR,
    //fontWeight: "bold",
    fontSize: CONST.responsiveHeight(17),
  },
  right: {
   // flex: 3,
    //justifyContent: "center",
    overflow:"hidden",

  },
  addr: {
    color: CONST.FEATURE_TEXT_COLOR,
    //fontWeight: "bold",
    fontSize: CONST.responsiveHeight(17),
  },
  btn: {
    backgroundColor: CONST.LIGHT_PINK_COLOR,
    color: CONST.DARK_PINK_COLOR,
  },
  dateText: {
    fontSize: CONST.responsiveHeight(14),
    fontWeight: "300",
  },
  photo: {
    borderRadius: 8
  }
});
