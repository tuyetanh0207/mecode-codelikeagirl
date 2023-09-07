import React from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, Image,ImageBackground,TouchableOpacity } from 'react-native';
import useNavigate from "@react-navigation/native"
import { Iconify } from 'react-native-iconify';
import { AppButton } from '../Components/JoinBtn';
import * as CONST from "../Utils/constants";
import styles from '../Utils/styles';
import { taskDetailstyles }  from '../Utils/taskDetailsStyles';


export default function TaskDetailsScreen({ navigation: { goBack }, route }) {
   const {name, shortAddr, addr, dist, icon, hint} = route.params
    const navigation= useNavigate
    return (
        <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.imageBackground}
        >
            <View style={taskDetailstyles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                 <Image source={require('../assets/images/Back.png')} style={taskDetailstyles.backicon} />
                </TouchableOpacity>
                
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
                            <Text style={taskDetailstyles.nametext}>{name}</Text>
                            <Text style={taskDetailstyles.distext}>{dist}m</Text>
                        </View>
                    </View>
                    {/* address */}
                    <View style={taskDetailstyles.addr}>
                        <Text style={taskDetailstyles.shortAddrtext}>{shortAddr}</Text>
                        <Text style={taskDetailstyles.addrtext}>{addr}</Text>

                    </View>
                    {/* Hint */}
                    <View style={taskDetailstyles.hint}>
                        <Text style={taskDetailstyles.hinttext}>Hint</Text>
                        <Text style={taskDetailstyles.hintContenttext}>{hint}</Text>
                    </View>
                </View>
                {/* map */}
                <View style={taskDetailstyles.map}>
                 <Image source={require('../assets/images/fakepartmap.png')} style={taskDetailstyles.mapImage} />
                </View>
            </ScrollView>
            {/* btn */}
            <View style = {taskDetailstyles.btn}>
                <AppButton title="Join" backgroundColor={CONST.LIGHT_PINK_COLOR} color={CONST.DARK_PINK_COLOR} size ="m"/>

            </View>
        </ImageBackground>
    )
}