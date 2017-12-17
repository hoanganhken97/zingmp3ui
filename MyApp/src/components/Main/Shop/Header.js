import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <View style={{ height: width / 8 }}>
        <TouchableOpacity onPress={this.props.onOpen} >
          <Text>Open Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
