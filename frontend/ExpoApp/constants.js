import {Dimensions, PixelRatio } from 'react-native';

// Color
export const HEADING2_COLOR = "#0A7674";
export const NAVIGATION_COLOR = "#28A2B2";
export const BACKGROUND_COLOR = "#FFF";
export const FEATURE_COLOR = '#78D9D8';
export const FEATURE_TEXT_COLOR = '#206F79';

// Responsive size
export const pixelRatio = PixelRatio.get();
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const responsiveSize = (size) => {
    const factor = screenWidth < 375 ? 0.8 : screenWidth < 768 ? 1 : 1.25;
    return Math.round((size * factor) / pixelRatio);
};
