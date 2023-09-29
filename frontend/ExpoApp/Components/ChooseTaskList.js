import { useNavigation } from "@react-navigation/native";
import React, { useState, Component} from "react";
import * as Location from 'expo-location';
import { UserLocationContext } from '../Contexts/UserLocation';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as CONST from "../Utils/constants";
import { Iconify } from "react-native-iconify";
import styles from "../Utils/styles";
import { taskDetailstyles } from "../Utils/taskDetailsStyles";
import { taskstyles } from "../Utils/taskStyles";
import { getAvailableTaskList } from "../api/activity";
import { Item } from "./TaskItemToChoose";

class ChooseTaskList extends Component {
  static contextType = UserLocationContext;

  constructor(props) {
    super(props);
    this.state = { tasks: [], isChoosed: [] };
  }

  componentDidMount() {
    this.startLocationTracking();
  }

  startLocationTracking = async () => {
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,
        distanceInterval: CONST.THRESOLD_LOCATION_DISTANCE,
      },
      async (newLocation) => {
        // Fetch new task list
        const newLatitude = newLocation.coords.latitude;
        const newLongitude = newLocation.coords.longitude;
        console.log("tracking while render tasklist", newLatitude, newLongitude);
        const newTaskList = await getAvailableTaskList(newLatitude, newLongitude);

        // Update tasklist
        const updateTaskList = newTaskList.data.map((task) => ({
          taskId: task._id,
          name: task.nameTask,
          icon: CONST.getIconByTitle(task.nameTask, CONST.normalIconMapping_60),
          shortAddr: task.shortAddr,
          addr: task.address,
          dist: task.distance,
          hint: task.hint,
        }));
        const updateIsChoose = newTaskList.data.map((task) => (false));
        console.log('isChoosed array', this.state.isChoosed)
        // Update the state with the new task list
        this.setState({ tasks: updateTaskList, isChoosed: updateIsChoose });
        console.log('isChoosed array', this.state.isChoosed)
      }
    );
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imageBackground}
      >
        <View style={taskstyles.container}>
          <View style={taskDetailstyles.header}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                source={require("../assets/images/Back.png")}
                style={taskDetailstyles.backicon}
              />
            </TouchableOpacity>

            <Text style={taskDetailstyles.title}>Task details</Text>
          </View>
          <SafeAreaView style={taskstyles.list}>
            <FlatList
              keyExtractor={(task, index) => index.toString()}
              data={this.state.tasks}
              renderItem={({ item, index }) => (
                <Item
                  name={item.name}
                  icon={item.icon}
                  shortAddr={item.shortAddr}
                  addr={item.addr}
                  dist={item.dist}
                  hint={item.hint}
                  taskId={item.taskId}
                  isChoosed={this.state.isChoosed}
                  index={index}
                  setState={this.setState}
                />
              )}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}
export default ChooseTaskList;