import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity,
        Image, StyleSheet, TextInput } from 'react-native';

import icLogo from '../../../img/appIcon/ic_logo.png';
import icMenu from '../../../img/appIcon/ic_menu.png';

const { width } = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Disney Shop</Text>
          <Image source={icLogo} style={styles.icon} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder='What do you want to buy?'
          underlineColorAndroid='rgba(0,0,0,0)'
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
    justifyContent: 'space-between'
  },
  textInput: {
    height: width / 11,
    backgroundColor: 'white',
    fontFamily: 'sans-serif-medium',
    fontSize: 14
  },
  title: {
    color: 'white',
    fontFamily: 'sans-serif-medium',
    fontSize: 25,
  },
  icon: {
    width: 33,
    height: 33
  }
});
