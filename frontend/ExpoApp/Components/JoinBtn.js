import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as CONST from '../Utils/constants'

export const AppButton = ({onPress, title, backgroundColor, size, color}) => (
    <TouchableOpacity opPress={onPress} style={[
        backgroundColor && {backgroundColor},
        size === "sm" && {
            paddingHorizontal: 12,
            paddingVertical: 8,

        },
        true && {
            borderRadius: 12,
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

        ]}>{title}</Text>
    </TouchableOpacity>
)

const btnstyles= StyleSheet.create({
    title: {
        color: CONST.DARK_PINK_COLOR,
    }
})
