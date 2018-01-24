import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,
        TouchableHighlight, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;

export default class TopicHot extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleStyle}>
          <Text style={styles.title}>THE BEST OF 2017</Text>
          <Text style={styles.content}>Những ca khúc ăn khách nhất 2017</Text>
        </View>

        <View style={styles.wrapImg}>
            <View style={styles.wrapElementImg}>
              <TouchableHighlight onPress={() => {}} style={styles.touch1} underlayColor='#000000'>
                <Image source={require('../../img/topicHot/topic1.jpg')} style={styles.imgStyle1} />
              </TouchableHighlight>
              <Image source={require('../../img/topicHot/avatar1.jpg')} style={styles.avatar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
              <Text style={styles.titleElement}>Nhạc Việt Hay Nhất 2017</Text>
            </View>

            <View style={styles.wrapElementImg}>
              <TouchableHighlight onPress={() => {}} style={styles.touch2} underlayColor='#000000'>
                <Image source={require('../../img/topicHot/topic2.png')} style={styles.imgStyle2} />
              </TouchableHighlight>
              <Image source={require('../../img/topicHot/avatar2.jpg')} style={styles.avatar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
              <Text style={styles.titleElement}>Song Ca/Nhóm Ca Nổi Bật 2017</Text>
            </View>

            <View style={styles.wrapElementImg}>
              <TouchableHighlight onPress={() => {}} style={styles.touch3} underlayColor='#000000'>
                <Image source={require('../../img/topicHot/topic3.jpg')} style={styles.imgStyle3} />
              </TouchableHighlight>
              <Image source={require('../../img/topicHot/avatar3.png')} style={styles.avatar} />
              <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
              <Text style={styles.titleElement}>Top US-UK Songs Of 2017</Text>
            </View>
        </View>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailTopicHot')}>
        <View style={styles.playList}>
          <Image source={require('../../img/icon/playlist.png')} style={styles.imgPlaylist} />
          <Text style={styles.textPlaylist}>Xem thêm playlist</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        width: imageWidth,
        //height: imageWidth + 195,
        flex: 1,
        marginTop: 25,
    },
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium'
    },
    content: {
        color: 'black',
        marginTop: 5,
        fontFamily: 'sans-serif-condensed',
        fontSize: 15
    },
    wrapImg: {
        flex: 3,
        marginTop: 15,
    },
    wrapElementImg: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        marginTop: 5
    },
    imgStyle1: {
        height: imageHeight,
        width: imageWidth - 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        //position:'absolute',
    },
    imgStyle2: {
        height: imageHeight,
        width: imageWidth - 20,
    },
    imgStyle3: {
        height: imageHeight,
        width: imageWidth - 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: imageHeight - 70,
        position: 'absolute'
    },
    titleElement: {
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
        position: 'absolute',
        top: imageHeight - 37,
        left: imageHeight - 50
    },
    play: {
        width: 33,
        height: 33,
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
    touch1: {
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    touch2: {
        alignItems: 'center',
    },
    touch3: {
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    playList: {
        width: imageWidth,
        height: imageWidth / 10,
        backgroundColor: '#ededed',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    imgPlaylist: {
        width: 33,
        height: 33,
        alignSelf: 'center',
        marginLeft: 10
    },
    textPlaylist: {
        fontFamily: 'sans-serif-medium',
        color: '#1a1a1a',
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 15
    },
});
