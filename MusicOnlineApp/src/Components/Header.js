import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions,
        TouchableOpacity, Image } from 'react-native';

import Global from './Global';

const { width } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isSelected: null };
        Global.isSelect = this.User.bind(this);
    }

    componentDidMount() {
        this.setState({ isSelected: true });
    }

    Home(checkHome) {
        const { navigation } = this.props;
        navigation.navigate('MainStackNavigator');
        this.setState({ isSelected: checkHome });
    }

    User(checkUser) {
        const { navigation } = this.props;
        navigation.navigate('UserStackNavigator');
        this.setState({ isSelected: checkUser });
    }

    gotoSearch(checkSelect) {
        const { navigation } = this.props;
        navigation.navigate('Screen_Search', { check: checkSelect });
    }

    render() {
        const { openMenu } = this.props;
        const { isSelected } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.wrapIconMenu} onPress={openMenu}>
                    <Image style={styles.iconMenu} source={require('../img/Menu/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapText} onPress={() => this.Home(true)}>
                    <View style={isSelected ? styles.wrapTextActive : styles.wrapText}>
                        <Text style={isSelected ? styles.styleActive : styles.styleInActive}>TRANG CHỦ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapText} onPress={() => this.User(false)}>
                    <View style={!isSelected ? styles.wrapTextActive : styles.wrapText}>
                        <Text style={!isSelected ? styles.styleActive : styles.styleInActive}>CÁ NHÂN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapSearch} onPress={() => this.gotoSearch(this.state.isSelected)}>
                    <Image style={styles.iconSearch} source={require('../img/Menu/search.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height: width / 7,
        backgroundColor: '#FEFEFE',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    wrapIconMenu: {
        width: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconMenu: {
        width: 25,
        height: 25
    },
    wrapText: {
        width: 2 * (width / 7),
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapTextActive: {
        width: 2 * (width / 7),
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#7847A3'
    },
    wrapSearch: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    },
    iconSearch: {
        width: 25,
        height: 25,
    },
    styleActive: {
        color: '#7847A3',
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
    },
    styleInActive: {
        color: '#676767',
        fontSize: 18,
        fontFamily: 'sans-serif-medium'
    }
});
