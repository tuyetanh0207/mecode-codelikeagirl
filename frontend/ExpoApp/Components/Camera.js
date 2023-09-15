import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
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
    const [currentImage, setCurrentImage] = useState(null);

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
                // MediaLibrary.createAssetAsync(photo.uri);
                setOnCamera(false);
                setIsLoading(false);
                setCurrentImage(photo.uri);
            }
            catch (e) {
                console.log(e);
            }
        }
    };

    function SmallCapturedImages() {
        return (
            <View
                style={CameraStyles.imageList}>
                <ScrollView horizontal style={{ width: CONST.SCROLL_VIEW_WIDTH }}>
                    {capturedImages.map((image, index) => (
                        <TouchableOpacity
                            onPress={() => setCurrentImage(image)}
                            key={index}
                        >
                            <Image
                                source={{ uri: image }}
                                style={CameraStyles.previewImage}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TouchableOpacity
                    onPress={() => { setOnCamera(true); }}
                    style={[CameraStyles.previewImage, { alignItems: 'center', justifyContent: 'center' }]}
                >
                    <Iconify icon="mingcute:add-line" size={CONST.responsiveHeight(46)} color={CONST.FEATURE_TEXT_COLOR} />
                    <Text style={CameraStyles.textAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={CameraStyles.container}>
            <View style={CameraStyles.header}>

                {
                    onCamera ?
                        <TouchableOpacity onPress={() => setOnCamera(false)}>
                            <Iconify icon="octicon:x-24" size={CONST.responsiveHeight(40)} color={CONST.FEATURE_TEXT_COLOR} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setOnCamera(true)}>
                            <Iconify icon="ic:round-arrow-back-ios" size={CONST.responsiveHeight(40)} color={CONST.FEATURE_TEXT_COLOR} />
                        </TouchableOpacity>
                }


                <Text style={styles.subtitle}>Create post</Text>

                <TouchableOpacity>
                    {
                        !onCamera ?
                            <View style={CameraStyles.doneButton}>
                                <Text style={CameraStyles.doneText}>Done</Text>
                            </View>
                            :
                            <View style={{ width: 30, height: 30 }}>

                            </View>
                    }

                </TouchableOpacity>
            </View>

            <View>
                {onCamera ?
                    <Camera
                        ref={cameraRef}
                        type={type}
                        style={CameraStyles.camera}
                    />
                    :
                    <Image source={{ uri: currentImage }} style={CameraStyles.camera} />
                }
            </View>

            {
                !onCamera ?
                    <SmallCapturedImages />
                    :
                    capturedImages.length ?
                        <View style={CameraStyles.controler2}>
                            <TouchableOpacity onPress={() => { setOnCamera(false); }}>
                                {capturedImages.length ?
                                    <Iconify icon="bi:images" size={CONST.responsiveHeight(45)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
                                    : null
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={takePhoto}>
                                {isLoading ? (
                                    <ActivityIndicator size="large" color={CONST.DARK_GREEN_COLOR} />
                                ) :
                                    <Iconify icon="carbon:circle-filled" size={CONST.responsiveHeight(80)} color={CONST.DARK_GREEN_COLOR} />
                                }
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={CameraStyles.flipCamera}
                                onPress={toggleCameraType}
                            >
                                <Iconify icon="uis:refresh" size={CONST.responsiveHeight(45)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
                            </TouchableOpacity>
                        </View>
                        :
                        <View
                            style={CameraStyles.controler}>
                            <TouchableOpacity onPress={takePhoto}>
                                {isLoading ? (
                                    <ActivityIndicator size="large" color={CONST.DARK_GREEN_COLOR} />
                                ) :
                                    <Iconify icon="carbon:circle-filled" size={CONST.responsiveHeight(80)} color={CONST.DARK_GREEN_COLOR} />
                                }
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={CameraStyles.flipCamera}
                                onPress={toggleCameraType}
                            >
                                <Iconify icon="uis:refresh" size={CONST.responsiveHeight(45)} color={CONST.NAVIGATION_ACTIVE_COLOR} />
                            </TouchableOpacity>
                        </View>
            }
        </View >
    );
}

const CameraStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'left',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.03,
        marginTop: CONST.TRUTH_SCREEN[1] * 0.06,
        alignItems: 'center',
    },
    header2: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.03,
        marginTop: CONST.TRUTH_SCREEN[1] * 0.06,
        alignItems: 'center',
    },
    camera: {
        width: CONST.TRUTH_SCREEN[0],
        height: CONST.TRUTH_SCREEN[1] * 0.7,
        marginVertical: CONST.TRUTH_SCREEN[1] * 0.02,
    },
    controler: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        alignItems: 'center',
        marginLeft: CONST.TRUTH_SCREEN[0] * 0.5 - CONST.responsiveHeight(40)
    },
    controler2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        alignItems: 'center',
        marginLeft: CONST.responsiveWidth(30),
    },
    flipCamera: {
        marginRight: CONST.TRUTH_SCREEN[0] * 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        alignItems: 'center',
    },
    textAdd: {
        fontFamily: 'Inter-Medium',
        fontSize: CONST.responsiveHeight(16),
        lineHeight: CONST.responsiveHeight(20),
        letterSpacing: 0,
        textAlign: 'center',
        color: CONST.FEATURE_TEXT_COLOR,
    },
    previewImage: {
        width: CONST.responsiveHeight(60),
        height: CONST.responsiveHeight(60),
        marginRight: CONST.responsiveHeight(5),
    },
    imageList: {
        height: CONST.responsiveHeight(60),
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        flexDirection: 'row',
        paddingHorizontal: CONST.responsiveHeight(15),
    },
    doneButton: {
        width: CONST.responsiveWidth(60),
        height: CONST.responsiveHeight(44),
        padding: CONST.responsiveHeight(10),
        elevation: 4,
        // paddingHorizontal: CONST.responsiveWidth(14),
        borderRadius: CONST.responsiveHeight(16),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    doneText: {
        fontFamily: 'Inter-Medium',
        fontSize: CONST.responsiveHeight(20),
        lineHeight: CONST.responsiveHeight(24),
        letterSpacing: 0,
        textAlign: 'left',
        color: CONST.FEATURE_TEXT_COLOR,
    },
});