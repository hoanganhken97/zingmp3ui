import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
        Dimensions, Image, TextInput } from 'react-native';

import iconBack from '../../../src/img/appIcon/back_white.png';

const { width, height } = Dimensions.get('window');

export default class ChangeInfo extends Component {
    render() {
        const { wrapAll, header, headerText, iconBackStyle, body } = styles;
        return (
            <View style={wrapAll}>
                <View style={header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                        <Image source={iconBack} style={iconBackStyle} />
                    </TouchableOpacity>
                    <Text style={headerText}>User Information</Text>
                    <View style={iconBackStyle} />
                </View>
                <View style={body}>
                    <TextInput style={styles.textInput} placeholder="Enter your name" underlineColorAndroid='rgba(0,0,0,0)' />
                    <TextInput style={styles.textInput} placeholder="Enter your address" underlineColorAndroid='rgba(0,0,0,0)' />
                    <TextInput style={styles.textInput} placeholder="Enter your phone number" underlineColorAndroid='rgba(0,0,0,0)' />
                    <TouchableOpacity style={styles.wrapbtn}>
                        <Text style={styles.btnBigText}>CHANGE YOUR INFORMATION</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapAll: {
        flex: 1,
        backgroundColor: '#d8dde0',
        justifyContent: 'space-between'
    },
    header: {
        height: height / 12,
        backgroundColor: '#4267B2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
    },
    iconBackStyle: {
        width: 33,
        height: 33
    },
    body: {
        justifyContent: 'space-between',
        padding: 10
    },
    textInput: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 25,
        borderWidth: 2,
        borderColor: '#4267B2'
    },
    wrapbtn: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        backgroundColor: '#4267B2'
    },
    btnBigText: {
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        color: '#FFF'
    }
});
