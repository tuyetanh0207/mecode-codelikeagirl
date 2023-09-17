import { React } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';
import MapComponent from '../Components/Map';

export default function Map() {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageBackground}
        >
            <View style={styles.mainMapContainer}>
                <MapComponent />
                <TouchableOpacity
                    style={{ position: 'absolute', zIndex: 0, pointerEvents: 'box-none' }}
                    onPress={() => navigation.navigate('Task')}
                >
                    <View style={styles.taskListButton}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                            <Iconify icon="pepicons-print:list" size={CONST.responsiveHeight(36)} color="black" />
                            <Text style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }]}>
                                Task list
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}