import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import styles from "../Utils/styles";
import { Iconify } from 'react-native-iconify';
import { useNavigation } from '@react-navigation/native';
import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import TaskListComponent from '../Components/TaskList';
import { taskstyles } from "../Utils/taskStyles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
export default function Task({ navigation: { goBack }, route }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={taskstyles.container}>
      <TouchableOpacity onPress={() => goBack()}
       style={taskstyles.backicon}>
            <Iconify icon="ic:round-arrow-back-ios" size={CONST.responsiveHeight(32)} color={CONST.FEATURE_TEXT_COLOR} />
          </TouchableOpacity>

        <View style={taskstyles.header}>
          
          <Text style={taskstyles.title}>Task list</Text>
        </View>
        <SafeAreaView style={taskstyles.list}>
          <TaskListComponent />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}


