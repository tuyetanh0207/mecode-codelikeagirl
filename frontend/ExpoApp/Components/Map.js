import { React, Component, useContext, useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../Utils/styles';
import { UserLocationContext } from '../Contexts/user_location';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';
import { View, Text, TouchableOpacity } from 'react-native';

class MapComponent extends Component {
    static contextType = UserLocationContext;

    constructor(props) {
        super(props);
        this.state = {
            mapRegion: null,
            markerCoords: [
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
                    id: 2,
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
                    id: 3,
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
                    id: 4,
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
                    id: 5,
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
            ],
            showMarkers: true,
        };
    }
    componentDidMount() {
        const { location, setLocation } = this.context;
        if (location) {
            this.setState({
                mapRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0444,
                    longitudeDelta: 0.0444,
                },
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const prevLocation = prevProps.context ? prevProps.context.location : null;
        const currentLocation = this.context ? this.context.location : null;

        if (prevLocation && currentLocation && prevLocation !== currentLocation) {
            this.setState({
                mapRegion: {
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                    latitudeDelta: 0.0444,
                    longitudeDelta: 0.0444,
                },
            });
        }
    }

    onRegionChangeComplete = (newRegion) => {
        const { latitudeDelta, longitudeDelta } = newRegion;
        const threshold = 0.02; // thresold for hiding Markers
        const shouldShowMarkers = latitudeDelta < threshold && longitudeDelta < threshold;
        this.setState({ showMarkers: shouldShowMarkers });
    };

    render() {
        const { mapRegion, markerCoords, showMarkers } = this.state;
        return (
            <MapView
                style={[styles.map, { position: 'absolute', zIndex: 0 }]}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}
                scrollEnabled={true}
                onRegionChangeComplete={this.onRegionChangeComplete}
            >
                {
                    showMarkers && markerCoords &&
                    // show markders when not have empty coordinates
                    markerCoords.map(markerCoord => (
                        <Marker key={markerCoord.id} coordinate={markerCoord.location}>
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

        );
    }
}
export default MapComponent;