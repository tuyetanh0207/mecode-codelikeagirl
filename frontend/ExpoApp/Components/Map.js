import React, { Component } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from '../Utils/styles';
import { UserLocationContext } from '../Contexts/UserLocation';
import * as CONST from '../Utils/constants';
import { View, Text, TouchableOpacity } from 'react-native';
import client from '../api/client';
import { activity } from '../api/activity';

class MapComponent extends Component {
    static contextType = UserLocationContext;

    constructor(props) {
        super(props);

        // state of map component
        this.state = {
            mapRegion: null,
            markerCoords: [],
            showTitle: true,
            showIcon: true,
        };
    }


    componentDidMount() {
        // This function will be automatically called at the first render
        // Set user location for map
        const { location, setLocation } = this.context;
        if (location) {
            this.setState({
                mapRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0111,
                    longitudeDelta: 0.0222,
                },
            });
        }

        // render icon from its title
        this.state.markerCoords && this.state.markerCoords.map(markerCoord => (
            markerCoord.icon = CONST.getIconByTitle(markerCoord.title, CONST.boldIconMapping)
        ))

        // render task container size
        this.state.markerCoords && this.state.markerCoords.map(markerCoord => (
            markerCoord.container_style = CONST.getTaskContainerSizeByTitle(markerCoord.title)
        ))
        this.startLocationTracking();
    }

    componentDidUpdate(prevProps, prevState) {
        // This function will be automatically called every time updated the probs
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

    startLocationTracking = async () => {
        await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.Balanced,
                distanceInterval: CONST.THRESOLD_LOCATION_DISTANCE,
            },
            async newLocation => {
                this.updateMapRegion(newLocation.coords);
                console.log('New location:', newLocation.coords);

                // Fetch new task list
                const newLatitude = newLocation.coords.latitude;
                const newLongitude = newLocation.coords.longitude;
                console.log('New latitude: ', newLatitude);
                console.log('New longitude: ', newLongitude);
                const newTaskList = await activity(newLatitude, newLongitude);

                // Update markerCoords with the newTaskList data
                const updatedMarkerCoords = newTaskList.data.map(task => ({
                    id: task._id,
                    location: {
                        latitude: task.latitude,
                        longitude: task.longitude,
                    },
                    icon: CONST.getIconByTitle(task.nameTask, CONST.boldIconMapping),
                    title: task.nameTask,
                    container_style: CONST.getTaskContainerSizeByTitle(task.nameTask),
                }));

                this.setState({ markerCoords: updatedMarkerCoords });
            }
        );
    }


    updateMapRegion = newCoords => {
        // Change map view when the user move
        this.setState(prevState => ({
            mapRegion: {
                ...prevState.mapRegion,
                latitude: newCoords.latitude,
                longitude: newCoords.longitude,
            },
        }));
    }

    // Hide the marker when zoom out
    onRegionChangeComplete = (newRegion) => {
        const { latitudeDelta, longitudeDelta } = newRegion;
        const shouldShowTitles = latitudeDelta < CONST.THRESHOLD_SHOW_TASK_TITLES && longitudeDelta < CONST.THRESHOLD_SHOW_TASK_TITLES;
        this.setState({ showTitle: shouldShowTitles });

        const shouldShowIcons = latitudeDelta < CONST.THRESHOLD_SHOW_TASK_ICONS && longitudeDelta < CONST.THRESHOLD_SHOW_TASK_ICONS;
        this.setState({ showIcon: shouldShowIcons });
    };

    render() {
        const { mapRegion, markerCoords, showTitle, showIcon } = this.state;
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
                    // show title + icon at nearly location, else hide icon or hide all when zoom out further
                    markerCoords && markerCoords.map(markerCoord => (
                        <Marker key={markerCoord.id} coordinate={markerCoord.location}>
                            {showIcon && (
                                <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                                    {markerCoord.icon}
                                    {showTitle && (
                                        <View style={[styles.task_label_container, { ...markerCoord.container_style }]}>
                                            <Text style={styles.task_label}>
                                                {markerCoord.title}
                                            </Text>
                                        </View>
                                    )}
                                </TouchableOpacity>
                            )}
                        </Marker>
                    ))
                }
            </MapView>
        );
    }
}

export default MapComponent;
