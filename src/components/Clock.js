import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../utilities/style';
const { height, width } = Dimensions.get("screen");
const Clock = ({ time }) => {
    const padToTwo = number => (number <= 9 ? `0${number}` : number);

    const displayTime = centiseconds => {
        let minutes = 0;
        let seconds = 0;

        if (centiseconds < 0) {
            centiseconds = 0;
        }

        if (centiseconds < 100) {
            return {
                minutes: '00',
                seconds: '00',
                miliseconds: padToTwo(centiseconds),
            };
        }

        let remainCentiseconds = centiseconds % 100;
        seconds = (centiseconds - remainCentiseconds) / 100;

        if (seconds < 60) {
            return {
                minutes: '00',
                seconds: padToTwo(seconds),
                miliseconds: padToTwo(remainCentiseconds),
            };
        }

        let remainSeconds = seconds % 60;
        minutes = (seconds - remainSeconds) / 60;

        return {
            minutes: padToTwo(minutes),
            seconds: padToTwo(remainSeconds),
            miliseconds: padToTwo(remainCentiseconds),
        };


    };



    return (
        <View style={styles.container}>
            <View style={styles.roundcontainer}>
                <Text style={{ color: colors.color5, fontSize: 25, fontWeight: "700" }}>STOPWATCH</Text>
                <View style={styles.countercontainer}>
                    <View style={styles.counterinnercontainer}>
                        <Text style={styles.timetxt}>{displayTime(time).minutes}</Text>

                        <Text style={{ color: colors.color3 }}>min</Text>
                    </View>
                    <Text style={styles.timetxt}>:</Text>
                    <View style={styles.counterinnercontainer}>
                        <Text style={styles.timetxt}>{displayTime(time).seconds}</Text>

                        <Text style={{ color: colors.color3 }}>sec</Text>
                    </View>
                    <Text style={styles.timetxt}>:</Text>
                    <View style={styles.counterinnercontainer}>
                        <Text style={styles.timetxt}>{displayTime(time).miliseconds}</Text>
                        <Text style={{ color: colors.color3 }}>msec</Text>
                    </View>
                </View>
                <View></View>
            </View>
        </View>
    )
}

export default Clock;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    roundcontainer: {
        height: width - 100,
        width: width - 100,
        backgroundColor: colors.color4,
        elevation: 10,
        shadowColor: colors.color5,

        borderRadius: width - 100,
        justifyContent: "space-around",
        alignItems: "center",
    },
    countercontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
    },
    counterinnercontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    timetxt: {
        color: colors.color5,
        fontSize: 30,

    }
})