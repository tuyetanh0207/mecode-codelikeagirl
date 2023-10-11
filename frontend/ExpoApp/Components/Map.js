import React, { useEffect, useContext, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from '../Utils/styles';
import { UserLocationContext } from '../Contexts/UserLocation';
import * as CONST from '../Utils/constants';
import { View, Text, TouchableOpacity } from 'react-native';
import { activity } from '../api/activity';
import { useNavigation } from '@react-navigation/native';

const MapComponent = ({ currentTask }) => {
    const { location, setLocation } = useContext(UserLocationContext);
    const [mapRegion, setMapRegion] = useState(null);
    const [markerCoords, setMarkerCoords] = useState([]);
    const [showTitle, setShowTitle] = useState(true);
    const [showIcon, setShowIcon] = useState(true);
    const [currentMarkerCoord, setCurrentMarkerCoord] = useState(null);
    const navigation = useNavigation();

    const startLocationTracking = async () => {
        await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.Balanced,
                distanceInterval: CONST.THRESOLD_LOCATION_DISTANCE,
            },
            async (newLocation) => {
                const newLatitude = newLocation.coords.latitude;
                const newLongitude = newLocation.coords.longitude;

                // Logic to update map region and fetch new task list
                const newMapRegion = {
                    latitude: newLatitude,
                    longitude: newLongitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                };

                const newTaskList = await activity(newLatitude, newLongitude);
                const contraintTaskList = newTaskList.data.filter(task => task.isContraint);

                const updatedMarkerCoords = contraintTaskList.map(task => ({
                    id: task._id,
                    location: {
                        latitude: task.latitude,
                        longitude: task.longitude,
                    },
                    icon: CONST.getIconByTitle(task.nameTask, CONST.boldIconMapping),
                    title: task.nameTask,
                    taskDetailIcon: CONST.getIconByTitle(task.nameTask, CONST.normalIconMapping_60),
                    shortAddr: task.shortAddr,
                    addr: task.address,
                    dist: task.distance,
                    hint: task.hint,
                    idCampaign: task.idCampaign,
                    nameCampaign: task.nameCampaign,
                    isContraint: task.isContraint,
                    luckywheelID: task.luckywheelID,
                }));

                setMapRegion(newMapRegion);
                setMarkerCoords(updatedMarkerCoords);
            }
        );
    };
    // current joinning task
    const getCurrentMarkerCoord = currentTask => ({
        // id: currentTask._id,
        location: {
            latitude: currentTask.latitude,
            longitude: currentTask.longitude,
        },
        icon: CONST.getIconByTitle(currentTask.nameTask, CONST.boldIconMapping),
        nameTask: currentTask.nameTask,
        // container_style: CONST.getTaskContainerSizeByTitle(currentTask.nameTask),
    });

    useEffect(() => {
        const fetchData = async () => {
            // Set user location for map
            if (location) {
                setMapRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                });
            }

            // Call startLocationTracking function
            startLocationTracking();
        };

        fetchData();
        if (currentTask)
            setCurrentMarkerCoord(getCurrentMarkerCoord(currentTask));
    }, [currentTask]);

    const viewTaskDetails = (markerCoord) => {
        navigation.navigate("TaskDetails", {
            name: markerCoord.title,
            icon: markerCoord.taskDetailIcon,
            shortAddr: markerCoord.shortAddr,
            addr: markerCoord.addr,
            dist: markerCoord.dist,
            hint: markerCoord.hint,
            taskId: markerCoord.id,
            idCampaign: markerCoord.idCampaign,
            nameCampaign: markerCoord.nameCampaign,
            isContraint: markerCoord.isContraint,
            luckywheelID: markerCoord.luckywheelID,
            latitude: markerCoord.location.latitude,
            longitude: markerCoord.location.longitude,
        });
    };

    const onRegionChangeComplete = (newRegion) => {
        const { latitudeDelta, longitudeDelta } = newRegion;
        const shouldShowTitles = latitudeDelta < CONST.THRESHOLD_SHOW_TASK_TITLES && longitudeDelta < CONST.THRESHOLD_SHOW_TASK_TITLES;
        setShowTitle(shouldShowTitles);

        const shouldShowIcons = latitudeDelta < CONST.THRESHOLD_SHOW_TASK_ICONS && longitudeDelta < CONST.THRESHOLD_SHOW_TASK_ICONS;
        setShowIcon(shouldShowIcons);
    };

    return (
        <MapView
            style={[styles.map, { position: 'absolute', zIndex: 0 }]}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={!currentTask ? mapRegion : {
                ...mapRegion,
                latitude: currentTask.latitude,
                longitude: currentTask.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
            scrollEnabled={true}
            onRegionChangeComplete={onRegionChangeComplete}
        >
            {markerCoords && markerCoords.map(markerCoord => (
                <Marker
                    key={markerCoord.id}
                    coordinate={markerCoord.location}
                    onPress={() => viewTaskDetails(markerCoord)}
                >
                    {showIcon && (
                        <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                            {markerCoord.icon}
                            {showTitle && (
                                <View style={styles.task_label_container} pointerEvents="none">
                                    <Text style={styles.task_label} numberOfLines={1} ellipsizeMode="tail">
                                        {markerCoord.title}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                </Marker>
            ))}
            {
                currentTask && currentMarkerCoord ? (
                    <Marker key={currentMarkerCoord.id} coordinate={currentMarkerCoord.location}>
                        <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                            {CONST.PIN_CURRENT_ICON}
                            {currentMarkerCoord.icon}
                            <View style={styles.task_label_container}>
                                <Text
                                    style={styles.task_label}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {currentMarkerCoord.nameTask}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Marker>
                ) : null
            }
        </MapView>
    );
}

export default MapComponent;
