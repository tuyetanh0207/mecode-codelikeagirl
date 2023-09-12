import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';

export default function LeaderBoard() {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.heading2}>LEADERBOARD</Text>
        </View>
    );
}