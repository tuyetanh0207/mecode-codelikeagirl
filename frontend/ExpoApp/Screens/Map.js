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
    const [markerCoords] = useState([
        {
            id: 1,
            location: {
                latitude: 10.79,
                longitude: 106.71,
            },
            icon: < Iconify icon="fluent:bin-recycle-24-filled" size={CONST.responsiveHeight(40)} color={CONST.TASK_ICON_COLOR} />,
            title: "Collect trash",
            container_style: {
                width: CONST.responsiveWidth(110),
                height: CONST.responsiveHeight(23),
            }
        },
        {
            id: 3,
            location: {
                latitude: 10.60,
                longitude: 106.59,
            },
            icon: < Iconify icon="solar:bottle-bold-duotone" size={CONST.responsiveHeight(40)} color={CONST.TASK_ICON_COLOR} />,
            title: "Bring your own bottle",
            container_style: {
                width: CONST.responsiveWidth(195),
                height: CONST.responsiveHeight(30),
            }
        },
        {
            id: 4,
            location: {
                latitude: 10.63,
                longitude: 106.59,
            },
            icon: < Iconify icon="fluent:bin-recycle-24-filled" size={CONST.responsiveHeight(40)} color={CONST.TASK_ICON_COLOR} />,
            title: "Collect trash",
            container_style: {
                width: CONST.responsiveWidth(110),
                height: CONST.responsiveHeight(23),
            }
        },
        {
            id: 5,
            location: {
                latitude: 10.61,
                longitude: 106.58,
            },
            icon: < Iconify icon="solar:bag-4-bold" size={CONST.responsiveHeight(40)} color={CONST.TASK_ICON_COLOR} />,
            title: "Bring your own bag",
            container_style: {
                width: CONST.responsiveWidth(160),
                height: CONST.responsiveHeight(30),
            }
        },
        {
            id: 6,
            location: {
                latitude: 10.62,//10.62517097706094
                longitude: 106.59,//106.58856815224277
            },
            icon: < Iconify icon="ri:seedling-fill" size={CONST.responsiveHeight(40)} color={CONST.TASK_ICON_COLOR} />,
            title: "Plan a tree",
            container_style: {
                width: CONST.responsiveWidth(110),
                height: CONST.responsiveHeight(23),
            }
        },
    ]);
    ;
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
            >
                {
                    markerCoords &&
                    // if not an empty coordinates
                    markerCoords.map(markerCoord => (
                        <Marker coordinate={markerCoord.location}>
                            <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                                {markerCoord.icon}
                                <View style={[styles.task_label_container, markerCoord.container_style]}>
                                    <Text style={styles.task_label}>
                                        {markerCoord.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </Marker>
                    ))
                }

            </MapView>
            <TouchableOpacity
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