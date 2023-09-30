import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { LeaderBoardStyles } from '../Utils/leaderboardStyles';
import samplePhoto from '../assets/images/sample_avt.png';
import starIcon from '../assets/images/leaderboard/star.png';
export default function Top3Component(props) {
    const data = props.data;
    return (
        <View style={LeaderBoardStyles.top3Container}>
            <View style={LeaderBoardStyles.topContainer}>
                <ImageBackground
                    source={starIcon}
                    style={LeaderBoardStyles.starIconTop2}>
                    <Text style={[LeaderBoardStyles.rank, { fontSize: 18 }]}>
                        2
                    </Text>
                </ImageBackground>
                <Image
                    source={samplePhoto}
                    style={LeaderBoardStyles.avatarTop2}
                />
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[1].nameUser}</Text>
                    <Text style={LeaderBoardStyles.score}>{data[1].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.topContainer}>
                <ImageBackground
                    source={starIcon}
                    style={LeaderBoardStyles.starIconTop1}>
                    <Text style={[LeaderBoardStyles.rank, { fontSize: 25 }]}>1</Text>
                </ImageBackground>
                <Image
                    source={samplePhoto}
                    style={LeaderBoardStyles.avatarTop1}
                />
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[0].nameUser}</Text>
                    <Text style={LeaderBoardStyles.score}>{data[0].score}</Text>
                </View>
            </View>

            <View style={LeaderBoardStyles.topContainer}>
                <ImageBackground
                    source={starIcon}
                    style={LeaderBoardStyles.starIconTop2}>
                    <Text style={[LeaderBoardStyles.rank, { fontSize: 18 }]}>
                        3
                    </Text>
                </ImageBackground>
                <Image
                    source={samplePhoto}
                    style={LeaderBoardStyles.avatarTop2}
                />
                <View style={LeaderBoardStyles.subContainerTop}>
                    <Text style={LeaderBoardStyles.usernameTop}>{data[2].nameUser}</Text>
                    <Text style={LeaderBoardStyles.score}>{data[2].score}</Text>
                </View>
            </View>
        </View>
    );
}
