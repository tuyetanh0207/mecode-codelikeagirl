import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { AppButton } from "./JoinBtn.js";
import * as CONST from "../Utils/constants.js";
import VideoPlayer from "./VideoPlayer.js";
export const SmallPostItem = ({
  postId,
  point,
  fullname,
  userId,
  icon,
  shortAddr,
  addr,
  taskName,
  taskId,
  createdDate,
  caption,
  votedPoint,
  photos,
  avatar
}) => {
  const navigation = useNavigation();
  var mp4ReExpression = /\.mp4$/; 
  const handlePressJoinBtn = () => {
    navigation.navigate("Post", {
      icon: icon,
      shortAddr: shortAddr,
      addr: addr,
      taskId: taskId,
      isJustPosted: false,
      userId: userId,
      postId: postId,
      fullname: fullname,
      caption: caption,
      photos: photos,
      createdDate: createdDate,
      avatar: avatar
    });
  };

  return (
    <TouchableOpacity style={smallPoststyles.container} onPress={() => handlePressJoinBtn()}>
      {addr ? (
        <View style={smallPoststyles.left}>
          <View style={smallPoststyles.header}>
            {CONST.getIconByTitle(
              taskName,
              (mappingType = CONST.boldHeading2TextColorIconMapping)
            )}
            <Text style={smallPoststyles.name} numberOfLines={1}>
              {taskName}
            </Text>
          </View>
          <Text style={smallPoststyles.shortAddr} numberOfLines={2}>
            {shortAddr} - <Text style={smallPoststyles.addr}>{addr}</Text>
          </Text>
          {createdDate ? (
            <Text style={smallPoststyles.dateText}>
              {createdDate.slice(0, createdDate.length - 29)}
            </Text>
          ) : (
            <></>
          )}
        </View>
      ) : (
        // not address
        <View style={smallPoststyles.left}>
          <View style={smallPoststyles.header}>
            {CONST.getIconByTitle(
              taskName,
              (mappingType = CONST.boldHeading2TextColorIconMapping_44)
            )}
            <View style={smallPoststyles.notAddrNameContainer}>
              <Text style={smallPoststyles.name} numberOfLines={1}>
                {taskName}
              </Text>
              {createdDate ? (
                <Text style={smallPoststyles.dateTextnotAdrr}>
                  {createdDate.slice(0, createdDate.length - 29)}
                </Text>
              ) : (
                <></>
              )}
            </View>
          </View>

          {addr ? (
            <Text style={smallPoststyles.shortAddr} numberOfLines={2}>
              {shortAddr} - <Text style={smallPoststyles.addr}>{addr}</Text>
            </Text>
          ) : (
            <Text style={smallPoststyles.shortAddr} numberOfLines={2}>
              {shortAddr} <Text style={smallPoststyles.addr}>{addr}</Text>
            </Text>
          )}

          {addr ? (
            createdDate ? (
              <Text style={smallPoststyles.dateText}>
                {createdDate.slice(0, createdDate.length - 29)}
              </Text>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </View>
      )}

      <View style={smallPoststyles.right}>
        {photos.length >= 0 ? addr ? (
          mp4ReExpression.test(photos[0]) ?
            <VideoPlayer videoUri={photos[0]} width={100} height={100}/>
          :
          <Image
            src={photos[0]}
            style={[
              {
                width: CONST.responsiveHeight(100),
                height: CONST.responsiveHeight(100),
              },
              smallPoststyles.photo,
            ]}
          />
        
         
        ) : (
          mp4ReExpression.test(photos[0]) ?
          <VideoPlayer videoUri={photos[0]} width={80} height={80}/>
          :
          <Image
          src={photos[0]}
          style={[
            {
              width: CONST.responsiveHeight(80),
              height: CONST.responsiveHeight(80),
            },
            smallPoststyles.photo,
          ]}
        />
        ):
        (<></>)}
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
    paddingVertical: "4%",
    borderRadius: 16,
    paddingHorizontal: "4%",
  
  },
  left: {
    flex: 8,
  
 
  },
  header: {
    flexDirection: "row",
    alignItems: 'center'
  },
  notAddrNameContainer: {
    flexDirection: "column",

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

  name: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(20),
    fontWeight: "400",
    marginLeft: "3%",
  },
  shortAddr: {
    color: CONST.FEATURE_TEXT_COLOR,
    //fontWeight: "bold",
    fontSize: CONST.responsiveHeight(17),
  },
  right: {
     //flex: 3,
    //justifyContent: "center",
    overflow: "hidden",
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
  dateTextnotAdrr: {
    fontSize: CONST.responsiveHeight(14),
    fontWeight: "300",
    marginLeft: "3%",
  },
  photo: {
    borderRadius: 8,
  },
});
