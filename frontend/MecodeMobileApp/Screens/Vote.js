import React from 'react';
import { View, Text, Button } from 'react-native';
// import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>VOTE PAGE</Text>
        </View>
    );
}