import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import styles from "../Utils/styles";
import { useNavigation } from '@react-navigation/native';
import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import { Item } from "../Components/TaskItem";
import { notLoggedInStyles } from '../Utils/notLoggedInStyles';
import { Iconify } from 'react-native-iconify';
import TaskListComponent from '../Components/TaskList';

export default function TaskNotLoggedIn() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
      <View style={notLoggedInStyles.container}>
        <View style={taskstyles.header}>
          <Text style={styles.heading2}>Task list</Text>
        </View>
        <SafeAreaView style={taskstyles.list}>
          <TaskListComponent />
        </SafeAreaView>
      </View>
      <View style={notLoggedInStyles.bottom}>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('MapNotLoggedIn')}
        >

          <View style={notLoggedInStyles.mapButton}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
              <Iconify icon="bxs:map" size={CONST.responsiveHeight(36)} color="black" />
              <Text numberOfLines={1} style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }, notLoggedInStyles.taskListtext]}>
                Map
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('LogIn')}
        >

          <View style={notLoggedInStyles.signInButton}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >

              <Text numberOfLines={1} style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }, notLoggedInStyles.signIntext]}>
                Sign in
              </Text>
            </View>
          </View>
        </TouchableOpacity>

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
