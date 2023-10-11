import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { LeaderBoardStyles } from '../Utils/leaderboardStyles';
import samplePhoto from '../assets/images/sample_avt.png';
import top1 from '../assets/images/leaderboard/top1.png';
import top2 from '../assets/images/leaderboard/top2.png';
import top3 from '../assets/images/leaderboard/top3.png';
import { useNavigation } from '@react-navigation/native';

export default function Top3Component(props) {
    const data = props.data;
    const navigation = useNavigation();

    return (
        <View style={LeaderBoardStyles.top3Containers}>
            <View style={LeaderBoardStyles.top2Container}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                    userId: data[1].userID,
                    fullname: data[1].nameUser,
                    avatar: data[1].avatar,
                    point: data[1].score,
                    rank:2
                })}>
                    <ImageBackground source={top2}>
                        <Image
                            source={{ uri: data[1].avatar }}
                            style={LeaderBoardStyles.avatarTop2}
                        />
                    </ImageBackground>
                </TouchableOpacity>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[1].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[1].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.top1Container}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileOther', {
                    userId: data[0].userID,
                    fullname: data[0].nameUser,
                    avatar: data[0].avatar,
                    point: data[0].score,
                    rank:1
                })}>
                    <ImageBackground source={top1}>
                        <Image
                            source={{ uri: data[0].avatar }}
                            style={LeaderBoardStyles.avatarTop1}
                        />
                    </ImageBackground>
                </TouchableOpacity>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[0].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[0].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.top2Container}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileOther', {
                    userId: data[2].userID,
                    fullname: data[2].nameUser,
                    avatar: data[2].avatar,
                    point: data[2].score,
                    rank:3
                })}>
                    <ImageBackground source={top3}>
                        <Image
                            source={{ uri: data[2].avatar }}
                            style={LeaderBoardStyles.avatarTop2}
                        />
                    </ImageBackground>
                </TouchableOpacity>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[2].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[2].score}</Text>
                </View>
            </View>
        </View>
    );
}