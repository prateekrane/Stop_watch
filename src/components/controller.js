import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../utilities/style';
import * as Haptics from 'expo-haptics';

const { height, width } = Dimensions.get("screen");

const Controller = ({ isRunning, handleStart, handleLap, handleStop }) => {

    // const ONE_SECOND_IN_MS = 100;
    function Vibration() {
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Error
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.btncontainer, { backgroundColor: colors.color4 }]}
                onPress={() =>

                    handleStop()

                }>
                <Entypo name="controller-stop" size={20} color={colors.color5} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btncontainer, { backgroundColor: colors.color2 }]}
                onPress={() => { Vibration(), handleStart() }}>
                <FontAwesome5 name={isRunning ? "pause" : "play"} size={20} color={colors.color3} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btncontainer, { backgroundColor: colors.color4 }]}
                onPress={() => handleLap()}>
                <Entypo name="controller-next" size={20} color={colors.color5} />
            </TouchableOpacity>
        </View >
    )
}

export default Controller;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: width,

    },
    btncontainer: {
        height: 60,
        width: 60,

        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})



//<FontAwesome5 name="play" size={24} color="black" />