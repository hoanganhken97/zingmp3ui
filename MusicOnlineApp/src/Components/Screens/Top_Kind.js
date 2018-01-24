import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,
        TouchableHighlight, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class TopKind extends Component {
    render() {
        return (
            <View style={styles.wrapAll}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Screen_DetailTopKind'); }} style={styles.touchTitle} underlayColor='#C4BABA'>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.title}>CHỦ ĐỀ VÀ THỂ LOẠI</Text>
                        <Text style={styles.content}>Xem thêm</Text>
                    </View>
                </TouchableHighlight>
                <ScrollView style={{ marginLeft: 10 }} horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.wrapTopic}>
                        <Image style={styles.imgStyleR} source={require('../../img/Topic_Kind/nhachot.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/bolero.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/casivietnam.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/gym.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/bathu.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/cuoituan.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/caphe.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/lamviec.jpg')} />
                        <Image style={styles.imgStyle} source={require('../../img/Topic_Kind/acoustic.jpg')} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapAll: {
      width: imageWidth,
      marginTop: 25,
    },
    touchTitle: {
        width: imageWidth,
        height: imageWidth / 9,
    },
    wrapTitle: {
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
    wrapTopic: {
      marginRight: 10,
      flexDirection: 'row',
      marginTop: 15,
    },
    imgStyleR: {
      width: imageWidth / 2.5,
      height: ((imageWidth / 2.5) * 9) / 16,
      borderRadius: 3,
    },
    imgStyle: {
      width: imageWidth / 2.5,
      height: ((imageWidth / 2.5) * 9) / 16,
      borderRadius: 3,
      marginLeft: 10
    },
});
