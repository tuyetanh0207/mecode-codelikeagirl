import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styles from "../Utils/styles";
import { useNavigation } from '@react-navigation/native';
import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import { Item } from "../Components/TaskItem";
import { taskstyles } from "../Utils/taskStyles";

export default function Task() {
  const navigation = useNavigation();
  const [TaskList, setTaskList] = useState([
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      nameTask: "Collect trash", 
      taskId: 'collect trash',
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
  ]);

  const renderTaskItem = ({ item }) => (
    <Item
      name={item.nameTask}
      icon={item.icon}
      shortAddr={item.shortAddr}
      addr={item.addr}
      dist={item.dist}
      hint={item.hint}
      taskId={item.taskId}
    />
  );
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
          <FlatList
            keyExtractor={(task, index) => index.toString()}
            data={TaskList}
            renderItem={renderTaskItem}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}


