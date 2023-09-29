import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import * as CONST from "../Utils/constants";
import { Iconify } from "react-native-iconify";
import styles from "../Utils/styles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
export const ChooseTaskList = ({ isChooesed, title, shortAddr }) => {
  const navigation = useNavigation();
  const [TaskList, setTaskList] = useState([])
  const fetchTaskAvailable = async () => {
    const res = 
  }
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={chooseTaskListstyles.container}>
      <View style={taskDetailstyles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={require("../assets/images/Back.png")}
            style={taskDetailstyles.backicon}
          />
        </TouchableOpacity>

        <Text style={taskDetailstyles.title}>Choose a task</Text>
      </View>
        <SafeAreaView style={chooseTaskListstyles.list}>
          {/* <FlatList
            keyExtractor={(task, index) => index.toString()}
            data={TaskList}
            renderItem={renderTaskItem}
          /> */}
        </SafeAreaView>
      </View>
    </ImageBackground>
     
  );
};

const chooseTaskListstyles = StyleSheet.create({
  container: {
   // backgroundColor:CONST.LIGHT_PINK_COLOR,
    flex: 1,
    width: CONST.TRUTH_SCREEN[0],
    height: CONST.TRUTH_SCREEN[1],
  },
  title: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(16)
  },
});
