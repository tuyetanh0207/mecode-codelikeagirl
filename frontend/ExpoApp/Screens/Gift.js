import { React } from 'react';
import styles from '../Utils/styles';
import * as CONST from '../Utils/constants';
import { Iconify } from 'react-native-iconify';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import gifts from '../assets/images/gift.png';

export default function Gift({ navigation: { goBack }, route }) {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageBackground}
        >
            <View style={GiftStyles.container}>
                <View style={GiftStyles.header}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Iconify icon="ic:round-arrow-back-ios" size={CONST.responsiveHeight(32)} color={CONST.FEATURE_TEXT_COLOR} />
                    </TouchableOpacity>
                    <Text style={GiftStyles.title}>Lucky gifts</Text>
                </View>
                <View style={GiftStyles.image}>
                    <Image source={gifts} style={{ resizeMode: 'contain', flex: 1}} />
                </View>
            </View>
        </ImageBackground >

    );
}

export const GiftStyles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: "4%",
    },
    title: {
        color: CONST.HEADING2_COLOR,
        fontFamily: 'Inter-Bold',
        fontSize: CONST.responsiveHeight(32),
        lineHeight: CONST.responsiveHeight(39),
        letterSpacing: -0.005,
        textAlign: 'center',
        flex: 1,
    },
    image: {
        width: "90%",
        height: "88%",
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
    }
});