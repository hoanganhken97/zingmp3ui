import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
        <View >
          <Text>Menu Component</Text>
          <TouchableOpacity onPress={ this.props.openAuthentication }>
            <Text>Go to Authentication</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.props.openChangeInfo}>
            <Text>Go to ChangeInfo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ this.props.openOrderHistory}>
            <Text>Go to Orderhistory</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
