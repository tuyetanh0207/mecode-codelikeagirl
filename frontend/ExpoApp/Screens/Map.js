import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../Utils/styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({ location }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <MapView style={{ width: '100%', height: '100%' }}
            // initialRegion={{
            //     latitude: location.coords.latitude,
            //     longitude: location.coords.longitude,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421,
            // }}
            />
            <Marker coordinate={location.coords} />
        </View>
    );
}