import { Dimensions, PixelRatio } from 'react-native';

// Color
export const HEADING2_COLOR = "#0A7674";
export const NAVIGATION_COLOR = "#28A2B2";
export const BACKGROUND_COLOR = "#FFF";
export const FEATURE_COLOR = '#78D9D8';
export const FEATURE_TEXT_COLOR = '#206F79';

// Responsive size
export const STANDARD_SCREEN = [390, 844];
export const pixelRatio = PixelRatio.get();
export const TRUTH_SCREEN = [Dimensions.get('window').width, Dimensions.get('window').height];

export const responsiveSize = (standardSize, standardScreenSize=STANDARD_SCREEN[1], truthScreenSize=TRUTH_SCREEN[1]) => {
    return Math.round(truthScreenSize * standardSize / standardScreenSize);
};

// export const responsiveFontSize = (size) => {
//     const factor = TRUTH_SCREEN[0] < STANDARD_SCREEN[0] ? 0.8 : STANDARD_SCREEN[0] < 780 ? 2 : 2.5;
//     return Math.round((size * factor) / pixelRatio);
// }
