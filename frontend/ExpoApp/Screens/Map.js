import { React, useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Utils/styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from 'expo-location';
import { UserLocationContext } from '../Context/user_location';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';

export default function Map() {
    const navigation = useNavigation();
    const [mapRegion, setmapRegion] = useState([]);
    const { location, setLocation } = useContext(UserLocationContext);

    useEffect(() => {
        if (location) {
            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0444,
                longitudeDelta: 0.0444,
            })
        }
    }, [location])
    return (
        <View style={styles.mainMapContainer}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Task')}
                style={{ position: 'absolute', zIndex: 1 }}
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
        </View >
    );
}