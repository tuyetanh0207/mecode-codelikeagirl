import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { TouchableOpacity, Image, Dimensions, PixelRatio } from 'react-native';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import * as CONST from '../constants';

export default function Home() {
    const navigation = useNavigation();
    const marginVertical = CONST.TRUTH_SCREEN[1] * 0.05;

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
                <View style={styles.featureRow}>

                    <TouchableOpacity onPress={() => console.log('TASK LIST button pressed.')}>
                        <View style={styles.feature}>
                            <Iconify icon="pepicons-print:list" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Tasks list</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('GIFT button pressed.')}>
                        <View style={styles.feature}>
                            <Iconify icon="teenyicons:gift-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Gifts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('LEADER BOARD button pressed.')}>
                        <View style={styles.feature}>
                            <Iconify icon="iconoir:leaderboard-star" size={40} color="black" />
                        </View>
                        <Text style={styles.featureText}>Leader Board</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('VOTE button pressed.')}>
                        <View style={styles.feature}>
                            <Image source={require('../assets/images/vote.png')} style={styles.image} />
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