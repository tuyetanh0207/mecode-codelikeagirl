import React from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image,ImageBackground,TouchableOpacity } from 'react-native';
import useNavigate from "@react-navigation/native"
import { Iconify } from 'react-native-iconify';
import { AppButton } from '../Components/JoinBtn';
import * as CONST from "../Utils/constants";
import styles from '../Utils/styles';
import { joinstyles } from '../Utils/joinStyles';
import { TextInput } from 'react-native';
export default function Join() {
    //const navigation = useNavigate();
    const taskName="Collect garbage"
    const taskShortAddr="Hoa binh park"
    const taskAddr="2 Nguyen Chi Thanh, Ward 9, Ho Chi Minh City"
    const [feeling, setFeeling] = useState("how do u feel?")
    return (
        <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.imageBackground}
        >
            {/* container */}
            <View style = {joinstyles.container}>
                {/* header */}
                <View style = {joinstyles.header}>
                    {/* backicon */}
                    <View style = {joinstyles.left}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={require('../assets/images/Back.png')} style={joinstyles.backicon} />
                        </TouchableOpacity>
                    </View>
                    <View style = {joinstyles.mid}>
                        <Text style = {joinstyles.headertext}>Create post</Text>

                    </View>
                    {/* post btn */}
                    <TouchableOpacity style = {joinstyles.right} >
                        <AppButton title="Post" color={CONST.FEATURE_TEXT_COLOR} backgroundColor={CONST.BACKGROUND_COLOR} size="sm"></AppButton>
                    </TouchableOpacity>
                </View>
                {/* post */}
                <View style = {joinstyles.post}>
                    {/* profile */}
                    <View style = {joinstyles.profile}>
                        <TouchableOpacity onPress={() => goBack()}
                        style = {joinstyles.profilePhoto}
                        >
                            <Image source={require('../assets/images/samplephotopost.png')} style={joinstyles.profileImage} />
                        </TouchableOpacity>
                        <Text style = {joinstyles.nametext}>Nguyen Thi Anh Tuyet</Text>
                    </View>
                    {/* text input */}
                    <TextInput style = {joinstyles.feelinginput} 
                    placeholder="How do you feel?"
                    placeholderTextColor="#868484"
                    multiline= {true}
                    />
                    {/* Photos */}
                    <View style = {joinstyles.photos}>
                        <View style = {joinstyles.photo}>
                        <Image source={require('../assets/images/samplephotopost.png')} style={joinstyles.backicon} />
                        </View>
                        <View style = {joinstyles.photo}>
                        <Image source={require('../assets/images/samplephotopost.png')} style={joinstyles.backicon} />
                        </View>
                        <View style = {joinstyles.photo}>
                        <Image source={require('../assets/images/samplephotopost.png')} style={joinstyles.backicon} />
                        </View>
                        <View style = {joinstyles.photo}>
                        <Image source={require('../assets/images/samplephotopost.png')} style={joinstyles.backicon} />
                        </View>
                        <View style = {joinstyles.photo}>
                        <Image source={require('../assets/images/addPhoto.png')} style={joinstyles.backicon} />
                        </View>
                    </View>
                    {/* Info */}
                    <View style = {joinstyles.info}>
                        <Text style = {joinstyles.taskNametext}>{taskName}</Text>
                        <Text style = {joinstyles.taskShortAddrtext}>{taskShortAddr}</Text>
                        <Text style = {joinstyles.taskAddrtext}>{taskAddr}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
