import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';

export default function Vote() {
    // const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.textH2}>VOTE</Text>
        </View>
    );
}