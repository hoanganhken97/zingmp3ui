import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Swiper_Top from './Screens/Swiper_Top';
import Topic_Hot from './Screens/Topic_Hot';
import Chart from './Screens/Chart';
import Chart_Week from './Screens/Chart_Week';
import MV_Hot from './Screens/MV_Hot';
import Top_Kind from './Screens/Top_Kind';

export default class Home_Page extends Component {
  render(){
    return(
      <ScrollView style = {styles.homeView} showsVerticalScrollIndicator={false}>
        <Swiper_Top />
        <Topic_Hot />
        <Chart />
        <Chart_Week />
        <MV_Hot />
        <Top_Kind />
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
