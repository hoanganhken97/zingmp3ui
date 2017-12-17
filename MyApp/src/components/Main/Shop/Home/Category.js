import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import imgLittle from '../../../../img/temp/little.jpg';
import imgMaxi from '../../../../img/temp/maxi.jpg';
import imgParty from '../../../../img/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
  render() {
    return (
        <View style={styles.wrapCategory}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>LIST OF CATEGORY</Text>
          </View>
          <View style={{ flex: 4, alignItems: 'center' }}>
            <Swiper width={width - 40} height={(width - 40) / 2} >
              <ImageBackground source={imgLittle} style={styles.imgStyle}>
                <Text style={styles.textContent}>Little Dress</Text>
              </ImageBackground>
              <ImageBackground source={imgMaxi} style={styles.imgStyle}>
                <Text style={styles.textContent}>Maxi Dress</Text>
              </ImageBackground>
              <ImageBackground source={imgParty} style={styles.imgStyle}>
                <Text style={styles.textContent}>Party Dress</Text>
              </ImageBackground>
            </Swiper>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapCategory: {
    backgroundColor: '#FFF',
    height: height / 2.9,
    margin: 10,
    marginTop: 3,
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-between'
  },
  imgStyle: {
    width: width - 40,
    height: (width - 40) / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#606467',
    fontFamily: 'sans-serif-medium'
  },
  textContent: {
    //fontFamily: 'sans-serif-medium',
    color: '#919191',
    fontSize: 20
  }
});
