import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gift from './Screens/Gift';
import Home from './Screens/Home';
import Intro from './Screens/Intro';
import Join from './Screens/Join';
import LeaderBoard from './Screens/LeaderBoard';
import LogIn from './Screens/LogIn';
import Map from './Screens/Map';
import Noti from './Screens/Noti';
import Post from './Screens/Post';
import Profile from './Screens/Profile';
import Task from './Screens/Task';
import Vote from './Screens/Vote';
const Tab = createBottomTabNavigator();
import * as CONST from './Utils/constants';
import styles from './Utils/styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: CONST.NAVIGATION_COLOR
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />
        }} />
        <Tab.Screen name="Map" component={Map} options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="map-pin" size={24} color="black" />
        }} />
        <Tab.Screen name="Join" component={Join} options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="add-circle-outline" size={24} color="black" />
        }} />
        <Tab.Screen name="Notifications" component={Noti} options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="notifications-outline" size={24} color="black" />
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}