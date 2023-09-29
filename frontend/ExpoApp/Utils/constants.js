// MongoDB localhost
export const MONGO_DB_HOST = 'mongodb://localhost:27017';

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
export const DARK_GREEN_COLOR = '#0B2528';

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
export const SCROLL_VIEW_WIDTH = TRUTH_SCREEN[0] * 0.8;

// Icon
import { Iconify } from 'react-native-iconify';
export const BOLD_TRASH_ICON = <Iconify icon="fluent:bin-recycle-24-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BOTTLE_ICON = <Iconify icon="solar:bottle-bold-duotone" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BAG_ICON = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_TREE_ICON = <Iconify icon="ri:seedling-fill" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;

export const BOLD_HEADING2_COLOR_TRASH_ICON = <Iconify icon="fluent:bin-recycle-24-filled" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BOTTLE_ICON = <Iconify icon="solar:bottle-bold-duotone" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BAG_ICON = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TREE_ICON = <Iconify icon="ri:seedling-fill" size={responsiveHeight(36)} color={HEADING2_COLOR} />;

export const BOLD_HEADING2_COLOR_TRASH_ICON_44 = <Iconify icon="fluent:bin-recycle-24-filled" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BOTTLE_ICON_44 = <Iconify icon="solar:bottle-bold-duotone" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BAG_ICON_44 = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TREE_ICON_44 = <Iconify icon="ri:seedling-fill" size={responsiveHeight(54)} color={HEADING2_COLOR} />;

export const FEATURE_TEXT_TRASH_ICON_60 = <Iconify icon="fluent:bin-recycle-20-regular" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_BOTTLE_ICON_60 = <Iconify icon="solar:bottle-linear" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_BAG_ICON_60 = <Iconify icon="solar:bag-4-linear" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_TREE_ICON_60 = <Iconify icon="solar:bag-4-linear" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const UNKNOWN_ICON_60 = <Iconify icon="carbon:unknown" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;

export const boldIconMapping = {
    'Collect trash': BOLD_TRASH_ICON,
    'Bring your own bottle': BOLD_BOTTLE_ICON,
    'Bring your own bag': BOLD_BAG_ICON,
    'Plant a tree': BOLD_TREE_ICON,
};
export const boldHeading2TextColorIconMapping_44 = {
    'Collect trash': BOLD_HEADING2_COLOR_TRASH_ICON_44,
    'Bring your own bottle': BOLD_HEADING2_COLOR_BOTTLE_ICON_44,
    'Bring your own bag': BOLD_HEADING2_COLOR_BAG_ICON_44,
    'Plan a tree': BOLD_HEADING2_COLOR_TREE_ICON_44,
};
export const boldHeading2TextColorIconMapping = {
    'Collect trash': BOLD_HEADING2_COLOR_TRASH_ICON,
    'Bring your own bottle': BOLD_HEADING2_COLOR_BOTTLE_ICON,
    'Bring your own bag': BOLD_HEADING2_COLOR_BAG_ICON,
    'Plan a tree': BOLD_HEADING2_COLOR_TREE_ICON,
};
export const normalIconMapping_60 = {
    'Collect trash': FEATURE_TEXT_TRASH_ICON_60,
    'Bring your own bottle': FEATURE_TEXT_BOTTLE_ICON_60,
    'Bring your own bag': FEATURE_TEXT_BAG_ICON_60,
    'Plant a tree': FEATURE_TEXT_TREE_ICON_60,
};
export const VIDEO_RECORD_BUTTON = require('../assets/images/record.png');

// Get the suitable task icon corresponding to its title
export const getIconByTitle = (title = 'Collect trash', mappingType = boldIconMapping) => {
    // console.log(title, ': title');
    // console.log(mappingType[title], ': mapping type');
    return mappingType[title] || UNKNOWN_ICON_60;
}

// Map
export const THRESHOLD_SHOW_TASK_ICONS = 0.1;
export const THRESHOLD_SHOW_TASK_TITLES = 0.05;
export const THRESOLD_LOCATION_DISTANCE = 10;

// Task container size on the map
export const taskContainerSizeMapping = {
    'Collect trash': {
        width: responsiveWidth(110),
        height: responsiveHeight(25),
    },
    'Bring your own bottle': {
        width: responsiveWidth(155),
        height: responsiveHeight(30),
    },
    'Bring your own bag': {
        width: responsiveWidth(155),
        height: responsiveHeight(30),
    },
    'Plant a tree': {
        width: responsiveWidth(110),
        height: responsiveHeight(25),
    },
};

// Get the suitable task container size corresponding to its title
export const getTaskContainerSizeByTitle = (title) => {
    return taskContainerSizeMapping[title] || 50;
}
