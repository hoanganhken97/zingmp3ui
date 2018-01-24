import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,
        TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailChart extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                </TouchableOpacity>
                <View style={styles.wrapText}>
                    <Text style={styles.title}>M4U CHART</Text>
                </View>
                <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })}>
                    <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapTime}>
                  <Image style={styles.imgTime} source={require('../../../img/icon/increase.png')} />
                  <Text style={styles.textTime}>12.12.2017 - 01:00</Text>
                </View>

              <View style={styles.wrapImg}>
                  <Image source={require('../../../img/chart/chart.png')} />
                  <View style={styles.wrapAvatar}>
                      <View style={{ alignItems: 'center' }}>
                          <Image style={styles.baoanh} source={require('../../../img/chart/baoanh.jpg')} />
                          <Image style={styles.top} source={require('../../../img/chart/top1.png')} />
                          <Text style={styles.text}>Bảo Anh</Text>
                      </View>
                      <View style={{ alignItems: 'center' }}>
                          <Image style={styles.mrsiro} source={require('../../../img/chart/noo.jpg')} />
                          <Image style={styles.top} source={require('../../../img/chart/top2.png')} />
                          <Text style={styles.text}>Noo Phước Thịnh</Text>
                      </View>
                      <View style={{ alignItems: 'center' }}>
                          <Image style={styles.noo} source={require('../../../img/chart/mrsiro.jpg')} />
                          <Image style={styles.top} source={require('../../../img/chart/top3.png')} />
                          <Text style={styles.text}>Mr.Siro</Text>
                      </View>
                  </View>
                <TouchableHighlight onPress={() => {}} style={styles.wrapSong} underlayColor='#D4C3C3'>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.backGround} source={require('../../../img/chart/background.png')} />
                    <Image style={styles.avatar} source={require('../../../img/chart/avatar.jpg')} />
                    <View style={styles.wrapTitle}>
                      <Text style={styles.titleTop}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                      <Text style={styles.contentTop1}>Bảo Anh</Text>
                      <Text style={styles.contentTop2}>Chạm đỉnh Zing: 0 lần</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.wrapShuffle}>
                  <Image style={styles.imgShuffle} source={require('../../../img/icon/shuffle_album.png')} />
                  <Text style={styles.txtShuffle} >NGHE NGẪU NHIÊN</Text>
              </View>
              <View style={styles.wrapTopSong}>
                  <View style={styles.wrapDownload}>
                    <Image style={styles.imgDownload} source={require('../../../img/icon/download.png')} />
                    <Text style={styles.textDownload}>Download</Text>
                    <Image style={styles.imgChoose} source={require('../../../img/icon/choose.png')} />
                  </View>
                  <View style={styles.wrapSuggestion}>
                      <View style={styles.wrapTextSuggestion}>
                          <Text style={styles.textTopContent}>GỢI Ý</Text>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Image style={styles.imgDownload} source={require('../../../img/icon/trend.png')} />
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar1.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Thấy Là Yêu Thương</Text>
                              <Text style={styles.textTopContent}>OnlyC, Lou Hoàng</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                  </View>
                  <View style={styles.wrapRealSong}>
                      <View style={styles.wrapTopElement}>
                          <Text style={[styles.textTopColor, { color: '#8e44ad' }]}>01</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/chart/avatar.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Sống Xa Anh Chẳng Dễ...</Text>
                              <Text style={styles.textTopContent}>Bảo Anh</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>

                      <View style={styles.wrapTopElement}>
                          <Text style={[styles.textTopColor, { color: '#32c24d' }]}>02</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/chart/avatar2.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Gương Mặt Lạ Lẫm</Text>
                              <Text style={styles.textTopContent}>Mr.Siro</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>

                      <View style={styles.wrapTopElement}>
                          <Text style={[styles.textTopColor, { color: '#f39c12' }]}>03</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/chart/avatar3.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Chạm Khẽ Tim Anh Một...</Text>
                              <Text style={styles.textTopContent}>Noo Phước Thịnh</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>

                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>04</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/chart/avatar4.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Cho Em Gần Anh Thêm...</Text>
                              <Text style={styles.textTopContent}>Hương Tràm</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>

                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>05</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/chart/avatar5.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Mặt Trời Của Em</Text>
                              <Text style={styles.textTopContent}>Phương Ly, JustaTee</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>

                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>06</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar2.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Cùng Anh</Text>
                              <Text style={styles.textTopContent}>Ngọc Dolil, JustaTee</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>07</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar3.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Trong Trí Nhớ Của Anh</Text>
                              <Text style={styles.textTopContent}>Nguyễn Trần Trung Quân</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>08</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar4.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Em Gái Mưa</Text>
                              <Text style={styles.textTopContent}>Hương Tràm</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>09</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar5.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Chuyện Anh Vẫn Chưa Kể</Text>
                              <Text style={styles.textTopContent}>Chi Dân</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>10</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar6.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Ta Còn Yêu Nhau</Text>
                              <Text style={styles.textTopContent}>Đức Phúc</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>11</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar1.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Thấy Là Yêu Thương</Text>
                              <Text style={styles.textTopContent}>OnlyC, Lou Hoàng</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>12</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar7.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Thương Nhau Nhé</Text>
                              <Text style={styles.textTopContent}>Đức Phúc, Thùy Chi</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>13</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar8.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Yêu Chưa Bao Giờ Là Sai</Text>
                              <Text style={styles.textTopContent}>ERIK</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>14</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar9.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>1 Phút</Text>
                              <Text style={styles.textTopContent}>Andiez</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>15</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar10.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Năm Ấy</Text>
                              <Text style={styles.textTopContent}>Đức Phúc</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>16</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar11.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Túy Âm</Text>
                              <Text style={styles.textTopContent}>Xesi, Masew, Nhật...</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>17</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar12.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Yêu Từ Phía Xa</Text>
                              <Text style={styles.textTopContent}>Chi Dân</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>18</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar13.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Yêu Em Rất Nhiều</Text>
                              <Text style={styles.textTopContent}>Hoàng Tôn</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>19</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar14.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Em Biết</Text>
                              <Text style={styles.textTopContent}>Trịnh Đình Quang</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>20</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar15.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Chiều Hôm Ấy</Text>
                              <Text style={styles.textTopContent}>Jaykii</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>21</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar16.png')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Buồn Của Anh</Text>
                              <Text style={styles.textTopContent}>K-ICM, Đạt G, Masew</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>22</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar17.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Người Cũ Sao Quên</Text>
                              <Text style={styles.textTopContent}>Vương Anh Tú</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>23</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar18.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Anh Vẫn Cứ Lo</Text>
                              <Text style={styles.textTopContent}>JSOL</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>24</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar19.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Em Sai Rồi Anh Xin Lỗi Em Đi</Text>
                              <Text style={styles.textTopContent}>JSOL</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
                      </View>
                      <View style={styles.wrapTopElement}>
                          <Text style={styles.textTopOther}>25</Text>
                          <Image style={styles.wrapImgTop} source={require('../../../img/detailChart/avatar20.jpg')} />
                          <View style={styles.wrapTextTop}>
                              <Text style={styles.textTopTittle}>Cánh Hoa Tàn (Mẹ...</Text>
                              <Text style={styles.textTopContent}>Hương Tràm</Text>
                          </View>
                          <View style={styles.wrapIcon}>
                              <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                              <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                          </View>
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
    wrapTopSong: {
        marginTop: 10
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
    wrapRealSong: {
        marginTop: 5,
    },
    wrapTopElement: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    textTopColor: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 15,
        fontSize: 15
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
