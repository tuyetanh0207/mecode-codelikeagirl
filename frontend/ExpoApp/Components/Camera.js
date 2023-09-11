import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as CONST from '../Utils/constants';
import { Iconify } from 'react-native-iconify';
import styles from '../Utils/styles';

export default function CameraComponent() {
    const [newImage, setNewImage] = useState(null);
    const [capturedImages, setCapturedImages] = useState([]);
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef(null);

    const toggleCameraType = () => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
    };

    const takePhoto = async () => {
        if (cameraRef) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setNewImage(photo.uri);
                await MediaLibrary.createAssetAsync(newImage);
                capturedImages.push(newImage.uri);
                setCapturedImages(capturedImages);
                // setNewImage(null);
            }
            catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
            <View style={[styles.featureRow, { marginTop: CONST.TRUTH_SCREEN[1] * 0.06, alignItems: 'center', }]}>
                <TouchableOpacity>
                    <Iconify icon="octicon:x-24" size={CONST.responsiveHeight(42)} color={CONST.FEATURE_TEXT_COLOR} />
                </TouchableOpacity>

                <Text style={styles.subtitle}>Create post</Text>

                <TouchableOpacity>
                    <Iconify icon="solar:videocamera-record-outline" size={CONST.responsiveHeight(42)} color={CONST.FEATURE_TEXT_COLOR} />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    width: CONST.TRUTH_SCREEN[0],
                    height: CONST.TRUTH_SCREEN[1] * 0.7,
                    marginVertical: CONST.PRIMARY_VERTICAL_MARGIN,
                }}>
                {!newImage ?
                    <Camera
                        ref={cameraRef}
                        type={type}
                        style={styles.camera}
                    >
                    </Camera>
                    :
                    <Image source={{ uri: newImage }} style={styles.camera} />
                }
            </View>

            {
                newImage ?
                    <View
                        style={{
                            width: 'auto',
                            height: CONST.responsiveHeight(60),
                            marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
                        }}>
                        {capturedImages.map((image, index) => (
                            <Image source={{ uri: image }}
                                style={{ width: CONST.responsiveHeight(60), height: CONST.responsiveHeight(60), }}
                                key={index}
                            />
                        ))}
                    </View>
                    :
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
                            alignItems: 'center',
                            marginLeft: CONST.TRUTH_SCREEN[0] * 0.5 - CONST.responsiveHeight(40)
                        }}>
                        <TouchableOpacity onPress={takePhoto}>
                            <Iconify icon="carbon:circle-filled" size={CONST.responsiveHeight(80)} color={CONST.DARK_GREEN_COLOR} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginRight: CONST.TRUTH_SCREEN[0] * 0.1 }}
                            onPress={toggleCameraType}
                        >
                            <Iconify icon="uis:refresh" size={CONST.responsiveHeight(45)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
                        </TouchableOpacity>
                    </View>
            }

        </View>
    );
}