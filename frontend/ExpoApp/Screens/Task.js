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
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815f',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
    {
      idCampaign: '65115ac21f1dc1a4a78665db',
      nameCampaign: 'First Campaign',
      isContraint:true,
      nameTask: "Trash teh prescribed places", 
      taskId: '650abede9dc2c4fdbcaeff71',
      shortAddr: "Thao Cam Vien Zoo",
      address: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      distance: 80,
      luckywheelID: '6512b4b9d0d942a5a461815e',
      icon: "fluent:bin-recycle-20-regular",
      hint: "Disposing of trash according to regulations reduces the amount of daily waste and helps maintain general hygiene",
    },
  ]);

  const renderTaskItem = ({ item }) => (
    <Item
      name={item.nameTask}
      icon={item.icon}
      shortAddr={item.shortAddr}
      addr={item.address}
      dist={item.distance}
      hint={item.hint}
      taskId={item.taskId}
      idCampaign={item.idCampaign}
      nameCampaign={item.nameCampaign}
      isContraint={item.isContraint}
      luckywheelID={item.luckywheelID}
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


