import { StyleSheet, Text, View } from 'react-native';
import * as CONST from './constants';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'left',
    },
    textH2: {
        color: CONST.HEADING2_COLOR,
        fontFamily: 'Inter-Black',
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 39,
        letterSpacing: -0.005,
        textAlign: 'left',
    },
    feature: {
        borderRadius: CONST.responsiveSize(16),
        backgroundColor: CONST.FEATURE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: CONST.responsiveSize(98),
        height: CONST.responsiveSize(100)
    },
    featureText: {
        color: CONST.FEATURE_TEXT_COLOR,
        fontFamily: 'Inter-Light',
        marginTop: 2,
        textAlign: 'center',
        fontSize: CONST.responsiveSize(16)
    },
});
export default styles;  