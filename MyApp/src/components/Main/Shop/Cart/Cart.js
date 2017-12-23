import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Cart extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'orange' }} >
          <Text>Cart Component</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen_ProductDetail'); }}>
              <Text>Go to Detail</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
