import * from
export const responsiveSize = (standardSize, standardScreenSize = STANDARD_SCREEN[1], truthScreenSize = TRUTH_SCREEN[1]) => {
    return Math.round(truthScreenSize * standardSize / standardScreenSize);
};