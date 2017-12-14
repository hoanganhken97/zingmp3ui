import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image, TouchableHighlight} from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class MV_Hot extends Component{
  render(){
    return(
      <View style={styles.wrapAll}>
        <View style={styles.wrapTittle}>
          <Text style={styles.title}>MV HOT</Text>
          <Text style={styles.content}>Xem thêm</Text>
        </View>

        <View style={styles.wrapAllVideo}>
          <View style={styles.wrapElementVideo}>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center'}}>
                <Image style={styles.imgStyle} source={require('../../img/mvHot/mv1.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={styles.wrapView}>
              </View>
              <View style={styles.wrapTextView}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>357K</Text>
              </View>
              <Text style={[styles.textVideoTittle,{marginRight: 5}]}>Come Back Home</Text>
              <Text style={styles.textVideoContent}>Vũ Cát Tường</Text>
            </View>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center', marginLeft: 5}}>
                <Image style={[styles.imgStyle, {alignSelf:'flex-end'}]} source={require('../../img/mvHot/mv2.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={[styles.wrapView, {marginLeft: 10}]}>
              </View>
              <View style={[styles.wrapTextView, {marginLeft: 10}]}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>456K</Text>
              </View>
              <View style={[styles.wrapVideoContent, {marginLeft: 5}]}>
                <Text style={styles.textVideoTittle}>Chạm Khẽ Tim Anh Một Chút Thôi</Text>
                <Text style={styles.textVideoContent}>Noo Phước Thịnh</Text>
              </View>
            </View>
          </View>

          <View style={styles.wrapElementVideo}>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center'}}>
                <Image style={styles.imgStyle} source={require('../../img/mvHot/mv3.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={styles.wrapView}>
              </View>
              <View style={styles.wrapTextView}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>678K</Text>
              </View>
              <Text style={[styles.textVideoTittle,{marginRight: 5}]}>Sống Xa Anh Chẳng Dễ Dàng</Text>
              <Text style={styles.textVideoContent}>Bảo Anh</Text>
            </View>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center', marginLeft: 5}}>
                <Image style={[styles.imgStyle, {alignSelf:'flex-end'}]} source={require('../../img/mvHot/mv4.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={[styles.wrapView, {marginLeft: 10}]}>
              </View>
              <View style={[styles.wrapTextView, {marginLeft: 10}]}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>123k</Text>
              </View>
              <View style={[styles.wrapVideoContent, {marginLeft: 5}]}>
                <Text style={styles.textVideoTittle}>Mashup Christmas Songs</Text>
                <Text style={styles.textVideoContent}>JSOL, CARA</Text>
              </View>
            </View>
          </View>

          <View style={styles.wrapElementVideo}>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center'}}>
                <Image style={styles.imgStyle} source={require('../../img/mvHot/mv5.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={styles.wrapView}>
              </View>
              <View style={styles.wrapTextView}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>789K</Text>
              </View>
              <Text style={[styles.textVideoTittle,{marginRight: 5}]}>Bao Giờ Lấy Chồng?</Text>
              <Text style={styles.textVideoContent}>Bích Phương</Text>
            </View>
            <View style={{flex: 0.5}}>
              <View style={{width:imageWidth / 2 - 15, height: imageWidth / 2 - 94, justifyContent: 'center', marginLeft: 5}}>
                <Image style={[styles.imgStyle, {alignSelf:'flex-end'}]} source={require('../../img/mvHot/mv6.jpg')}/>
                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')}/>
              </View>
              <View style={[styles.wrapView,{marginLeft: 10}]}>
              </View>
              <View style={[styles.wrapTextView, {marginLeft: 10}]}>
                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')}/>
                <Text style={styles.textView}>592K</Text>
              </View>
              <View style={[styles.wrapVideoContent, {marginLeft: 5}]}>
                <Text style={styles.textVideoTittle}>Em Sai Rồi Anh Xin Lỗi Em Đi</Text>
                <Text style={styles.textVideoContent}>Chi Pu</Text>
              </View>
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
    height: imageWidth * 1.5,
    marginTop: 30,
  },
  wrapTittle:{
    flex: 0.1,
    marginLeft: 10,
    marginRight: 10
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
  wrapAllVideo:{
    flex: 0.9,
    marginLeft: 10,
    marginRight:10,
    flexDirection: 'column',
  },
  wrapElementVideo:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  imgStyle:{
    width:imageWidth / 2 - 15,
    height: imageWidth / 2 - 94,
    borderRadius: 5,
  },
  wrapVideoContent:{
    flexDirection:'column',
    flexWrap:'wrap',
  },
  textVideoTittle:{
    fontFamily:'sans-serif-medium',
    color:'#2d2d2d',
    fontSize: 15,
  },
  textVideoContent:{
    fontFamily:'sans-serif-medium',
    fontSize: 15,
  },
  wrapView:{
    width: 65,
    height: 25,
    position:'absolute',
    backgroundColor: 'black',
    opacity: 0.5,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 25
  },
  wrapTextView:{
    width: 65,
    height: 25,
    position:'absolute',
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 25,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textView:{
    fontFamily:'sans-serif-condensed',
    color:'white',
    alignSelf:'center',
    marginRight: 7
  },
  iconPlayView:{
    width: 15,
    height: 16,
    alignSelf:'center',
    marginLeft: 7
  },
  iconPlayCenter:{
    position:'absolute',
    width: 33,
    height: 33,
    alignSelf:'center'
  }
});
