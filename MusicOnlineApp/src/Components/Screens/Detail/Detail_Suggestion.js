import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,
        TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailSuggestion extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                </TouchableOpacity>
                <View style={styles.wrapText}>
                    <Text style={styles.title}>CÓ THỂ BẠN THÍCH</Text>
                </View>
                <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })}>
                    <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.wrapShuffle}>
                  <Image style={styles.imgShuffle} source={require('../../../img/icon/shuffle_album.png')} />
                  <Text style={styles.txtShuffle} >NGHE NGẪU NHIÊN</Text>
              </View>
              <View style={styles.wrapDownload}>
                <Image style={styles.imgDownload} source={require('../../../img/icon/download.png')} />
                <Text style={styles.textDownload}>Download</Text>
                <Image style={styles.imgChoose} source={require('../../../img/icon/choose.png')} />
              </View>
              <View style={styles.wrapSuggestionSong}>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar1.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Người Lạ Ơi</Text>
                          <View />
                          <Text style={styles.textTopContent}>Karik, Orange, Superbrothers</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar2.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Finesse (Remix)</Text>
                          <View />
                          <Text style={styles.textTopContent}>Bruno Mars, Cardi B</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar3.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Thương Nhau Nhé</Text>
                          <View />
                          <Text style={styles.textTopContent}>Đức Phúc, Thùy Chi</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar4.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Anh Vẫn Cứ Lo</Text>
                          <View />
                          <Text style={styles.textTopContent}>JSOL</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar5.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Tự Lau Nước Mắt</Text>
                          <View />
                          <Text style={styles.textTopContent}>Mr.Siro</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/suggestion/avatar6.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>If You Leave Me Now</Text>
                          <View />
                          <Text style={styles.textTopContent}>Charlie Puth, Boyz II Men</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/detailSuggestion/avatar7.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>I Want You Now</Text>
                          <View />
                          <Text style={styles.textTopContent}>Hương Tràm</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/detailSuggestion/avatar8.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Like Home</Text>
                          <View />
                          <Text style={styles.textTopContent}>Eminem, Alicia Keys</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/detailSuggestion/avatar9.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Talk To Me(Có Nên Dừng Lại?)</Text>
                          <View />
                          <Text style={styles.textTopContent}>Chi Pu</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
                  <View style={styles.wrapTopElement}>
                      <Image style={styles.wrapImgTop} source={require('../../../img/detailSuggestion/avatar10.jpg')} />
                      <View style={styles.wrapTextTop}>
                          <Text style={styles.textTopTittle}>Chuyện Anh Vẫn Chưa Kể</Text>
                          <View />
                          <Text style={styles.textTopContent}>Chi Dân</Text>
                      </View>
                      <View style={styles.wrapIcon}>
                          <View style={styles.iconPlayVideo} />
                          <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                      </View>
                  </View>
              </View>
            </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        width: imageWidth,
        flex: 1,
        paddingBottom: 15,
        backgroundColor: '#FEFEFE',
    },
    header: {
        width,
        height: width / 7,
        backgroundColor: '#FEFEFE',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapIconHeader: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    wrapText: {
        width: (width / 7) * 5,
        height: width / 9,
        backgroundColor: '#FEFEFE',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10,
    },
    wrapper: {
        width: imageWidth,
        //height: imageWidth * 2 + 200,
        backgroundColor: '#FEFEFE',
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
        // marginTop: 15
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
    wrapShuffle: {
        width: imageWidth / 2,
        borderRadius: imageWidth / 4,
        backgroundColor: '#8e44ad',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        alignSelf: 'center',
        marginTop: 25
    },
    imgShuffle: {
        width: 25,
        height: 25
    },
    txtShuffle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        color: 'white',
        marginLeft: 10
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
    wrapTime: {
        flexDirection: 'row',
        alignItems: 'center',
        height: imageWidth / 10
    },
    wrapDownload: {
        flexDirection: 'row',
        alignItems: 'center',
        height: imageWidth / 10,
        borderBottomWidth: 0.5,
        marginTop: 15
    },
    imgTime: {
        width: 22,
        height: 22,
        marginLeft: 7,
    },
    imgDownload: {
        width: 22,
        height: 22,
        marginLeft: 10
    },
    imgChoose: {
        width: 22,
        height: 22,
        position: 'absolute',
        right: 10
    },
    textDownload: {
        alignSelf: 'center',
        fontFamily: 'sans-serif-medium',
        color: '#1a1a1a',
        fontSize: 15,
        marginLeft: 10
    },
    wrapSuggestion: {
        borderBottomWidth: 0.5,
        paddingBottom: 15
    },
    wrapTextSuggestion: {
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 10
    },
    textTime: {
        alignSelf: 'center',
        fontFamily: 'sans-serif-medium',
        color: '#1a1a1a',
        fontSize: 15,
        marginLeft: 7
    },
    wrapSuggestionSong: {
        marginTop: 5
    },
    wrapTopElement: {
        flexDirection: 'row',
        marginTop: 10
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
