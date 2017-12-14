import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image, TouchableHighlight} from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class Chart_Week extends Component{
  render(){
    return(
      <View style={styles.wrapAll}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>MFU CHART TUẦN</Text>
        </View>
        <View style={styles.wrapTopic}>
          <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
            <View>
              <Image style={styles.imgStyle} source={require('../../img/chartWeek/vietnam.png')}/>
            </View>
            <View>
              <Image style={styles.imgStyle} source={require('../../img/chartWeek/us-uk.png')}/>
            </View>
          </View>

          <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
            <View style ={{alignSelf:'flex-end'}}>
              <Image style={styles.imgStyle} source={require('../../img/chartWeek/k-pop.png')}/>
            </View>
            <View style ={{alignSelf:'flex-end'}}>
              <Image style={styles.imgStyle} source={require('../../img/chartWeek/top100.png')}/>
            </View>
          </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapAll:{
    width: imageWidth,
    height: imageWidth / 1.5,
    marginTop: 25,
  },
  wrapTitle:{
    flex: 0.15,
    marginLeft: 10
  },
  title:{
    color:'black',
    fontSize:25,
    fontFamily:'sans-serif-medium'
  },
  wrapTopic:{
    flex: 0.85,
    marginLeft: 10,
    marginRight:10,
    flexDirection: 'column',
  },
  imgStyle:{
    width:imageWidth / 2 - 15,
    height: imageWidth / 2 - 94,
    borderRadius: 5,
  }
});
