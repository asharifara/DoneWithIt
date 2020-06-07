import React from 'react';
import { StyleSheet, ImageBackground, View, Text, Button, Image } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            resizeMode="contain"
            style={styles.background} 
            source={require("../assets/bg.jpg")} 
        >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.welcomeText}>Buy goods and sell what you don't need! </Text>
            <Text style={styles.joinText}>It's a free app! what are you waiting for? Join us Now!</Text>
            <View style={styles.loginButton}><Button color="#fff" title='Register'></Button></View>
            <View style={styles.registerButton}><Button color="#fff" title='Login'></Button></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    welcomeText: {
        color: colors.primary,
        flex: 1,
        justifyContent: 'flex-start',
        fontSize: 20,
        top:70,
        paddingTop: 50,
        fontWeight: 'bold',
        padding: 5,
    },
    logo : {
        position: 'absolute',
        top: 30,
        width:100,
        height: 100,
    },
    loginButton : {
        width: '100%',
        height: 80,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: '#eee',
    },
    joinText: {
        color: colors.secondary,
        fontSize: 10,
        flex: 1,
        fontWeight: 'bold',
        alignContent: 'flex-start',
        position: 'absolute',
        top: 145,
    },
    registerButton : {
        width: '100%',
        height: 80,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderColor: '#fff'
    }
});
