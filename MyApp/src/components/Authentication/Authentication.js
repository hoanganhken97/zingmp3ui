import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text>Authentication</Text>
        <TouchableOpacity style={{ backgroundColor:'white', width: 50, height: 50 }}
          onPress={ () => {this.props.navigation.navigate('Screen_ChangeInfo') }} >
          <Text>Change To Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
