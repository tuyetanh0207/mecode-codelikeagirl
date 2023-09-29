import { useNavigation, useScrollToTop } from "@react-navigation/native";
import React , {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as CONST from "../Utils/constants";
import { Iconify } from "react-native-iconify";
import { ChooseTaskList } from "./ChooseTaskList";
export const ChooseTaskBtn = (isChoosed, taskChoosed) => {
  const navigation = useNavigation();
  const iconSize= 18
  //console.log('ischoosed', isChoosed)
  //console.log('ttaskcho', taskChoosed)
  
  return (
    <View style ={[chooseTaskBtnstyles.container, isChoosed ===2 ? {maxWidth: CONST.responsiveWidth(300)}: {maxWidth: CONST.responsiveWidth(120)} ]}>
    <View
      //onPress={() => navigation.navigate('TaskDetails')}
      style={chooseTaskBtnstyles.innerContainer}
      //onPress={()=> handleChooseBtn()}
    >
      {isChoosed.isChoosed===2?<>
        <Iconify 
       icon = 'solar-pin-list-linear'
        color={CONST.FEATURE_TEXT_COLOR} 
        size={CONST.responsiveHeight(iconSize)}/>
       <Text
         style={chooseTaskBtnstyles.title}
         numberOfLines={1}
       >
         {isChoosed.taskChoosed.name} - {isChoosed.taskChoosed.shortAddr}
       </Text>
       <Iconify 
       icon = 'akar-icons:triangle-down-fill' 
       color={CONST.FEATURE_TEXT_COLOR} 
       size={CONST.responsiveHeight(iconSize)}/>
     
      </>:
      <>
        <Iconify 
       icon = 'solar-pin-list-linear'
        color={CONST.FEATURE_TEXT_COLOR} 
        size={CONST.responsiveHeight(iconSize)}/>
       <Text
         style={chooseTaskBtnstyles.titleNot}
       >
         Choose a task
       </Text>
       <Iconify 
       icon = 'akar-icons:triangle-down-fill' 
       color={CONST.FEATURE_TEXT_COLOR} 
       size={CONST.responsiveHeight(10)}
       style={[{}]}
       />
     
      </>
     
      }
    </View>

    </View>
  );
};

const chooseTaskBtnstyles = StyleSheet.create({
  container: {
    marginTop: '1%',

    //maxWidth: CONST.responsiveWidth(200),
    alignSelf: 'flex-start'
  },
  innerContainer: {
    backgroundColor:CONST.LIGHT_PINK_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 1,
    borderRadius: 3,

    paddingHorizontal: '2%',
    alignItems: "center",
  },
  title: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(14),
    fontWeight: '300',
    width: '80%',
    marginLeft: '4%',

  },
  titleNot: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(14),
    fontWeight: '300',
    marginHorizontal: '4%',

  },
});
