import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,
        TouchableHighlight, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class Suggestion extends Component {
    render() {
        return (
            <View style={styles.wrapAll}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Screen_DetailSuggestion'); }} style={styles.touchTitle} underlayColor='#C4BABA'>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.title}>CÓ THỂ BẠN THÍCH</Text>
                        <Text style={styles.content}>Xem thêm</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.wrapSuggestionSong}>
                    <View style={styles.wrapTopElement}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar1.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Người Lạ Ơi</Text>
                            <View />
                            <Text style={styles.textTopContent}>Karik, Orange, Superbrothers</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                    <View style={styles.wrapTopElement}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar2.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Finesse (Remix)</Text>
                            <View />
                            <Text style={styles.textTopContent}>Bruno Mars, Cardi B</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconPlayVideo} source={require('../../img/icon/play_video.png')} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                    <View style={styles.wrapTopElement}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar3.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Thương Nhau Nhé</Text>
                            <View />
                            <Text style={styles.textTopContent}>Đức Phúc, Thùy Chi</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <View style={styles.iconPlayVideo} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                    <View style={styles.wrapTopElement}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar4.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Anh Vẫn Cứ Lo</Text>
                            <View />
                            <Text style={styles.textTopContent}>JSOL</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <View style={styles.iconPlayVideo} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                    <View style={styles.wrapTopElement}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar5.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>Tự Lau Nước Mắt</Text>
                            <View />
                            <Text style={styles.textTopContent}>Mr.Siro</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <View style={styles.iconPlayVideo} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                    <View style={[styles.wrapTopElement, { marginBottom: 15 }]}>
                        <Image style={styles.wrapImgTop} source={require('../../img/suggestion/avatar6.jpg')} />
                        <View style={styles.wrapTextTop}>
                            <Text style={styles.textTopTittle}>If You Leave Me Now</Text>
                            <View />
                            <Text style={styles.textTopContent}>Charlie Puth, Boyz II Men</Text>
                        </View>
                        <View style={styles.wrapIcon}>
                            <View style={styles.iconPlayVideo} />
                            <Image style={styles.iconMore} source={require('../../img/icon/more.png')} />
                        </View>
                    </View>
                </View>
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
    wrapSuggestionSong: {
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
    wrapImgTop: {
        width: imageWidth / 6.7,
        height: imageWidth / 6.7,
        alignSelf: 'center',
        marginLeft: 10,
        borderRadius: 5
    },
    wrapTextTop: {
        width: imageWidth / 2,
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
    wrapIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 0,
        alignItems: 'center',
        position: 'absolute'
    },
    iconPlayVideo: {
        width: imageWidth / 12,
        height: imageWidth / 12,
        alignSelf: 'center',
        //marginLeft: 30
    },
    iconMore: {
        width: imageWidth / 8,
        height: imageWidth / 8,
        alignSelf: 'center',
        //marginLeft: 15
    }
});
