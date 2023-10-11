import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import * as CONST from '../Utils/constants';
import { voteStyles } from "../Utils/voteStyles";
import {taskstyles} from '../Utils/taskStyles'
import { taskDetailstyles } from '../Utils/taskDetailsStyles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppButton } from "../Components/JoinBtn"; 
import { StatusBar } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { SmallPostItem } from '../Components/SmallPostItem'
import client from '../api/client';
import { getAllPostOfUser, getUserInfo } from '../api/user';
export default function IntroScreen({navigation: {goBack}, route}) {
    const navigation = useNavigation();
  
    return (
        <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imageBackground}
      >
        <View style={introStyles.container}>
        <Image
              source={require("../assets/images/logoIntro.png")}
              style={introStyles.backicon}
            />
            <Text style={introStyles.greenStepText}>GreenStep</Text>
            <Text style={introStyles.sloganText}>Green living, quick gifting!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MapNotLoggedIn')} style={introStyles.nexticon}>
            <Image
              source={require("../assets/images/nextIntro.png")}
              style={introStyles.backicon}
            />
          </TouchableOpacity>
          <View style={introStyles.header}>
            
            
          </View>
          <View style={introStyles.inforContainer}>
            
          </View>
          
        </View>
      </ImageBackground>
    );
    
}

export const introStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  greenStepText: {
    fontSize: CONST.responsiveHeight(40),
    fontWeight: '700',
    color: CONST.GREENSTEP_TEXT_COLOR,
    marginTop: '5%',

  },
  sloganText: {
    color: CONST.FEATURE_TEXT_COLOR,
    marginTop: '10%',
    fontWeight: '500',
    fontSize: CONST.responsiveHeight(18)
  },
  nexticon: {
    position: 'absolute',
    bottom: '14%',
    right: '10%'
  }
})