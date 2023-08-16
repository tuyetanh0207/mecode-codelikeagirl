import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@iconify/react';
import { TouchableOpacity, Image, Dimensions, PixelRatio } from 'react-native';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import * as CONST from '../constants';

export default function Home() {
    const navigation = useNavigation();
    const marginVertical = CONST.screenWidth * 0.05;
    const marginHorizontal = CONST.screenWidth * 0.15;

    const Suggestions = () => {
        return (
            <View style={{ marginVertical: marginVertical }}>
                <Text style={styles.textH2}>Suggestions</Text>
            </View>
        );
    }

    const Features = () => {
        return (
            <View>
                <Text style={styles.textH2}>Features</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: marginVertical, paddingHorizontal: marginHorizontal }}>

                    <TouchableOpacity onPress={() => console.log('Task list button pressed.')}>
                        <View style={styles.feature}>
                            <Ionicons name="add-circle-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Tasks list</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Task list button pressed.')}>
                        <View style={styles.feature}>
                            <Ionicons name="add-circle-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Gifts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Task list button pressed.')}>
                        <View style={styles.feature}>
                            <Ionicons name="add-circle-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Leader Board</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Task list button pressed.')}>
                        <View style={styles.feature}>
                            <Ionicons name="add-circle-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Vote</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    const Map = () => {
        return (
            <View style={{ marginVertical: marginVertical }}>
                <Text style={styles.textH2}>Map</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageBackground}
        >
            <View style={styles.container}>
                <Suggestions />
                <Features />
                <Map />
            </View>
        </ImageBackground>
    );
}