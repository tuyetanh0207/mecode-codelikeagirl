import { StyleSheet } from 'react-native';
import * as CONST from './constants';
// import * as Font from 'expo-font';

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
        fontSize: CONST.responsiveSize(32),
        fontWeight: '700',
        lineHeight: CONST.responsiveSize(39),
        letterSpacing: -0.005,
        textAlign: 'left',
        marginLeft: CONST.responsiveSize(28),
    },
    feature: {
        borderRadius: CONST.responsiveSize(16),
        backgroundColor: CONST.FEATURE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: CONST.responsiveSize(59.2, CONST.STANDARD_SCREEN[0], CONST.TRUTH_SCREEN[0]),
        height: CONST.responsiveSize(62.06, CONST.STANDARD_SCREEN[1], CONST.TRUTH_SCREEN[1]),
    },
    featureText: {
        color: CONST.FEATURE_TEXT_COLOR,
        fontFamily: 'Inter-Regular',
        marginTop: CONST.responsiveSize(2),
        textAlign: 'center',
        fontSize: CONST.responsiveSize(8),
    },
    image: {
        width: CONST.responsiveSize(36),
        height: CONST.responsiveSize(15.61),
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: CONST.responsiveSize(12),
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.1
    }
});
export default styles;  