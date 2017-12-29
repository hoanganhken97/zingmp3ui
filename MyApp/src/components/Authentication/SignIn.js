import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class SignIn extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.textInput} placeholder="Enter your email" underlineColorAndroid='rgba(0,0,0,0)' />
                <TextInput style={styles.textInput} placeholder="Enter your Password" underlineColorAndroid='rgba(0,0,0,0)' />
                <TouchableOpacity style={styles.wrapBtnLoginNow}>
                    <Text style={styles.btnBigText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 25,
    },
    wrapBtnLoginNow: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF'
    },
    btnBigText: {
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        color: '#FFF'
    }
});
