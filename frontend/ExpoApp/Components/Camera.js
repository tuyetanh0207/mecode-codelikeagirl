import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as CONST from '../Utils/constants';
import { Iconify } from 'react-native-iconify';
import styles from '../Utils/styles';
import { AppButton } from './JoinBtn';
import { useNavigation } from '@react-navigation/native';
export default function CameraComponent(props) {
    const {setIsTakingPhoto, setPhotos, photos} = props
    const [capturedImages, setCapturedImages] = useState(photos);
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef(null);
    const [onCamera, setOnCamera] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const toggleCameraType = () => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
    };
    const navigation = useNavigation();
    const handlePressPostBtn = () => {
        setIsTakingPhoto(false)
        console.log(capturedImages)
        setPhotos(capturedImages)
    };
    const takePhoto = async () => {
        if (cameraRef) {
            try {
                // console.log('start take pic');
                setIsLoading(true);
                const photo = await cameraRef.current.takePictureAsync({
                    base64: true,
                  });
                // console.log('end take pic');
                setCapturedImages([...capturedImages, photo.uri]);
                // MediaLibrary.createAssetAsync(photo.uri);
                setOnCamera(false);
                setIsLoading(false);
                setCurrentImage(photo.uri);
               console.log('uri: ', photo.uri)
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
                        <TouchableOpacity onPress={() => setCurrentImage(image)}>
                            <Image
                                source={{ uri: image }}
                                style={CameraStyles.previewImage}
                                key={index}
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
                <TouchableOpacity>
                    <Iconify icon="octicon:x-24" size={CONST.responsiveHeight(42)} color={CONST.FEATURE_TEXT_COLOR} />
                </TouchableOpacity>

                <Text style={styles.subtitle}>Create post</Text>
                {onCamera ?
                    <TouchableOpacity>
                        <Iconify icon="solar:videocamera-record-outline" size={CONST.responsiveHeight(42)} color={CONST.FEATURE_TEXT_COLOR} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handlePressPostBtn}>
                        <AppButton
                            title="Post"
                            backgroundColor={CONST.BACKGROUND_COLOR}
                            color={CONST.FEATURE_TEXT_COLOR}
                            size="sm"
                        />
                    </TouchableOpacity>
                }
                
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
                onCamera ?
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
                    :
                    <SmallCapturedImages />
            }
        </View>
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
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.04,
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

});