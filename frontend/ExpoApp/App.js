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
import { UserLocationContext } from './Context/user_location';

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
  });

  const [location, setLocation] = useState(null);
  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        Alert.alert(
          'Permission Denied',
          'You need to grant location permission to use this app.',
          [
            {
              text: 'Grant Permission',
              onPress: async () => {
                await Location.requestForegroundPermissionsAsync();
              },
            },
            {
              text: 'Exit App',
              onPress: () => {
                BackHandler.exitApp();
              },
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    };
    getPermission();
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
      </Stack.Navigator>
    );
  };

  return (
    <UserLocationContext.Provider
      value={{ location, setLocation }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserLocationContext.Provider>

  );
}