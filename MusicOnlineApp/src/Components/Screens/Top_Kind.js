import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class Top_Kind extends Component{
  render(){
    return(

      <View style={styles.wrapAll}>
        <View style={styles.wrapTittle}>
          <Text style={styles.title}>CHỦ ĐỀ VÀ THỂ LOẠI</Text>
          <Text style={styles.content}>Xem thêm</Text>
        </View>
        <ScrollView ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapTopic}>
              <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/nhachot.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/christmas.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/bolero.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/bathuviet.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/hitmoi.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/bathuaumy.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/caphe.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/lamviec.jpg')}/>
              <Image style={styles.imgStyle1} source={require('../../img/Topic_Kind/acoustic.jpg')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapAll:{
      width: imageWidth,
      height: imageWidth / 2,
      marginTop: 15,
    },
    wrapTittle:{
      flex: 0.2,
      marginLeft: 10,
      marginRight: 10,
    },
    title:{
      color:'#202020',
      fontSize:25,
      fontFamily:'sans-serif-medium'
    },
    content:{
      fontFamily:'sans-serif-medium',
      color:'#715b80',
      fontSize: 15,
      alignSelf:'flex-end',
      position:'absolute',
    },
    wrapTopic:{
      flex: 0.8,
      marginLeft: 10,
      marginRight:10,
      flexDirection: 'row',
    },
    imgStyle:{
      width:imageWidth / 2 - 25,
      height: imageWidth / 2 - 100,
      borderRadius: 5,
      marginTop: 20,
    },
    imgStyle1:{
      width:imageWidth / 2 - 25,
      height: imageWidth / 2 - 100,
      borderRadius: 5,
      marginTop: 20,
      marginLeft: 10
    },
});
