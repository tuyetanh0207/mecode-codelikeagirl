import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "../Utils/styles";
import { useNavigation } from '@react-navigation/native';
import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import TaskListComponent from '../Components/TaskList';
import { taskstyles } from "../Utils/taskStyles";
export default function Task() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={taskstyles.container}>
        <View style={taskstyles.header}>
          <Text style={styles.heading2}>Profile</Text>
        </View>
        <SafeAreaView style={taskstyles.list}>
          <TaskListComponent />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}


