import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as CONST from '../Utils/constants'
import { useNavigation, useRoute } from '@react-navigation/native';
export const AppButton = ({onPress, title, backgroundColor, size, color}) => {
    const navigation = useNavigation()
    return (
        <View  
        //onPress={() => navigation.navigate('TaskDetails')} 
        style={[
            backgroundColor && {backgroundColor},
            size === "sm" && {
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
    
            },
            size === "m" && {
                paddingHorizontal: '40%',
                paddingVertical: 8,
                borderRadius: 26,
    
            },
            true && {
             
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 20 },
                shadowOpacity: 1,
                shadowRadius: 50,
            
                elevation: 5,
    
    
    
            }
        ]}>
            <Text style={[
                color && {color},
                size === "sm" && {fontSize: 20,
                    fontWeight: '500',},
                size === "m" && {fontSize: 22,
                    fontWeight: '400',},
    
            ]}>{title}</Text>
        </View>
    )
    
}

const btnstyles= StyleSheet.create({
    title: {
        color: CONST.DARK_PINK_COLOR,
    }
})
