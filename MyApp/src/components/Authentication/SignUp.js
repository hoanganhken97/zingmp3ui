import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import register from '../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    registerAccount() {
        const { name, password, email } = this.state;
        register(email, name, password)
        .then(res => {
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
        });
    }

    onSuccess() {
        Alert.alert(
            'Congratulation!!!',
            'Account created successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: this.setState({ email: '' }) }
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your Password"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Re-enter your Password"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.wrapBtnLoginNow} onPress={this.registerAccount.bind(this)}>
                    <Text style={styles.btnBigText}>SIGN UP NOW</Text>
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
