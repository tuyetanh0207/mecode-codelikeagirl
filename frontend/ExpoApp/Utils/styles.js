import { StyleSheet } from 'react-native';
import * as CONST from './constants';

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
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        color: CONST.HEADING2_COLOR,
        fontFamily: 'Inter-Bold',
        fontSize: CONST.responsiveSize(32),
        lineHeight: CONST.responsiveSize(39),
        letterSpacing: -0.005,
        textAlign: 'left',
        marginLeft: 0.05 * CONST.TRUTH_SCREEN[0],
    },
    suggestImage: {
        resizeMode: 'cover'
    },
    suggestImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    suggestSwiper: {
        width: CONST.TRUTH_SCREEN[0] * 0.9,
        height: CONST.TRUTH_SCREEN[1] * 0.25,
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        borderRadius: CONST.responsiveSize(30),
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        // marginTop: CONST.responsiveSize(2),
        textAlign: 'center',
        fontSize: CONST.responsiveSize(12),
    },
    featureIcon: {
        width: CONST.responsiveSize(36),
        height: CONST.responsiveSize(15.61),
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.1
    },
    homeMap: {
        width: '100%',
        height: '100%',
    },
    homeMapContainer: {
        width: CONST.TRUTH_SCREEN[0] * 0.9,
        height: CONST.TRUTH_SCREEN[1] * 0.3,
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        borderRadius: CONST.responsiveSize(30),
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});
export default styles;  