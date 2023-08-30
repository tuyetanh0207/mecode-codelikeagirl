import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, PermissionsAndroid } from 'react-native';
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
import * as CONST from './Utils/constants';
import styles from './Utils/styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Iconify } from 'react-native-iconify';
import * as Location from 'expo-location';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOpts = {
  headerShown: false,
  tabBarActiveTintColor: CONST.NAVIGATION_ACTIVE_COLOR,
  tabBarStyle: { height: CONST.responsiveSize(60) }
}

export default function App() {
  // const [location, setLocation] = useState(null);
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
  });

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      // setLocation(currentLocation);
      console.log('Location: ', currentLocation);
    };
    getPermission();

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

  const BottomTabs = () => {
    return (
      <Tab.Navigator screenOptions={screenOpts}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="iconamoon:home-fill" size={24} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="iconamoon:home-light" size={24} color="black" />
            }
          }} />
        <Tab.Screen name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="bxs:map" size={24} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="bx:map" size={24} color="black" />
            }
          }} />
        <Tab.Screen name="Join"
          component={Join}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="subway:add" size={24} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="gg:add" size={24} color="black" />
            }
          }} />
        <Tab.Screen name="Notifications"
          component={Noti}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="mingcute:notification-fill" size={24} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="mingcute:notification-line" size={24} color="black" />
            }
          }} />
        <Tab.Screen name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="iconamoon:profile-fill" size={24} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="iconamoon:profile-light" size={24} color="black" />
            }
          }} />
      </Tab.Navigator>
    );
  };

  const RootStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Gift" component={Gift} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="Vote" component={Vote} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}