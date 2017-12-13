import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Swiper_Top from './Screens/Swiper_Top';
import Topic_Hot from './Screens/Topic_Hot';
import Chart from './Screens/Chart';

export default class Home_Page extends Component {
  render(){
    return(
      <ScrollView style = {styles.homeView}>
        <Chart />
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  homeView:{
    flex: 1,
    backgroundColor:'#fdfdfd'
  },
});
