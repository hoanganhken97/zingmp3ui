import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class Chart extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Screen_DetailChart')} style={styles.touchStyle} underlayColor='#C4BABA'>
            <View style={styles.titleStyle}>
              <Text style={styles.title}>M4U CHART</Text>
              <Text style={styles.content}>Xem thêm</Text>
              <Image source={require('../../img/icon/play_black.png')} style={styles.icon} />
            </View>
          </TouchableHighlight>

        <View style={styles.wrapImg}>
            <Image style={{ width: imageWidth, height: imageWidth * 9 / 16 }} source={require('../../img/chart/chart.png')} />
            <View style={styles.wrapAvatar}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.baoanh} source={require('../../img/chart/baoanh.jpg')} />
                    <Image style={styles.top} source={require('../../img/chart/top1.png')} />
                    <Text style={styles.text}>Bảo Anh</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.mrsiro} source={require('../../img/chart/noo.jpg')} />
                    <Image style={styles.top} source={require('../../img/chart/top2.png')} />
                    <Text style={styles.text}>Noo Phước Thịnh</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.noo} source={require('../../img/chart/mrsiro.jpg')} />
                    <Image style={styles.top} source={require('../../img/chart/top3.png')} />
                    <Text style={styles.text}>Mr.Siro</Text>
                </View>
            </View>
          <TouchableHighlight onPress={() => { this.props.navigation.navigate('Screen_DetailSong'); }} style={styles.wrapSong} underlayColor='#D4C3C3'>
            <View style={{ flex: 1, flexDirection: 'row' }}>
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

        <View style={styles.wrapTopSong}>
            <View style={styles.wrapTime}>
              <Image style={styles.imgTime} source={require('../../img/icon/increase.png')} />
              <Text style={styles.textTime}>12.12.2017 - 01:00</Text>
            </View>
            <View style={styles.wrapRealSong}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen_DetailSong'); }}>
                    <View style={styles.wrapTopElement}>
                        <Text style={[styles.textTopColor, { color: '#8e44ad' }]}>01</Text>
                        <Image style={styles.wrapImgTop} source={require('../../img/chart/avatar.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Sống Xa Anh Chẳng Dễ...</Text>
                            <Text style={styles.textTopContent}>Bảo Anh</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screen_DetailMV'); }}>
                                <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                            </TouchableOpacity>
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.wrapTopElement}>
                    <Text style={[styles.textTopColor, { color: '#32c24d' }]}>02</Text>
                    <Image style={styles.wrapImgTop} source={require('../../img/chart/avatar2.jpg')} />
                    <View style={styles.wrapTextTop}>
                        <Text style={styles.textTopTittle}>Gương Mặt Lạ Lẫm</Text>
                        <Text style={styles.textTopContent}>Mr.Siro</Text>
                    </View>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                        <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                    </View>
                </View>

                <View style={styles.wrapTopElement}>
                    <Text style={[styles.textTopColor, { color: '#f39c12' }]}>03</Text>
                    <Image style={styles.wrapImgTop} source={require('../../img/chart/avatar3.jpg')} />
                    <View style={styles.wrapTextTop}>
                        <Text style={styles.textTopTittle}>Chạm Khẽ Tim Anh Một...</Text>
                        <Text style={styles.textTopContent}>Noo Phước Thịnh</Text>
                    </View>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                        <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                    </View>
                </View>

                <View style={styles.wrapTopElement}>
                    <Text style={styles.textTopOther}>04</Text>
                    <Image style={styles.wrapImgTop} source={require('../../img/chart/avatar4.jpg')} />
                    <View style={styles.wrapTextTop}>
                        <Text style={styles.textTopTittle}>Cho Em Gần Anh Thêm...</Text>
                        <Text style={styles.textTopContent}>Hương Tràm</Text>
                    </View>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                        <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                    </View>
                </View>

                <View style={styles.wrapTopElement}>
                    <Text style={styles.textTopOther}>05</Text>
                    <Image style={styles.wrapImgTop} source={require('../../img/chart/avatar5.jpg')} />
                    <View style={styles.wrapTextTop}>
                        <Text style={styles.textTopTittle}>Mặt Trời Của Em</Text>
                        <Text style={styles.textTopContent}>Phương Ly, JustaTee</Text>
                    </View>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                        <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                    </View>
                </View>
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    wrapper: {
        width: imageWidth,
        //height: imageWidth * 2 + 200,
        marginTop: 25
    },
    touchStyle: {
        width: imageWidth,
        height: imageWidth / 9,
    },
    titleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: imageWidth,
        height: imageWidth / 9,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10
    },
    content: {
        fontFamily: 'sans-serif-medium',
        color: '#7847A3',
        fontSize: 15,
        marginRight: 10
    },
    icon: {
        width: 33,
        height: 33,
        position: 'absolute',
        left: 150
    },
    wrapImg: {
        marginTop: 15
    },
    wrapAvatar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    wrapSong: {
        width: imageWidth - 20,
        height: imageWidth / 4 + 20,
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 15
    },
    baoanh: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderColor: '#8e44ad',
        borderWidth: 3,
    },
    mrsiro: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    noo: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    top: {
        width: 25,
        height: 25,
        position: 'absolute',
        marginTop: 40
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 17,
        marginTop: 15
    },
    backGround: {
        width: imageWidth - 20,
        height: imageWidth / 4 + 30,
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 5,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 5,
        alignSelf: 'center',
        marginLeft: 10
    },
    wrapTitle: {
        marginLeft: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: imageWidth / 2,
        height: imageWidth / 5,
        alignSelf: 'center'
    },
    titleTop: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: 'white',
        alignSelf: 'flex-start',
    },
    contentTop1: {
        fontFamily: 'sans-serif-condensed',
        color: 'white',
        alignSelf: 'center',
        position: 'absolute'
    },
    contentTop2: {
        fontFamily: 'sans-serif-condensed',
        color: 'white',
        alignSelf: 'flex-end',
        position: 'absolute'
    },
    wrapTopSong: {
        marginTop: 10
    },
    wrapTime: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ededed',
        height: imageWidth / 10
    },
    imgTime: {
        width: 22,
        height: 22,
        marginLeft: 7,
    },
    textTime: {
        alignSelf: 'center',
        fontFamily: 'sans-serif-medium',
        color: '#1a1a1a',
        fontSize: 15,
        marginLeft: 7
    },
    wrapRealSong: {
        marginTop: 5
    },
    wrapTopElement: {
        flexDirection: 'row',
        marginTop: 10
    },
    textTopColor: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 15,
        fontSize: 15,
    },
    textTopOther: {
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center',
        marginLeft: 15,
        fontSize: 15,
    },
    wrapImgTop: {
        width: imageWidth / 6.7,
        height: imageWidth / 6.7,
        alignSelf: 'center',
        marginLeft: 15,
        borderRadius: 5
    },
    wrapTextTop: {
        width: imageWidth / 2.3,
        height: imageWidth / 6.7,
        alignSelf: 'center',
        marginLeft: 7,
        justifyContent: 'center',
    },
    textTopTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15
    },
    textTopContent: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
    },
    iconPlayVideo: {
        width: imageWidth / 12,
        height: imageWidth / 12,
        alignSelf: 'center',
    },
    iconMore: {
        width: imageWidth / 8,
        height: imageWidth / 8,
        alignSelf: 'center',
    },
    wrapIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 0,
        alignItems: 'center',
        position: 'absolute'
    }
});
