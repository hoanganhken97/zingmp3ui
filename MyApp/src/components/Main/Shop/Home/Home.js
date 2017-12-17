import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Collection from './Collection';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.wrapAll}>
          <Collection />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapAll: {
    backgroundColor: '#d8dde0',
    flex: 1,
  }
});
