import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import imgBanner from '../../../../img/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    return (
        <View style={styles.wrapCollection}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>WINTER COLLECTION</Text>
          </View>
          <View style={{ flex: 4, alignItems: 'center' }}>
            <Image source={imgBanner} style={styles.imgStyle} />
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapCollection: {
    backgroundColor: '#FFF',
    height: height / 2.8,
    margin: 10,
    padding: 10,
    paddingTop: 0
  },
  imgStyle: {
    width: width - 40,
    height: ((width - 40) / 933) * 465,
  },
  title: {
    fontSize: 20,
    color: '#606467',
  }
});
