import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import imgAvatar from '../../img/temp/Avatar.png';

const { width, height } = Dimensions.get('window');

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }
    render() {
        const logoutJSX = (
            <View>
                <TouchableOpacity style={styles.btnLoginStyle} onPress={() => this.props.navigation.navigate('Screen_Authentication')}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text style={styles.profileName}>Văn Minh Nguyên</Text>
                <View>
                    <TouchableOpacity style={styles.btnElement} onPress={() => this.props.navigation.navigate('Screen_OrderHistory')} >
                        <Text style={styles.btnTextElement}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnElement} onPress={() => this.props.navigation.navigate('Screen_ChangeInfo')} >
                        <Text style={styles.btnTextElement}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnElement} >
                        <Text style={styles.btnTextElement}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;
        return (
            <View style={styles.wrapMenu}>
                <Image source={imgAvatar} style={styles.avatarStyle} />
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapMenu: {
        flex: 1,
        backgroundColor: '#4267B2',
    },
    avatarStyle: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 75,
        margin: 25,
        marginBottom: 25
    },
    btnLoginStyle: {
        height: 50,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    btnText: {
        color: '#4267B2',
        fontSize: 20,
        fontFamily: 'sans-serif-medium'
    },
    btnElement: {
        height: 50,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 7,
    },
    btnTextElement: {
        color: '#4267B2',
        fontSize: 17,
        marginLeft: 10,
        fontFamily: 'sans-serif-medium',
    },
    profileName: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '400',
        alignSelf: 'center'
    }
});
