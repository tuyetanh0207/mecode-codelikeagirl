import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { TouchableOpacity, Image, Dimensions, PixelRatio } from 'react-native';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import * as CONST from '../Utils/constants';
import MapView, { Marker } from 'react-native-maps';
import Swiper from 'react-native-swiper';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ location }) {
    const navigation = useNavigation();

    const Suggestions = () => {
        // now, temporarily using static image, must change to dynamic information later !!!
        const images = [
            require('../assets/images/sample_suggestions/task.png'),
            require('../assets/images/sample_suggestions/gifts.jpg'),
            require('../assets/images/sample_suggestions/leaderboard.jpg'),
            require('../assets/images/sample_suggestions/vote.jpg')
        ];
        const destinations = ['Task', 'Gift', 'LeaderBoard', 'Vote'];

        return (
            <View style={{ marginTop: CONST.TRUTH_SCREEN[1] * 0.03}}>
                <Text style={styles.textH2}>Suggestions</Text>
                <View style={styles.suggestSwiper}>
                    <Swiper loop={true} showsPagination={true}>
                        {images.map((image, index, destination) => (
                            <TouchableOpacity key={index} style={styles.suggestImageContainer} onPress={() => navigation.navigate(destinations[index])}>
                                <Image source={image} style={styles.suggestImage} resizeMode="cover" />
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View>
        );
    }

    const Features = () => {
        const ResponsiveWords = (title) => {
            if (CONST.TRUTH_SCREEN[0] < 1.5 * CONST.STANDARD_SCREEN[0]) {
                const words = title.split(' ');
                return (
                    <View>
                        {words.map((word, index) => (
                            <Text key={index} style={styles.featureText}>
                                {word}
                            </Text>
                        ))}
                    </View>
                );
            } else {
                return <Text style={styles.featureText}>{title}</Text>;
            }
        };

        return (
            <View style={{ marginTop: CONST.PRIMARY_VERTICAL_MARGIN }}>
                <Text style={styles.textH2}>Features</Text>
                <View style={styles.featureRow}>

                    <TouchableOpacity onPress={() => navigation.navigate('Task')}>
                        <View style={styles.feature}>
                            <Iconify icon="pepicons-print:list" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Task list</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                        <View style={styles.feature}>
                            <Iconify icon="teenyicons:gift-outline" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        {/* <Text style={styles.featureText}>Lucky Gifts</Text> */}
                        {ResponsiveWords('Lucky Gifts')}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vote')}>
                        <View style={styles.feature}>
                            <Image source={require('../assets/images/vote.png')} style={styles.featureIcon} />
                        </View>
                        <Text style={styles.featureText}>Vote</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')}>
                        <View style={styles.feature}>
                            <Iconify icon="iconoir:leaderboard-star" size={CONST.responsiveSize(36)} color="black" />
                        </View>
                        {ResponsiveWords('Leader Board')}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const Map = () => {
        const route = useRoute();
        return (
            <View>
                <Text style={styles.textH2}>Map</Text>
                <View style={styles.homeMapContainer}>
                    <MapView
                        style={styles.homeMap}
                    // initialRegion={{
                    //     latitude: location.coords.latitude,
                    //     longitude: location.coords.longitude,
                    //     latitudeDelta: 0.0922,
                    //     longitudeDelta: 0.0421,
                    // }}
                    />
                    {/* <Marker coordinate={initLocation.coords} /> */}
                </View>
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