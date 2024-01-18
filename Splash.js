import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import { colors } from './src/utilities/style';
import LottieView from 'lottie-react-native';
const Splash = () => {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={colors.color1} />
            <View style={styles.imagecontainer}>
                <Image source={require('./assets/clock.gif')} resizeMode='contain' style={{ height: "100%", width: "100%" }} />

            </View>
            <Text style={{ fontSize: 25, color: colors.color5 }}>
                STOP WATCH
            </Text>

        </View>
    )
}

export default Splash;

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color1,
    },
    imagecontainer: {
        height: 150,
        width: 150,
    }
})