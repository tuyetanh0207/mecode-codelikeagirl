import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import CameraComponent from '../Components/Camera';
import { Iconify } from 'react-native-iconify';

export default function Join() {
    // const navigation = useNavigation();
    return (
        // choose video or photos
        // photo
        // video

        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageBackground}
        >
            <CameraComponent />
        </ImageBackground>
    );
}
