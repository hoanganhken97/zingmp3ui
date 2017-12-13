import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image, TouchableHighlight} from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;

export default class Chart extends Component{
  render(){
    return(
      <View style={styles.wrapper}>
        <View style={{flex: 0.07}}>
          <TouchableHighlight onPress={()=>{}} style={{width: imageWidth, height: imageWidth /9,}} underlayColor='#C4BABA'>
            <View style={styles.titleStyle}>
              <Text style={styles.title}>ZING CHART</Text>
              <Text style={styles.content}>Xem thêm</Text>
              <Image source={require('../../img/icon/play_black.png')} style={styles.icon}/>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.wrapImg}>
          <View style={{flex: 1}}>
            <View style ={styles.wrapChar}>
              <Image source={require('../../img/chart/chart.png')}/>
            </View>
            <View style ={styles.wrapAvatar}>
              <Image style={styles.baoanh} source={require('../../img/chart/baoanh.jpg')}/>
              <Image style={styles.mrsiro} source={require('../../img/chart/mrsiro.jpg')}/>
              <Image style={styles.noo} source={require('../../img/chart/noo.jpg')}/>
              <Image style={styles.top1} source={require('../../img/chart/top1.png')}/>
              <Image style={styles.top2} source={require('../../img/chart/top2.png')}/>
              <Image style={styles.top3} source={require('../../img/chart/top3.png')}/>
              <Text style={styles.text1}>Bảo Anh</Text>
              <Text style={styles.text2}>Mr.Siro</Text>
              <Text style={styles.text3}>Noo Phước Thịnh</Text>
            </View>
            <View style={{flex: 0.3, justifyContent:'center'}}>
              <TouchableHighlight onPress={()=>{}} style={styles.wrapSong} underlayColor='#D4C3C3'>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <Image style={styles.backGround} source={require('../../img/chart/background.png')} />
                  <Image style={styles.avatar} source={require('../../img/chart/avatar.jpg')} />
                  <View style={styles.wrapTitle}>
                    <Text style={styles.titleTop}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                    <Text style={styles.contentTop1}>Bảo Anh</Text>
                    <Text style={styles.contentTop2}>Chạm đỉnh Zing: 0 lần</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.wrapTopSong}>
          <View style={{flex: 1}}>
            <View style = {styles.wrapTime}>
              <Image style={styles.imgTime} source={require('../../img/icon/increase.png')}/>
              <Text style={styles.textTime}>12.12.2017 - 01:00</Text>
            </View>
            <View style={styles.wrapRealSong}>
              <View style={{flex: 1}}>
                <View style={styles.wrapTopElement}>
                  <Text style={[styles.textTopColor, {color:'#8e44ad'}]}>01</Text>
                </View>
                <View style={styles.wrapTopElement}>
                  <Text style={[styles.textTopColor, {color:'#32c24d'}]}>02</Text>
                </View>
                <View style={styles.wrapTopElement}>
                  <Text style={[styles.textTopColor, {color:'#f39c12'}]}>03</Text>
                </View>
                <View style={styles.wrapTopElement}>
                  <Text style={styles.textTopOther}>04</Text>
                </View>
                <View style={styles.wrapTopElement}>
                  <Text style={styles.textTopOther}>05</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    width:imageWidth,
    height:imageWidth * 2 + 200,
    flex: 1,
  },
  titleStyle:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 7,
  },
  title:{
    color:'black',
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
  icon:{
    width: 33,
    height: 33,
    position:'absolute',
    left: 150
  },
  wrapImg:{
    flex: 0.53,
  },
  wrapChar:{
    flex: 0.5,
    width:imageWidth,
    height:imageWidth /2,
  },
  wrapAvatar:{
    flex: 0.2,
    flexDirection:'column',
  },
  wrapSong:{
    width:imageWidth - 20,
    height:imageWidth /4 + 30,
    alignSelf:'center',
    borderRadius: 5,
    justifyContent:'center',
    flexDirection: 'column'
  },
  baoanh:{
    width: 50,
    height: 50,
    marginTop: 10,
    position:'absolute',
    right:imageWidth - 100,
    borderRadius: 5
  },
  mrsiro:{
    width: 50,
    height: 50,
    marginTop: 10,
    position:'absolute',
    alignSelf:'center',
    borderRadius: 5
  },
  noo:{
    width: 50,
    height: 50,
    marginTop: 10,
    position:'absolute',
    left:imageWidth - 100,
    borderRadius: 5
  },
  top1:{
    width: 25,
    height: 25,
    marginTop: 50,
    position:'absolute',
    right:imageWidth - 87.5,
  },
  top2:{
    width: 25,
    height: 25,
    marginTop: 50,
    position:'absolute',
    alignSelf:'center'
  },
  top3:{
    width: 25,
    height: 25,
    marginTop: 50,
    position:'absolute',
    left:imageWidth - 87.5
  },
  text1:{
    marginTop: 75,
    position:'absolute',
    right: imageWidth - 105,
    fontFamily:'sans-serif-condensed',
    fontSize: 17,
  },
  text2:{
    marginTop: 75,
    position:'absolute',
    alignSelf:'center',
    fontFamily:'sans-serif-condensed',
    fontSize: 17,
  },
  text3:{
    marginTop: 75,
    position:'absolute',
    left:imageWidth - 135,
    fontFamily:'sans-serif-condensed',
    fontSize: 17,
  },
  backGround:{
    width:imageWidth - 20,
    height:imageWidth /4 + 30,
    position:'absolute',
    alignSelf:'center',
    borderRadius: 5,
  },
  avatar:{
    width: 90,
    height: 90,
    borderRadius: 5,
    alignSelf:'center',
    marginLeft: 10
  },
  wrapTitle:{
    marginLeft: 10,
    flexWrap:'wrap',
    flexDirection:'row',
    width: imageWidth / 2,
    height: imageWidth / 5,
    alignSelf:'center'
  },
  titleTop:{
    fontFamily:'sans-serif-medium',
    fontSize: 15,
    color:'white',
    alignSelf:'flex-start',
  },
  contentTop1:{
    fontFamily:'sans-serif-condensed',
    color:'white',
    alignSelf:'center',
    position:'absolute'
  },
  contentTop2:{
    fontFamily:'sans-serif-condensed',
    color:'white',
    alignSelf:'flex-end',
    position:'absolute'
  },
  wrapTopSong:{
    flex: 0.4,
  },
  wrapTime:{
    flex: 0.1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ededed'
  },
  imgTime:{
    width: 33,
    height: 33,
    marginLeft: 7,
  },
  textTime:{
    alignSelf:'center',
    fontFamily:'sans-serif-medium',
    color:'black',
    fontSize: 15,
    marginLeft: 7
  },
  wrapRealSong:{
    flex: 0.9,
    borderWidth: 1,
  },
  wrapTopElement:{
    flex: 0.2,
    borderWidth: 1,
    flexDirection:'row',
  },
  textTopColor:{
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
    alignSelf:'center',
    marginLeft: 15,
    fontSize: 15,
  },
  textTopOther:{
    fontFamily:'sans-serif-medium',
    alignSelf:'center',
    marginLeft: 15,
    fontSize: 15,
  },
});
