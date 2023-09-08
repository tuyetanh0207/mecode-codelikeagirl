// Color
export const HEADING2_COLOR = "#0A7674";
export const NAVIGATION_ACTIVE_COLOR = "#28A2B2";
export const BACKGROUND_COLOR = "#FFF";
export const FEATURE_COLOR = '#78D9D8';
export const FEATURE_TEXT_COLOR = '#206F79';
export const TASK_ICON_COLOR = 'rgba(14, 167, 165, 1)';
export const TASK_LABEL_COLOR = 'rgba(14, 167, 165, 0.75)';
export const SHADOW_BLACK_COLOR = 'rgba(11, 37, 40, 0.55)';
export const DARK_PINK_COLOR = '#FD3D6C';
export const LIGHT_PINK_COLOR = '#FEE6EC';

// Responsive size
import { Dimensions } from 'react-native';
export const STANDARD_SCREEN = [400, 870];
export const TRUTH_SCREEN = [Dimensions.get('window').width, Dimensions.get('window').height];
export const responsiveHeight = (size) => {
    return Math.round(TRUTH_SCREEN[1] * size / STANDARD_SCREEN[1]);
};
export const responsiveWidth = (size) => {
    return Math.round(TRUTH_SCREEN[0] * size / STANDARD_SCREEN[0]);
};
export const PRIMARY_VERTICAL_MARGIN = responsiveHeight(12);

// Icon
import { Iconify } from 'react-native-iconify';
export const BOLD_TRASH_ICON = <Iconify icon="fluent:bin-recycle-24-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BOTTLE_ICON = <Iconify icon="solar:bottle-bold-duotone" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BAG_ICON = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_TREE_ICON = <Iconify icon="ri:seedling-fill" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;

export const boldIconMapping = {
    'Collect trash': BOLD_TRASH_ICON,
    'Bring your own bottle': BOLD_BOTTLE_ICON,
    'Bring your own bag': BOLD_BAG_ICON,
    'Plan a tree': BOLD_TREE_ICON,
};

// Get the suitable task icon corresponding to its title
export const getIconByTitle = (title = 'Collect trash', mappingType = boldIconMapping) => {
    return mappingType[title] || null;
}

// export const regularIconMapping = {....}; (Tuyet Anh add more icons here...)

// Map
export const THRESHOLD_SHOW_TASK_ICONS = 0.1;
export const THRESHOLD_SHOW_TASK_TITLES = 0.05;
export const THRESOLD_LOCATION_DISTANCE = 1;

// Task container size on the map
export const taskContainerSizeMapping = {
    'Collect trash': {
        width: responsiveWidth(110),
        height: responsiveHeight(23),
    },
    'Bring your own bottle': {
        width: responsiveWidth(195),
        height: responsiveHeight(30),
    },
    'Bring your own bag': {
        width: responsiveWidth(160),
        height: responsiveHeight(30),
    },
    'Plant a tree': {
        width: responsiveWidth(110),
        height: responsiveHeight(23),
    },
};

// Get the suitable task container size corresponding to its title
export const getTaskContainerSizeByTitle = (title) => {
    return taskContainerSizeMapping[title] || null;
}
