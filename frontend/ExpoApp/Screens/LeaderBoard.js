// Navigate from Leaderboard to Profile:
// - File Screens/Leaderboard.js: line 91
// - File Components/Top3.js: lines 17, 36, 55 

import { React, useContext, useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import styles from '../Utils/styles';
import * as CONST from '../Utils/constants';
import { Iconify } from 'react-native-iconify';
import starIcon from '../assets/images/leaderboard/star.png';
import Top3Component from "../Components/Top3";
import { LeaderBoardStyles } from '../Utils/leaderboardStyles';
import { getLeaderboard, getUserRank } from '../api/leaderboard';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

export default function LeaderBoard({ navigation: { goBack }, route }) {
    const navigation = useNavigation();
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const getUserID = async () => {
        const tk = await AsyncStorage.getItem("token");
        setToken(tk);
        const str = await AsyncStorage.getItem("userInfo");
        const userInfo_ = str ? JSON.parse(str) : {};
        setUserInfo(userInfo_);
        return userInfo_.userId;
    };

    const [leaderboard, setLeaderboard] = useState(null);
    const [userRank, setUserRank] = useState(0);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const rawData = await getLeaderboard();
                const leaderboardData = rawData.data.leaderboard;
                // const data = leaderboardData.map(item => ({
                //     nameUser: item.nameUser,
                //     score: item.score,
                //     userID: item.userID,
                //     avatar: item.avatar,
                // }));

                setLeaderboard(leaderboardData);
            } catch (error) {
                console.error(error);
            }
        };
        const fetchUserRank = async () => {
            try {
                const res = await getUserRank(await getUserID());
                setUserRank(res);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAllData = async () => {
            await fetchLeaderboard();
            fetchUserRank(userInfo.userId);
        };
        fetchAllData();

    }, []);

    if (leaderboard && userRank && userInfo) {
        return (
            <ImageBackground
                source={require('../assets/images/background.png')}
                style={styles.imageBackground}
            >
                <View style={LeaderBoardStyles.header}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Iconify icon="ic:round-arrow-back-ios" size={CONST.responsiveHeight(32)} color={CONST.FEATURE_TEXT_COLOR} />
                    </TouchableOpacity>
                    <Text style={LeaderBoardStyles.title}>Leaderboard</Text>
                </View>

                <View style={LeaderBoardStyles.container}>
                    <FlatList
                        data={leaderboard.slice(3)}
                        keyExtractor={(item) => item.userID.toString()}
                        renderItem={({ item, index }) => (
                            <View>
                                <View style={[index + 4 === userRank ? LeaderBoardStyles.userItem : null]}>
                                    <View style={LeaderBoardStyles.item}>
                                        <View style={[LeaderBoardStyles.subContainer, { paddingLeft: -10 }]}>
                                            <ImageBackground
                                                source={starIcon}
                                                style={LeaderBoardStyles.starIcon}>
                                                <Text style={LeaderBoardStyles.rank}>{index + 4}</Text>
                                            </ImageBackground>

                                            <TouchableOpacity onPress={() => navigation.navigate('ProfileOther', {
                                                userId: item.userID,
                                                fullname: item.nameUser,
                                                avatar: item.avatar,
                                                point: item.score,
                                                rank: index + 3+ 1
                                            })}>
                                                <Image
                                                    source={{ uri: item.avatar }}
                                                    style={LeaderBoardStyles.avatar}
                                                />

                                            </TouchableOpacity>

                                            <Text style={LeaderBoardStyles.username}>{item.nameUser}</Text>
                                        </View>
                                        <View style={[LeaderBoardStyles.subContainer, { paddingRight: 10 }]}>
                                            <Text style={LeaderBoardStyles.score}>{item.score}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={LeaderBoardStyles.separator}></View>
                            </View>
                        )}
                        ListHeaderComponent={() => (
                            <View style={LeaderBoardStyles.container}>
                                <View style={LeaderBoardStyles.campaignContainer}>
                                    <Text style={LeaderBoardStyles.campaignTime}>
                                        August 20 - October 20, 2023
                                    </Text>
                                    <Top3Component data={leaderboard} />
                                </View>
                            </View>
                        )}
                    />
                </View>


            </ImageBackground >

        );
    }
    return null;
}