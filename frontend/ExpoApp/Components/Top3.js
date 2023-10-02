import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { LeaderBoardStyles } from '../Utils/leaderboardStyles';
import samplePhoto from '../assets/images/sample_avt.png';
import top1 from '../assets/images/leaderboard/top1.png';
import top2 from '../assets/images/leaderboard/top2.png';
import top3 from '../assets/images/leaderboard/top3.png';

export default function Top3Component(props) {
    const data = props.data;
    return (
        <View style={LeaderBoardStyles.top3Containers}>
            <View style={LeaderBoardStyles.top2Container}>
                <ImageBackground source={top2}>
                    <Image
                        source={samplePhoto}
                        style={LeaderBoardStyles.avatarTop2}
                    />
                </ImageBackground>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[1].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[1].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.top1Container}>
                <ImageBackground source={top1}>
                    <Image
                        source={samplePhoto}
                        style={LeaderBoardStyles.avatarTop1}
                    />
                </ImageBackground>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[0].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[0].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.top2Container}>
                <ImageBackground source={top3}>
                    <Image
                        source={samplePhoto}
                        style={LeaderBoardStyles.avatarTop2}
                    />
                </ImageBackground>
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[2].nameUser}</Text>
                    <Text style={[LeaderBoardStyles.score, LeaderBoardStyles.scoreTop]}>{data[2].score}</Text>
                </View>
            </View>
        </View>
    );
}