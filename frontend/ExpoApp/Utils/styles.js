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
        fontSize: CONST.responsiveHeight(32),
        lineHeight: CONST.responsiveHeight(39),
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
        borderRadius: CONST.responsiveHeight(30),
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    feature: {
        borderRadius: CONST.responsiveHeight(18),
        backgroundColor: CONST.FEATURE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: CONST.responsiveWidth(60),
        height: CONST.responsiveHeight(65),
    },
    featureText: {
        color: CONST.FEATURE_TEXT_COLOR,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        fontSize: CONST.responsiveHeight(12),
    },
    featureIcon: {
        width: CONST.responsiveWidth(36),
        height: CONST.responsiveHeight(15.61),
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: CONST.PRIMARY_VERTICAL_MARGIN,
        paddingHorizontal: CONST.TRUTH_SCREEN[0] * 0.08
    },
    map: {
        width: '100%',
        height: '100%',
    },
    homeMapContainer: {
        width: CONST.TRUTH_SCREEN[0] * 0.9,
        height: CONST.TRUTH_SCREEN[0] * 0.6,
        marginTop: CONST.responsiveHeight(20),
        borderRadius: CONST.responsiveHeight(30),
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    mainMapContainer: {
        width: CONST.TRUTH_SCREEN[0],
        height: CONST.TRUTH_SCREEN[1],
        marginTop: CONST.TRUTH_SCREEN[1] * 0.03,
    },
    taskListButton: {
        width: CONST.responsiveHeight(162),
        height: 44,
        top: 652,
        left: 345,
        padding: 10,
        borderRadius: 16,
        borderWidth: 1,
    }
});
export default styles;  