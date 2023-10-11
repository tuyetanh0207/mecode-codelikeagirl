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
export const MEDIUM_PINK_COLOR = '#FE7899';
export const LIGHT_PINK_COLOR = '#FEE6EC';
export const DARK_GREEN_COLOR = '#0B2528';
export const GREENSTEP_TEXT_COLOR = '#0EA7A5';
export const YELLOW_COLOR = '#FCD53F';

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
export const BOTTOM_BAR_HEIGHT = responsiveHeight(60);

// Icon
import { Iconify } from 'react-native-iconify';
export const PIN_CURRENT_ICON = <Iconify icon="solar:map-point-wave-bold" size={responsiveHeight(20)} color={DARK_PINK_COLOR} />;
export const BOLD_TRASH_ICON = <Iconify icon="fluent:bin-recycle-20-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BOTTLE_ICON = <Iconify icon="solar:bottle-bold" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BAG_ICON = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_TREE_ICON = <Iconify icon="ri:seedling-fill" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_SUN_ICON = <Iconify icon="heroicons:sun-solid" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_JOIN_ICON = <Iconify icon="fluent:people-star-20-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_FAN_ICON = <Iconify icon="mdi:fan-off" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BULB_ICON = <Iconify icon="fa6-solid:lightbulb" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_PAPER_ICON = <Iconify icon="mingcute:paper-fill" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BUS_ICON = <Iconify icon="ic:round-directions-bus-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_BIKE_ICON = <Iconify icon="material-symbols:directions-bike-rounded" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_FAUCET_ICON = <Iconify icon="fa6-solid:faucet-drip" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_WATER_ICON = <Iconify icon="ic:baseline-water-drop" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_COMPOST_ICON = <Iconify icon="heroicons:archive-box-solid" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_WASH_ICON = <Iconify icon="mdi:hand-wash" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_TRASH2_ICON = <Iconify icon="solar:trash-bin-trash-bold" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_PLASTIC_ICON = <Iconify icon="fluent:bin-recycle-full-20-filled" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_DONATE_ICON = <Iconify icon="ri:shirt-fill" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_2HAND_ICON = <Iconify icon="ion:shirt-sharp" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_CLOTH_ICON = <Iconify icon="fluent-emoji-high-contrast:clutch-bag" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_WATERING_ICON = <Iconify icon="mdi:watering-can" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;
export const BOLD_ELECTRIC_ICON = <Iconify icon="mdi:bus-electric" size={responsiveHeight(40)} color={TASK_ICON_COLOR} />;

