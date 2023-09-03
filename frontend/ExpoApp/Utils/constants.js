import { Dimensions } from 'react-native';

// Color
export const HEADING2_COLOR = "#0A7674";
export const NAVIGATION_ACTIVE_COLOR = "#28A2B2";
export const BACKGROUND_COLOR = "#FFF";
export const FEATURE_COLOR = '#78D9D8';
export const FEATURE_TEXT_COLOR = '#206F79';
export const TASK_ICON_COLOR = 'rgba(14, 167, 165, 1)';
export const TASK_LABEL_COLOR = 'rgba(14, 167, 165, 0.75)';
export const SHADOW_BLACK_COLOR = 'rgba(11, 37, 40, 0.55)';

// Responsive size
export const STANDARD_SCREEN = [400, 870];
export const TRUTH_SCREEN = [Dimensions.get('window').width, Dimensions.get('window').height];
export const responsiveHeight = (size) => {
    return Math.round(TRUTH_SCREEN[1] * size / STANDARD_SCREEN[1]);
};
export const responsiveWidth = (size) => {
    return Math.round(TRUTH_SCREEN[0] * size / STANDARD_SCREEN[0]);
};
export const PRIMARY_VERTICAL_MARGIN = responsiveHeight(12);

// Location
export const LOCATION_DISTANCE_THRESOLD = 1; //  meter