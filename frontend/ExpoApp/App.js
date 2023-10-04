import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Alert, BackHandler } from 'react-native';
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
import TaskDetailsScreen from './Screens/TaskDetails';
import { UserLocationContext } from './Contexts/UserLocation';
import LogInScreen from './Screens/LogIn';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import LoginProvider, { useLogin } from './Contexts/LoginProvider';
import MapNotLoggedIn from './Screens/MapNotLoggedIn';
import TaskNotLoggedIn from './Screens/TaskNotLoggedIn';
import ProfileScreen from './Screens/Profile';
import { ChooseTaskList } from './Components/ChooseTaskList';

// Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOpts = {
  headerShown: false,
  tabBarActiveTintColor: CONST.NAVIGATION_ACTIVE_COLOR,
  tabBarStyle: { height: CONST.responsiveHeight(60) }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();

    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setLocation(await Location.getCurrentPositionAsync({}));
      }
      else {
        console.log('Permission to access location was denied');
        return;
      }
    };

    const getCameraPermission = async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      if (cameraStatus !== 'granted') {
        console.log('Permission to access camera was denied');
        return;
      }
    };

    const getMicrophonePermission = async () => {
      const cameraStatus = await Camera.requestMicrophonePermissionsAsync();
      if (cameraStatus !== 'granted') {
        console.log('Permission to access microphone was denied');
        return;
      }
    };

    const getLibraryPermission = async () => {
      const libraryStatus = await MediaLibrary.requestPermissionsAsync();
      console.log(libraryStatus);
      if (libraryStatus.status !== 'granted') {
        console.log('Permission to access library was denied');
        return;
      }
    };

    const checkPermissions = async () => {
      await getLocationPermission();
      await getCameraPermission();
      await getMicrophonePermission();
      await getLibraryPermission();
    };

    checkPermissions();
  }, [fontsLoaded]);

  if (!fontsLoaded)
    return null;

  const BottomTabs = () => {
    return (
      <Tab.Navigator screenOptions={screenOpts}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="iconamoon:home-fill" size={CONST.responsiveHeight(32)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="iconamoon:home-light" size={CONST.responsiveHeight(32)} color="black" />
            }
          }} />
        <Tab.Screen name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="bxs:map" size={CONST.responsiveHeight(32)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="bx:map" size={CONST.responsiveHeight(32)} color="black" />
            }
          }} />
        <Tab.Screen name="Join"
          component={Join}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="subway:add" size={CONST.responsiveHeight(32)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="gg:add" size={CONST.responsiveHeight(32)} color="black" />
            }
          }} />
        <Tab.Screen name="Notifications"
          component={Noti}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="mingcute:notification-fill" size={CONST.responsiveHeight(32)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="mingcute:notification-line" size={CONST.responsiveHeight(32)} color="black" />
            }
          }} />
        <Tab.Screen name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused)
                return <Iconify icon="iconamoon:profile-fill" size={CONST.responsiveHeight(32)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
              else
                return <Iconify icon="iconamoon:profile-light" size={CONST.responsiveHeight(32)} color="black" />
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
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    );
  };
  const NotLoggedInRootStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerShown: false
        }}>
        {/* <Stack.Screen name="MapNotLoggedIn" component={MapNotLoggedIn} /> */}
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="MapNotLoggedIn" component={MapNotLoggedIn} />
        <Stack.Screen name="TaskNotLoggedIn" component={TaskNotLoggedIn} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
      </Stack.Navigator>
    );
  }
  const MainNavigator = () => {
    const { isLoggedIn } = useLogin();
    return isLoggedIn ? <RootStack /> : <NotLoggedInRootStack />
  }
  return (
    <LoginProvider>
      <UserLocationContext.Provider
        value={{ location, setLocation }}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </LoginProvider>
  );
}