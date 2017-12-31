import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity,
        Image, StyleSheet, TextInput } from 'react-native';

import icLogo from '../../../img/appIcon/ic_logo.png';
import icMenu from '../../../img/appIcon/ic_menu.png';
import searchProduct from '../../../../src/api/searchProduct';
import Global from '../../Global';

const { width } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stringSearch: ''
        };
    }

    onSearch() {
        const { stringSearch } = this.state;
        this.setState({ stringSearch: '' });
        searchProduct(stringSearch)
        .then(arrProduct => Global.setArraySearch(arrProduct))
        .catch(err => console.log(err));
    }

    render() {
    const { gotoSearch, onOpen } = this.props;
        return (
            <View style={styles.wrapHeader}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onOpen}>
                        <Image source={icMenu} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Disney Shop</Text>
                    <Image source={icLogo} style={styles.icon} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='What do you want to buy?'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.stringSearch}
                    onChangeText={text => this.setState({ stringSearch: text })}
                    onFocus={gotoSearch}
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapHeader: {
        height: width / 4,
        backgroundColor: '#4267B2',
        padding: 10,
        justifyContent: 'space-around'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        height: width / 11,
        backgroundColor: 'white',
        fontSize: 14,
        borderRadius: 10,
        paddingLeft: 10
    },
    title: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 25,
    },
    icon: {
        width: 27,
        height: 27
    }
});
