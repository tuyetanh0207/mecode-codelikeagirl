import React from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, Image,ImageBackground } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { SvgUri } from 'react-native-svg';

import { AppButton } from '../Components/JoinBtn';
import * as CONST from "../Utils/constants";
import styles from '../Utils/styles';
import { taskDetailstyles }  from '../Utils/taskDetailsStyles';
import backsvg from '../assets/svgs/Back.svg'
export default function TaskDetailsScreen({navigation, route}) {
    return (
        <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.imageBackground}
        >
            <View style={taskDetailstyles.header}>
                <Image source={require('../assets/images/Back.png')} style={taskDetailstyles.backicon} />
                <Text style={taskDetailstyles.title}>Task details</Text>

            </View>
            {/* content + map*/}
            <ScrollView >
                {/* content */}
                <View style={taskDetailstyles.content}>
                    {/* icon + name */}
                    
                    <View style={taskDetailstyles.name}>
                        {/* icon */}
                        <View style={taskDetailstyles.left}>
                            <Iconify icon='solar:bag-4-linear' size={CONST.responsiveHeight(60)} color={CONST.FEATURE_TEXT_COLOR} />
                        </View>
                        {/* name */}
                        <View style={taskDetailstyles.right}>
                            <Text style={taskDetailstyles.nametext}>Collect trash in true type</Text>
                            <Text style={taskDetailstyles.distext}>80m</Text>
                        </View>
                    </View>
                    {/* address */}
                    <View style={taskDetailstyles.addr}>
                        <Text style={taskDetailstyles.shortAddrtext}>Thao cam vien zoo</Text>
                        <Text style={taskDetailstyles.addrtext}>2 Nguyen Binh Khiem, Ward Ben nghe, District 1, HCM city</Text>

                    </View>
                    {/* Hint */}
                    <View style={taskDetailstyles.hint}>
                        <Text style={taskDetailstyles.hinttext}>Hint</Text>
                        <Text style={taskDetailstyles.hintContenttext}>Collect as much trash as possible and put it in the nearest bin according to its classification.</Text>
                    </View>
                </View>
                {/* map */}
                <View style={taskDetailstyles.map}>
                 <Image source={require('../assets/images/fakepartmap.png')} style={taskDetailstyles.mapImage} />
                </View>
            </ScrollView>
            {/* btn */}
            <View style = {taskDetailstyles.btn}>
                <AppButton title="Join" backgroundColor={CONST.SECOND_THEME_COLOR} color={CONST.SECOND_TEXT_COLOR} size ="m"/>

            </View>
        </ImageBackground>
    )
}