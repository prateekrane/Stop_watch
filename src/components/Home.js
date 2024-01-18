import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import Clock from './Clock';
import Lap from './Lap';
import Controller from './controller';
import { colors } from '../utilities/style';
const Home = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState([]);
    const timer = useRef(null);

    const handleStart = useCallback(() => {
        if (!isRunning) {
            const interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            }, 10);
            timer.current = interval;
        } else {
            clearInterval(timer.current);
        }

        setIsRunning((previousState) => !previousState);


    }, [isRunning]);

    const handleLap = useCallback(() => {
        if (isRunning) {
            setResult((previousState) => [time, ...previousState]);
        }
    }, [isRunning, time]);

    const handleStop = useCallback(() => {

        setResult([]);
        setTime(0);
        clearInterval(timer.current)
        setIsRunning(false);
    }, [isRunning])




    return (
        <View style={styles.container}>
            <StatusBar hidden={false} backgroundColor={colors.color1} />
            <View style={{ flex: 50 }}>
                <Clock time={time} />
            </View>
            <View style={{ flex: 35 }}>
                <Lap result={result} />
            </View>
            <View style={{ flex: 15 }}>
                <Controller isRunning={isRunning} handleStart={handleStart} handleLap={handleLap} handleStop={handleStop} />
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color1,
    }
})