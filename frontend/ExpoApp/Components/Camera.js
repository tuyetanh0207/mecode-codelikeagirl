import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as CONST from '../Utils/constants';
import { Iconify } from 'react-native-iconify';
import styles from '../Utils/styles';

export default function CameraComponent() {
    const [capturedImages, setCapturedImages] = useState([]);
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef(null);
    const [onCamera, setOnCamera] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [viewImagesFull, setViewImagesFull] = useState(false);

    const toggleCameraType = () => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
    };

    const takePhoto = async () => {
        if (cameraRef) {
            try {
                // console.log('start take pic');
                setIsLoading(true);
                const photo = await cameraRef.current.takePictureAsync();
                // console.log('end take pic');
                setCapturedImages([...capturedImages, photo.uri]);
                MediaLibrary.createAssetAsync(photo.uri);
                setOnCamera(false);
                setIsLoading(false);
            }
            catch (e) {
                console.log(e);
            }
        }
    };

    function FullCapturedImages() {
        return (
            <ScrollView horizontal>
                {capturedImages.map((image, index) => (
                    <Image
                        source={{ uri: image }}
                        style={styles.camera}
                        key={index}
                    />
                ))}
            </ScrollView>
        );
    };

    function SmallCapturedImages() {
        return (
            <View
                style={styles.viewImages}>
                <ScrollView horizontal style={{ width: CONST.SCROLL_VIEW_WIDTH }}>
                    {capturedImages.map((image, index) => (
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                            key={index}
                            onPress={() => setViewImage(image)}
                        />
                    ))}
                </ScrollView>

                <TouchableOpacity
                    onPress={() => { setOnCamera(true); }}
                    style={[styles.image, { alignItems: 'center', justifyContent: 'center' }]}
                >
                    <Iconify icon="mingcute:add-line" size={CONST.responsiveHeight(46)} color={CONST.FEATURE_TEXT_COLOR} />
                    <Text style={styles.textAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        );
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
                {onCamera ?
                    <Camera
                        ref={cameraRef}
                        type={type}
                        style={styles.camera}
                    />
                    :
                    !viewImagesFull ?
                        <FullCapturedImages />
                        : <Image source={{ uri: capturedImages[capturedImages.length - 1] }} style={styles.camera} />

                }
            </View>

            {
                onCamera ?
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
                            alignItems: 'center',
                            marginLeft: CONST.TRUTH_SCREEN[0] * 0.5 - CONST.responsiveHeight(40)
                        }}>
                        <TouchableOpacity onPress={takePhoto}>
                            {isLoading ? (
                                <ActivityIndicator size="large" color={CONST.DARK_GREEN_COLOR} />
                            ) :
                                <Iconify icon="carbon:circle-filled" size={CONST.responsiveHeight(80)} color={CONST.DARK_GREEN_COLOR} />
                            }
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginRight: CONST.TRUTH_SCREEN[0] * 0.1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
                                alignItems: 'center',
                            }}
                            onPress={toggleCameraType}
                        >
                            <Iconify icon="uis:refresh" size={CONST.responsiveHeight(45)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
                        </TouchableOpacity>
                    </View>
                    :
                    <SmallCapturedImages />
            }

        </View>
    );
}