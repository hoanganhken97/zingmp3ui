import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Text>ChangeInfo</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'white', width: 50, height: 50 }}
          onPress={() => { this.props.navigation.navigate('Screen_Authentication'); }}
        >
          <Text>Change To Authentication</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