export const BOLD_HEADING2_COLOR_TRASH_ICON = <Iconify icon="fluent:bin-recycle-20-filled" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BOTTLE_ICON = <Iconify icon="solar:bottle-bold" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BAG_ICON = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TREE_ICON = <Iconify icon="ri:seedling-fill" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_SUN_ICON = <Iconify icon="heroicons:sun-solid" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const UNKNOWN_ICON = <Iconify icon="carbon:unknown" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_JOIN_ICON = <Iconify icon="fluent:people-star-20-filled" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_FAN_ICON = <Iconify icon="fluent:mdi:fan-off" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BULB_ICON = <Iconify icon="fa6-solid:lightbulb" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_PAPER_ICON = <Iconify icon="mingcute:paper-fill" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BUS_ICON = <Iconify icon="ic:round-directions-bus-filled" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BIKE_ICON = <Iconify icon="material-symbols:directions-bike-rounded" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_FAUCET_ICON = <Iconify icon="fa6-solid:faucet-drip" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WATER_ICON = <Iconify icon="ic:baseline-water-drop" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_COMPOST_ICON = <Iconify icon="heroicons:archive-box-solid" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WASH_ICON = <Iconify icon="mdi:hand-wash" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TRASH2_ICON = <Iconify icon="solar:trash-bin-trash-bold" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_PLASTIC_ICON = <Iconify icon="fluent:bin-recycle-full-20-filled" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_DONATE_ICON = <Iconify icon="ri:shirt-fill" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_2HAND_ICON = <Iconify icon="ion:shirt-sharp" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_CLOTH_ICON = <Iconify icon="fluent-emoji-high-contrast:clutch-bag" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WATERING_ICON = <Iconify icon="mdi:watering-can" size={responsiveHeight(36)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_ELECTRIC_ICON = <Iconify icon="mdi:bus-electric" size={responsiveHeight(36)} color={HEADING2_COLOR} />;

export const BOLD_HEADING2_COLOR_TRASH_ICON_54 = <Iconify icon="fluent:bin-recycle-20-filled" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BOTTLE_ICON_54 = <Iconify icon="solar:bottle-bold" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BAG_ICON_54 = <Iconify icon="solar:bag-4-bold" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TREE_ICON_54 = <Iconify icon="ri:seedling-fill" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_SUN_ICON_54 = <Iconify icon="heroicons:sun-solid" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_JOIN_ICON_54 = <Iconify icon="fluent:people-star-20-filled" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_FAN_ICON_54 = <Iconify icon="mdi:fan-off" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BULB_ICON_54 = <Iconify icon="fa6-solid:lightbulb" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_PAPER_ICON_54 = <Iconify icon="mingcute:paper-fill" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BUS_ICON_54 = <Iconify icon="ic:round-directions-bus-filled" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_BIKE_ICON_54 = <Iconify icon="material-symbols:directions-bike-rounded" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_FAUCET_ICON_54 = <Iconify icon="fa6-solid:faucet-drip" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WATER_ICON_54 = <Iconify icon="ic:baseline-water-drop" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_COMPOST_ICON_54 = <Iconify icon="heroicons:archive-box-solid" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WASH_ICON_54 = <Iconify icon="mdi:hand-wash" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_TRASH2_ICON_54 = <Iconify icon="solar:trash-bin-trash-bold" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_PLASTIC_ICON_54 = <Iconify icon="fluent:bin-recycle-full-20-filled" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_DONATE_ICON_54 = <Iconify icon="ri:shirt-fill" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_2HAND_ICON_54 = <Iconify icon="ion:shirt-sharp" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_CLOTH_ICON_54 = <Iconify icon="fluent-emoji-high-contrast:clutch-bag" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_WATERING_ICON_54 = <Iconify icon="mdi:watering-can" size={responsiveHeight(54)} color={HEADING2_COLOR} />;
export const BOLD_HEADING2_COLOR_ELECTRIC_ICON_54 = <Iconify icon="mdi:bus-electric" size={responsiveHeight(54)} color={HEADING2_COLOR} />;

export const FEATURE_TEXT_TRASH_ICON_60 = <Iconify icon="fluent:bin-recycle-20-regular" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_BOTTLE_ICON_60 = <Iconify icon="solar:bottle-linear" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_BAG_ICON_60 = <Iconify icon="solar:bag-4-linear" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_TREE_ICON_60 = <Iconify icon="ri:seedling-line" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_SUN_ICON_60 = <Iconify icon="heroicons:sun" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const UNKNOWN_ICON_60 = <Iconify icon="carbon:unknown" size={responsiveHeight(60)} color={FEATURE_TEXT_COLOR} />;
export const FEATURE_TEXT_JOIN_ICON_60 = <Iconify icon="fluent:people-star-20-regular" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_FAN_ICON_60 = <Iconify icon="material-symbols:mode-fan-outline" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_BULB_ICON_60 = <Iconify icon="fa6-regular:lightbulb" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_PAPER_ICON_60 = <Iconify icon="mingcute:paper-line" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_BUS_ICON_60 = <Iconify icon="ic:outline-directions-bus-filled" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_BIKE_ICON_60 = <Iconify icon="ph:bicycle-light" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_FAUCET_ICON_60 = <Iconify icon="fa6-solid:faucet" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_WATER_ICON_60 = <Iconify icon="ic:outline-water-drop" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_COMPOST_ICON_60 = <Iconify icon="heroicons:archive-box" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_WASH_ICON_60 = <Iconify icon="mdi:hand-wash-outline" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_TRASH2_ICON_60 = <Iconify icon="solar:trash-bin-trash-outline" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_PLASTIC_ICON_60 = <Iconify icon="fluent:bin-recycle-full-20-regular" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_DONATE_ICON_60 = <Iconify icon="ri:shirt-line" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_2HAND_ICON_60 = <Iconify icon="ion:shirt-sharp" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_CLOTH_ICON_60 = <Iconify icon="fluent-emoji-high-contrast:clutch-bag" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_WATERING_ICON_60 = <Iconify icon="mdi:watering-can-outline" size={responsiveHeight(60)} color={HEADING2_COLOR} />;
export const FEATURE_TEXT_ELECTRIC_ICON_60 = <Iconify icon="mdi:bus-electric" size={responsiveHeight(60)} color={HEADING2_COLOR} />;

export const boldIconMapping = {
    'Collect trash': BOLD_TRASH_ICON,
    'Bring your own bottle': BOLD_BOTTLE_ICON,
    'Bring your own bag': BOLD_BAG_ICON,
    'Plant a tree': BOLD_TREE_ICON,
    'Use sunlight': BOLD_SUN_ICON,
    'Join environmental competition': BOLD_JOIN_ICON,
    'Turn off when not in use': BOLD_FAN_ICON,
    'Buy LED lights': BOLD_BULB_ICON,
    'Save paper': BOLD_PAPER_ICON,
    'Take a bus': BOLD_BUS_ICON,
    'Ride a bicycle': BOLD_BIKE_ICON,
    'Repair leaky faucets': BOLD_FAUCET_ICON,
    'Save water': BOLD_WATER_ICON,
    'Compost organic waste': BOLD_COMPOST_ICON,
    'Compost organic waste': BOLD_COMPOST_ICON,
    'Use natural washing liquid': BOLD_WASH_ICON,
    'Put trash in right place': BOLD_TRASH2_ICON,
    'Recycle plastic items': BOLD_PLASTIC_ICON,
    'Donate clothes': BOLD_DONATE_ICON,
    'Buy second-hand items': BOLD_2HAND_ICON,
    'Recycle clothes': BOLD_CLOTH_ICON,
    'Take care of plants': BOLD_WATERING_ICON,
    'Use an electric vehicle': BOLD_ELECTRIC_ICON,
};

export const boldHeading2TextColorIconMapping_54 = {
    'Collect trash': BOLD_HEADING2_COLOR_TRASH_ICON_54,
    'Bring your own bottle': BOLD_HEADING2_COLOR_BOTTLE_ICON_54,
    'Bring your own bag': BOLD_HEADING2_COLOR_BAG_ICON_54,
    'Plant a tree': BOLD_HEADING2_COLOR_TREE_ICON_54,
    'Use sunlight': BOLD_HEADING2_COLOR_SUN_ICON_54,
    'Join environmental competition': BOLD_HEADING2_COLOR_JOIN_ICON_54,
    'Turn off when not in use': BOLD_HEADING2_COLOR_FAN_ICON_54,
    'Buy LED lights': BOLD_HEADING2_COLOR_BULB_ICON_54,
    'Save paper': BOLD_HEADING2_COLOR_PAPER_ICON_54,
    'Take a bus': BOLD_HEADING2_COLOR_BUS_ICON_54,
    'Ride a bicycle': BOLD_HEADING2_COLOR_BIKE_ICON_54,
    'Repair leaky faucets': BOLD_HEADING2_COLOR_FAUCET_ICON_54,
    'Save water': BOLD_HEADING2_COLOR_WATER_ICON_54,
    'Compost organic waste': BOLD_HEADING2_COLOR_COMPOST_ICON_54,
    'Use natural washing liquid': BOLD_HEADING2_COLOR_WASH_ICON_54,
    'Put trash in right place': BOLD_HEADING2_COLOR_TRASH2_ICON_54,
    'Recycle plastic items': BOLD_HEADING2_COLOR_PLASTIC_ICON_54,
    'Donate clothes': BOLD_HEADING2_COLOR_DONATE_ICON_54,
    'Buy second-hand items': BOLD_HEADING2_COLOR_2HAND_ICON_54,
    'Recycle clothes': BOLD_HEADING2_COLOR_CLOTH_ICON_54,
    'Take care of plants': BOLD_HEADING2_COLOR_WATERING_ICON_54,
    'Use an electric vehicle': BOLD_HEADING2_COLOR_ELECTRIC_ICON_54,
};

export const boldHeading2TextColorIconMapping = {
    'Collect trash': BOLD_HEADING2_COLOR_TRASH_ICON,
    'Bring your own bottle': BOLD_HEADING2_COLOR_BOTTLE_ICON,
    'Bring your own bag': BOLD_HEADING2_COLOR_BAG_ICON,
    'Plant a tree': BOLD_HEADING2_COLOR_TREE_ICON,
    'Use sunlight': BOLD_HEADING2_COLOR_SUN_ICON,
    'Join environmental competition': BOLD_HEADING2_COLOR_JOIN_ICON,
    'Turn off when not in use': BOLD_HEADING2_COLOR_FAN_ICON,
    'Buy LED lights': BOLD_HEADING2_COLOR_BULB_ICON,
    'Save paper': BOLD_HEADING2_COLOR_PAPER_ICON,
    'Take a bus': BOLD_HEADING2_COLOR_BUS_ICON,
    'Ride a bicycle': BOLD_HEADING2_COLOR_BIKE_ICON,
    'Repair leaky faucets': BOLD_HEADING2_COLOR_FAUCET_ICON,
    'Save water': BOLD_HEADING2_COLOR_WATER_ICON,
    'Compost organic waste': BOLD_HEADING2_COLOR_COMPOST_ICON,
    'Use natural washing liquid': BOLD_HEADING2_COLOR_WASH_ICON,
    'Put trash in right place': BOLD_HEADING2_COLOR_TRASH2_ICON,
    'Recycle plastic items': BOLD_HEADING2_COLOR_PLASTIC_ICON,
    'Donate clothes': BOLD_HEADING2_COLOR_DONATE_ICON,
    'Buy second-hand items': BOLD_HEADING2_COLOR_2HAND_ICON,
    'Recycle clothes': BOLD_HEADING2_COLOR_CLOTH_ICON,
    'Take care of plants': BOLD_HEADING2_COLOR_WATERING_ICON,
    'Use an electric vehicle': BOLD_HEADING2_COLOR_ELECTRIC_ICON,
};

export const normalIconMapping_60 = {
    'Collect trash': FEATURE_TEXT_TRASH_ICON_60,
    'Bring your own bottle': FEATURE_TEXT_BOTTLE_ICON_60,
    'Bring your own bag': FEATURE_TEXT_BAG_ICON_60,
    'Plant a tree': FEATURE_TEXT_TREE_ICON_60,
    'Use sunlight': FEATURE_TEXT_SUN_ICON_60,
    'Join environmental competition': FEATURE_TEXT_JOIN_ICON_60,
    'Turn off when not in use': FEATURE_TEXT_FAN_ICON_60,
    'Buy LED lights': FEATURE_TEXT_BULB_ICON_60,
    'Save paper': FEATURE_TEXT_PAPER_ICON_60,
    'Take a bus': FEATURE_TEXT_BUS_ICON_60,
    'Ride a bicycle': FEATURE_TEXT_BIKE_ICON_60,
    'Repair leaky faucets': FEATURE_TEXT_FAUCET_ICON_60,
    'Save water': FEATURE_TEXT_WATER_ICON_60,
    'Compost organic waste': FEATURE_TEXT_COMPOST_ICON_60,
    'Use natural washing liquid': FEATURE_TEXT_WASH_ICON_60,
    'Put trash in right place': FEATURE_TEXT_TRASH2_ICON_60,
    'Recycle plastic items': FEATURE_TEXT_PLASTIC_ICON_60,
    'Donate clothes': FEATURE_TEXT_DONATE_ICON_60,
    'Buy second-hand items': FEATURE_TEXT_2HAND_ICON_60,
    'Recycle clothes': FEATURE_TEXT_CLOTH_ICON_60,
    'Take care of plants': FEATURE_TEXT_WATERING_ICON_60,
    'Use an electric vehicle': FEATURE_TEXT_ELECTRIC_ICON_60,
};

export const VIDEO_RECORD_BUTTON = require('../assets/images/record.png');

// Get the suitable task icon corresponding to its title
export const getIconByTitle = (title = 'Collect trash', mappingType = boldIconMapping) => {
    return mappingType[title] || (mappingType === boldIconMapping ? UNKNOWN_ICON : UNKNOWN_ICON_60);
}

// Map
export const THRESHOLD_SHOW_TASK_ICONS = 0.1;
export const THRESHOLD_SHOW_TASK_TITLES = 0.05;
export const THRESOLD_LOCATION_DISTANCE = 10;
