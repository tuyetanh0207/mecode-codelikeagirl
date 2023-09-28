import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "../Utils/styles";
import { useNavigation } from '@react-navigation/native';
import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import TaskListComponent from '../Components/TaskList';

export default function Task() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={taskstyles.container}>
        <View style={taskstyles.header}>
          <Text style={styles.heading2}>Task list</Text>
        </View>
        <SafeAreaView style={taskstyles.list}>
          <TaskListComponent />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const taskstyles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: "2%",
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flex: 0.075,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  list: {
    flex: 1,
    // flexGrow: 1,
    // marginBottom: 10
  },
});
const taskDetailstyles = StyleSheet.create({
  container: {
    // flex: 1,
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
    flex: 0.1,
    alignItems: "center",
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
  mid: {
    flex: 0.55,
    paddingRight: 14,
  },
  name: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  shortAddr: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 13,
  },
  right: {
    flex: 0.2,
    justifyContent: "center",
  },
  addr: {
    fontSize: 13,
    fontWeight: "400",
    //lineHeight: 10
  },
  btn: {
    backgroundColor: CONST.LIGHT_PINK_COLOR,
    color: CONST.DARK_PINK_COLOR,
  },
});
