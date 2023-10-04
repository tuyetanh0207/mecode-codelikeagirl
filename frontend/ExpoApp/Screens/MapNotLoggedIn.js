import { React } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import * as CONST from '../Utils/constants';
import MapComponent from '../Components/Map';
import { notLoggedInStyles } from '../Utils/notLoggedInStyles';
export default function MapNotLoggedIn() {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.imageBackground}
        >
            <View style={notLoggedInStyles.container}>
             <MapComponent />

            </View>
            <View  style={notLoggedInStyles.bottom}>
                <TouchableOpacity
                    style={{  }}
                    onPress={() => navigation.navigate('TaskNotLoggedIn')}
                >
                    
                    <View style={notLoggedInStyles.taskListButton}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Iconify icon="pepicons-print:list" size={CONST.responsiveHeight(36)} color="black" />
                            <Text numberOfLines={1} style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }, notLoggedInStyles.taskListtext]}>
                                Task list
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{  }}
                    onPress={() => navigation.navigate('LogIn')}
                >
                    
                    <View style={notLoggedInStyles.signInButton}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    
                            <Text  numberOfLines={1} style={[styles.heading4, { marginLeft: CONST.responsiveHeight(10) }, notLoggedInStyles.signIntext]}>
                                Sign in with Google
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
           
            </View>
        </ImageBackground>
    );
}