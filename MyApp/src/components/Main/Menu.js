import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
  gotoAuthentication() {
    const { navigation } = this.props;
    navigation.navigate('Screen_Authentication');
  }
  gotoChaneInfo() {
    const { navigation } = this.props;
    navigation.navigate('Screen_ChangeInfo');
  }
  gotoOrderHistory() {
    const { navigation } = this.props;
    navigation.navigate('Screen_OrderHistory');
  }
  render() {
    return (
        <View >
          <Text>Menu Component</Text>
          <TouchableOpacity onPress={ this.gotoAuthentication.bind(this) }>
            <Text>Go to Authentication</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.gotoChaneInfo.bind(this) }>
            <Text>Go to ChangeInfo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.gotoOrderHistory.bind(this) }>
            <Text>Go to Orderhistory</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
