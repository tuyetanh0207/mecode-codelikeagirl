import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    });