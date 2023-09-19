import { React, useContext, useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { TouchableOpacity, Image, Dimensions, PixelRatio } from 'react-native';
import * as CONST from '../Utils/constants';
import Swiper from 'react-native-swiper';
import MapComponent from '../Components/Map';

export default function Home() {
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
            <View style={{ marginTop: CONST.TRUTH_SCREEN[1] * 0.03 }}>
                <Text style={styles.heading2}>Suggestions</Text>
                <View style={styles.suggestSwiper}>
                    <Swiper loop={true} showsPagination={true} autoplay={true} autoplayTimeout={1.5}>
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
                <Text style={styles.heading2}>Features</Text>
                <View style={styles.featureRow}>

                    <TouchableOpacity onPress={() => navigation.navigate('Task')}>
                        <View style={styles.feature}>
                            <Iconify icon="pepicons-print:list" size={CONST.responsiveHeight(36)} color="black" />
                        </View>
                        <Text style={styles.featureText}>Task list</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                        <View style={styles.feature}>
                            <Iconify icon="teenyicons:gift-outline" size={CONST.responsiveHeight(36)} color="black" />
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
                            <Iconify icon="iconoir:leaderboard-star" size={CONST.responsiveHeight(36)} color="black" />
                        </View>
                        {ResponsiveWords('Leader Board')}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const Map = () => {
        return (
            <View>
                <Text style={styles.heading2}>Map</Text>
                <View style={styles.homeMapContainer}>
                    <MapComponent />
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