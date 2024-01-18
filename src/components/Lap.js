import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utilities/style'
const Lap = ({ result }) => {
    const padToTwo = number => (number <= 9 ? `0${number}` : number);

    const displayTime = centiseconds => {
        let minutes = 0;
        let seconds = 0;

        if (centiseconds < 0) {
            centiseconds = 0;
        }

        let remainCentiseconds = centiseconds % 100;
        seconds = (centiseconds - remainCentiseconds) / 100;

        let remainSeconds = seconds % 60;
        minutes = (seconds - remainSeconds) / 60;

        return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
            remainCentiseconds,
        )}`;

        //
    };
    return (
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletxt}>LAP TIME</Text>
                <Text style={styles.titletxt}>LAP NO</Text>
            </View>
            <FlatList
                data={result}
                renderItem={item => {
                    // console.log(item);
                    return <View style={{ flexDirection: "row", justifyContent: "space-around", width: "90%", marginVertical: 10 }}>
                        <Text style={{ color: "white" }}>{displayTime(item.item)}</Text>
                        <Text style={{ color: "white" }}>{result.length - item.index}</Text>
                    </View>
                }}



            />
        </View>
    )
}

export default Lap;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    titlecontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: colors.color4,
        paddingVertical: 10,
    },
    titletxt: {
        color: colors.color5,
        fontWeight: "bold",
    }
})