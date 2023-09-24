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


export default function TaskNotLoggedIn() {
  const navigation = useNavigation();
  const [TaskList, setTaskList] = useState([
    {
      name: "Collect trash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      name: "Collect trash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
    {
      name: "Collect rash",
      shortAddr: "Thao Cam Vien Zoo",
      addr: "2 Nguyen Binh Khiem, Ward Ben Nghe, District 1",
      dist: 80,
      icon: "fluent:bin-recycle-20-regular",
      hint: "Collect as much trash as possible and put it in the nearest bin according to its classification.",
    },
  ]);

  const renderTaskItem = ({ item }) => (
    <Item
      name={item.name}
      icon={item.icon}
      shortAddr={item.shortAddr}
      addr={item.addr}
      dist={item.dist}
      hint={item.hint}
    />
  );
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
          <FlatList
            keyExtractor={(task, index) => index.toString()}
            data={TaskList}
            renderItem={renderTaskItem}
          />
        </SafeAreaView>
      </View>
      <View  style={notLoggedInStyles.bottom}>
                <TouchableOpacity
                    style={{  }}
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
                    style={{  }}
                    onPress={() => navigation.navigate('LogIn')}
                >
                    
                    <View style={notLoggedInStyles.signInButton}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    
                            <Text  numberOfLines={1} style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }, notLoggedInStyles.signIntext]}>
                                Sign in with Google
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
