import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 2;

export default class Swiper_Top extends Component{
  render(){
    return(
      <Swiper width={imageWidth} height={imageHeight} autoplay={true} autoplayTimeout={5}
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 150,}} />}
        activeDot={<View style={{backgroundColor: '#fdfdfd', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 150,}} />}
        >
      <TouchableHighlight onPress={()=>{}} style = {{flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <Image source={require('../../img/swiperTop/swiper1.jpg')} style = {styles.imageStyle}></Image>
          </View>
          <View>
            <View>
              <Image source={require('../../img/swiperTop/avatar1.jpg')} style = {styles.avartar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play}></Image>
            </View>
            <View style={styles.imgContent}>
              <Text style={styles.title}>Mr. Siro</Text>
              <Text style={styles.content}>Những ca khúc hay nhất của Mr. Siro</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>{}} style = {{flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <Image source={require('../../img/swiperTop/swiper2.png')} style = {styles.imageStyle}></Image>
          </View>
          <View>
            <View>
              <Image source={require('../../img/swiperTop/avatar2.jpg')} style = {styles.avartar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play}></Image>
            </View>
            <View style={styles.imgContent}>
              <Text style={styles.title}>Tháng Năm Bên Nhau</Text>
              <Text style={styles.content}>Hồ Quỳnh Hương bắt tay cùng Vũ Cát Tường trong sản phẩm âm nhạc mới..</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>{}} style = {{flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <Image source={require('../../img/swiperTop/swiper3.png')} style = {styles.imageStyle}></Image>
            <Image source={require('../../img/icon/play_black.png')} style = {styles.play1}></Image>
          </View>
          <View>
            <View style={styles.imgContent3}>
              <Text style={styles.title}>Mashup Christmas Songs</Text>
              <Text style={styles.content}>'Anh trai rau' JSOL và nàng Cara xinh đẹp kết hợp trong MV giáng sinh siêu dễ thương và ấm áp</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>{}} style = {{flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <Image source={require('../../img/swiperTop/swiper4.png')} style = {styles.imageStyle}></Image>
          </View>
          <View>
            <View>
              <Image source={require('../../img/swiperTop/avatar4.jpg')} style = {styles.avartar} />
              <Image source={require('../../img/icon/play_white.png')} style = {styles.play}></Image>
            </View>
            <View style={styles.imgContent}>
              <Text style={styles.title}>Without You</Text>
              <Text style={styles.content}>Thả mình trong chút ngẩn ngơ, chút buồn, chút đau đớn của tình yêu cùng..</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>{}} style = {{flex: 1}}>
        <View style={{flex: 1}}>
          <View>
            <Image source={require('../../img/swiperTop/swiper5.png')} style = {styles.imageStyle}></Image>
          </View>
          <View>
            <View>
              <Image source={require('../../img/swiperTop/avatar5.png')} style = {styles.avartar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play}></Image>
            </View>
            <View style={styles.imgContent}>
              <Text style={styles.title}>Embee Music Connection</Text>
              <Text style={styles.content}>Tuyển tập các ca khúc hít của dàn line-up sự kiện Embee Music Connection</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: imageHeight,
    width: imageWidth,
    justifyContent:'center',
    alignItems:'center',
  },
  imgContent:{
    position:'absolute',
    top: imageHeight - 80,
    bottom: 0,
    left: imageWidth - 320,
    right: 0,
  },
  imgContent3:{
    position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 10,
    marginTop: imageHeight - 80,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  title:{
    fontSize:20,
    fontFamily:'sans-serif-medium',
    fontWeight:'bold',
    color:'white'
  },
  content:{
    color:'white',
    flexWrap: 'wrap',
    fontFamily:'sans-serif-medium',
    fontSize:15,
    marginRight: 40,
  },
  avartar:{
    width: 70,
    height: 70,
    borderRadius: 7,
    borderWidth: 1,
    borderColor:'#fff',
    marginLeft: 10,
    marginTop: imageHeight - 80
  },
  play:{
    width: 33,
    height: 33,
    position:'absolute',
    top: imageHeight - 45,
    bottom: 0,
    left: imageWidth - 45,
    right: 0,
  },
  play1:{
    width: 33,
    height: 33,
    position:'absolute',
    top: imageHeight /2 -20,
    bottom: 0,
    left: imageWidth /2,
    right: 0,
  }
});
