import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

import signIn from '../../api/signIn';
import Global from '../Global';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        getToken()
        .then(a => console.log(`TOKENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN:${a}`));
    }

    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => {
            Global.onSignIn(res.user);
            this.props.backToMain();
            saveToken(res.token);
        })
        .catch(error => console.log(error));
    }
    render() {
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your Password"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.wrapBtnLoginNow} onPress={this.onSignIn.bind(this)}>
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
