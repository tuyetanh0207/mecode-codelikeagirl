import { React, useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../Utils/styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from 'expo-location';
import { UserLocationContext } from '../Context/user_location';

export default function Map() {
    // const navigation = useNavigation();
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
            {/* <Marker coordinate={location.coords} /> */}
        </View>
    );
}