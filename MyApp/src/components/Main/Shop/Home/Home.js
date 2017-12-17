import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.wrapAll}>
          <Collection />
          <Category />
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
