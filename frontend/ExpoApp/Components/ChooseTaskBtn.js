import { useNavigation, useScrollToTop } from "@react-navigation/native";
import React , {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as CONST from "../Utils/constants";
import { Iconify } from "react-native-iconify";
import { ChooseTaskList } from "./ChooseTaskList";
export const ChooseTaskBtn = ({ isChooesed, isChoosing, setIsChoosing, title, shortAddr }) => {
  const navigation = useNavigation();
  const iconSize= 18

  const handleChooseBtn =() =>{
    setIsChoosing(true)
  }
  return (
    <>
    <TouchableOpacity
      //onPress={() => navigation.navigate('TaskDetails')}
      style={chooseTaskBtnstyles.container}
      onPress={()=> handleChooseBtn()}
    >
      {isChooesed?<>
        <Iconify 
       icon = 'solar-pin-list-linear'
        color={CONST.FEATURE_TEXT_COLOR} 
        size={CONST.responsiveHeight(iconSize)}/>
       <Text
         style={chooseTaskBtnstyles.title}
       >
         {title}
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
         style={chooseTaskBtnstyles.title}
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
    </TouchableOpacity>

    </>
  );
};

const chooseTaskBtnstyles = StyleSheet.create({
  container: {
    marginTop: '2%',
    backgroundColor:CONST.LIGHT_PINK_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 1,
    borderRadius: 3,
    padding: '1%',
    paddingHorizontal: '2%',
    alignItems: "center"


  },
  title: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(14),
    fontWeight: '300',

  },
});
