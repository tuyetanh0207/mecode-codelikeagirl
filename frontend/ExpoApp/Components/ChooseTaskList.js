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
       // console.log('updateTasklist', updateTaskList)
        const updateIsChoose = newTaskList.data.map((task) => false);
      //  console.log("isChoosed array", this.state.isChoosed);
        // Update the state with the new task list
        this.setState({ tasks: updateTaskList, isChoosed: updateIsChoose });
      //  console.log("isChoosed array", this.state.isChoosed);
      }
    );
  };
   handlePressChooseBtn = (index) => {
    if (index === this.state.indexTicked) {
      return
    }
    let updatedIsChoosed = this.state.isChoosed
    if(this.state.indexTicked!==null)
      updatedIsChoosed[this.state.indexTicked] = false
    updatedIsChoosed[index] = true
    console.log('this.state.tasks', this.state.tasks)
    const task = this.state.tasks[index]
    console.log('task', task)
    this.setState({isChoosed: updatedIsChoosed, alreadyTicked: true, indexTicked: index, taskChoosed: task})
  }
  handleBackBtn = () => {
    console.log('taskchoosed',this.state.taskChoosed)
    if (this.state.taskChoosed) {
      console.log('press Back Btn')
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
        <View style={taskDetailstyles.outterContainer}>
          <TouchableOpacity onPress={() => this.handleBackBtn()}
           style={taskDetailstyles.backicon}>
            <Image
              source={require("../assets/images/Back.png")}
             
            />
          </TouchableOpacity>
          <View style={taskDetailstyles.header}>
            <Text style={taskDetailstyles.title}>Choose a task</Text>
          </View>
          <SafeAreaView style={taskDetailstyles.list}>
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
  outterContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginHorizontal: 18,
    marginTop: 12,
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
    flex: 0.1,
    justifyContent: 'center',
   
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
    top: "6%",
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
  list: {
    flex: 1,
    height: '100%'

   
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
