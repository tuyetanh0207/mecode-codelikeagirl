import { useNavigation } from "@react-navigation/native";
import React, { useState, Component } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "../Contexts/UserLocation";
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
import { taskstyles } from "../Utils/taskStyles";
import { getAvailableTaskList } from "../api/activity";

class ChooseTaskList extends Component {
  static contextType = UserLocationContext;

  constructor(props) {
    super(props);
    this.state = { tasks: [], isChoosed: [], alreadyTicked: false, indexTicked: null, taskChoosed: null };
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
        console.log(
          "tracking while render tasklist",
          newLatitude,
          newLongitude
        );
        const newTaskList = await getAvailableTaskList(
          newLatitude,
          newLongitude
        );

        // Update tasklist
        const updateTaskList = newTaskList.data.map((task) => ({
          taskId: task._id,
          name: task.nameTask,
          icon: CONST.getIconByTitle(task.nameTask, CONST.normalIconMapping_60),
          shortAddr: task.shortAddr,
          addr: task.address,
          dist: task.distance,
          hint: task.hint,
          idCampaign: task.idCampaign,
          nameCampaign: task.nameCampaign,
          isContraint: task.isContraint,
          luckywheelID: task.luckywheelID
        }));
        const updateIsChoose = newTaskList.data.map((task) => false);
        console.log("isChoosed array", this.state.isChoosed);
        // Update the state with the new task list
        this.setState({ tasks: updateTaskList, isChoosed: updateIsChoose });
        console.log("isChoosed array", this.state.isChoosed);
      }
    );
  };
   handlePressChooseBtn = (index) => {
    if (index === this.state.indexTicked) {
      return
    }
    const updatedIsChoosed = this.state.isChoosed
    if(this.state.indexTicked)
      updatedIsChoosed[this.state.indexTicked] = false
    updatedIsChoosed[index] = true
    const task = this.state.tasks
    this.setState({isChoosed: updatedIsChoosed, alreadyTicked: true, indexTicked: index, taskChoosed: task[index]})
  }
  handleBackBtn = () => {
    if (this.setState.taskChoosed) {
      this.props.onCallBack(2)
      this.props.setTaskChoosed(this.state.taskChoosed)
    }
  
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imageBackground}
      >
        <View style={taskstyles.container}>
          <TouchableOpacity onPress={() => this.handleBackBtn()}>
            <Image
              source={require("../assets/images/Back.png")}
              style={taskDetailstyles.backicon}
            />
          </TouchableOpacity>
          <View style={taskDetailstyles.header}>
            <Text style={taskDetailstyles.title}>Task details</Text>
          </View>
          <SafeAreaView style={taskstyles.list}>
            <FlatList
              keyExtractor={(task, index) => index.toString()}
              data={this.state.tasks}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={taskDetailstyles.container}>
                  <View style={taskDetailstyles.left}>
                    <View style={taskDetailstyles.icon}>{item.icon}</View>
                    <View style={taskDetailstyles.dis}>
                      <Text style={taskDetailstyles.disText} numberOfLines={1}>{item.dist}m</Text>
                    </View>
                  </View>
                  <View style={taskDetailstyles.mid}>
                    <Text style={taskDetailstyles.name} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={taskDetailstyles.shortAddr}>
                      {item.shortAddr}
                    </Text>
                    <Text style={taskDetailstyles.addr} numberOfLines={2}>
                      {item.addr}
                    </Text>
                  </View>
                  <View style={taskDetailstyles.right}>
                    <TouchableOpacity onPress={() => this.handlePressChooseBtn(index)}>
                      {/* vaadin:dot-circle/ */}
                      {this.state.isChoosed[index] ? (
                        <Iconify
                          icon="vaadin:dot-circle"
                          color={CONST.DARK_PINK_COLOR}
                        />
                      ) : (
                        <Iconify
                          icon="iconoir:circle"
                          color={CONST.FEATURE_TEXT_COLOR}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}
export default ChooseTaskList;

const taskDetailstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginHorizontal: 18,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 16,
    //paddingHorizontal: 8,
  },
  header: {
    alignItems: "center",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    marginTop: CONST.responsiveHeight(20),
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginHorizontal: "8%",
   
  },
  title: {
    fontSize: CONST.responsiveHeight(19),
    fontWeight: "500",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
   // flex: 10,
    alignItems: "center",
    //marginLeft: "30%",
  },
  backicon: {
    //flex: 0.5,
    position: "absolute",
    top: "12%",
    left: "4%",
  },
  left: {
    flex: 0.2,
    alignItems: "center",
    maxWidth: CONST.responsiveWidth(60),
  },
  icon: {
    flex: 1,
  },
  disText: {
    flex: 0,
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(16),
    justifyContent: "flex-end",
   
  },
  mid: {
    flex: 0.55,
    paddingRight: "4%",
  },
  name: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(20),
    fontWeight: "bold",
  },
  shortAddr: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: CONST.responsiveHeight(13),
  },
  right: {
    flex: 0.1,
    justifyContent: "center",
  },
  addr: {
    fontSize: CONST.responsiveHeight(13),
    fontWeight: "400",
  },
  btn: {
    backgroundColor: CONST.LIGHT_PINK_COLOR,
    color: CONST.DARK_PINK_COLOR,
  },
});
