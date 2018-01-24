import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,
        TouchableHighlight, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class DetailSong extends Component {
    render() {
        return (
            <View style={{ width, height, justifyContent: 'space-between' }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/icon/backWhite.png')} />
                    </TouchableOpacity>
                    <View style={styles.wrapText}>
                        <Text style={styles.title}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                        <Text style={styles.artist}>Bảo Anh</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIconHeader}>
                        <Image style={styles.iconStyle} source={require('../../../img/icon/moreWhite.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Swiper
                        width={width} height={height}
                        dot={<View
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: width + 37,
                            }}
                        />}
                        activeDot={<View
                            style={{
                                backgroundColor: '#8e44ad',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: width + 37,
                            }}
                        />}
                    >
                        <View style={styles.container}>
                            <View style={styles.wrapCover}>
                                <Image style={styles.coverStyle} source={require('../../../img/detailSong/background.jpg')} />
                            </View>
                            <View style={styles.wrapLyric}>
                                <Text style={styles.txtLyric}>Em giờ không trẻ con như trước</Text>
                            </View>
                            <View style={styles.wrapTool}>
                                <Image style={{ width: 37, height: 37 }} source={require('../../../img/icon/play_videoWhite.png')} />
                                <Image style={styles.imgTool} source={require('../../../img/icon/favorite.png')} />
                                <Image style={styles.imgTool} source={require('../../../img/icon/downloadWhite.png')} />
                                <Image style={styles.imgTool} source={require('../../../img/icon/share.png')} />
                                <Image style={styles.imgTool} source={require('../../../img/icon/moreWhite.png')} />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.containerLyric}>
                                    <Text style={styles.txtLyric}>BÀI HÁT: Sống Xa Anh Chẳng Dễ Dàng</Text>
                                    <Text style={styles.txtLyric}>Ca Sĩ: Bảo Anh</Text>
                                    <View style={{ marginTop: 25, marginBottom: 25, alignItems: 'center', flexWrap: 'wrap', paddingHorizontal: 25 }}>
                                        <Text style={styles.txtLyric}>Nhìn vào hư không... ngước vô định vào xa xăm </Text>
                                        <Text style={styles.txtLyric}>Thở dài tiếc nuối biết bao ân hận... với một người </Text>
                                        <Text style={styles.txtLyric}>Nặng lời nhau đau vỡ trái tim,</Text>
                                        <Text style={styles.txtLyric}>người tổn thương.. đi rồi</Text>
                                        <Text style={styles.txtLyric}>Nhận ra phải sống xa anh chẳng dễ dàng </Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>Ong đã biết... cần hoa lấy mật </Text>
                                        <Text style={styles.txtLyric}>Biết đợi nắng.. sưởi ấm mỗi ngày </Text>
                                        <Text style={[styles.txtLyric, { color: '#FFFF31' }]}>Em giờ không trẻ con như trước </Text>
                                        <Text style={styles.txtLyric}>sẽ không để lạc nhau dù một bước </Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>Chorus:</Text>
                                        <Text style={styles.txtLyric}>Nếu quá khứ có trở lại </Text>
                                        <Text style={styles.txtLyric}>Hứa với anh - sẽ chẳng còn sự khờ dại và </Text>
                                        <Text style={styles.txtLyric}>sẽ yêu anh êm đềm vững chãi </Text>
                                        <Text style={styles.txtLyric}>Gió thôi gợn sóng trả lại mặt hồ yên ả </Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>Có những nỗi nhớ lấn át</Text>
                                        <Text style={styles.txtLyric}>Chẳng biết vui bao giờ để nở nụ cười buồn </Text>
                                        <Text style={styles.txtLyric}>Trái tim em bây giờ chẳng khác, </Text>
                                        <Text style={styles.txtLyric}>Có cả thế giới nhưng trong lòng lại chơi vơi </Text>
                                        <Text style={styles.txtLyric}>Vì anh chính là cả cuộc đời </Text>
                                        <Text style={styles.txtLyric}>(anh chiếm hết cả cuộc đời) </Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>Giang tấu: </Text>
                                        <Text style={styles.txtLyric}>Từ lâu tôi nghĩ rằng bao ngốc nghếch chịu đựng</Text>
                                        <Text style={styles.txtLyric}>vì yêu ai cũng trải qua </Text>
                                        <Text style={styles.txtLyric}>Người yêu dỗi hờn hay trách móc là quan tâm đến ta. </Text>
                                        <Text style={styles.txtLyric}>Chẳng hiểu sao hai đứa cứ xa dần,</Text>
                                        <Text style={styles.txtLyric}>thương nhưng vẫn không sao lại gần nữa...</Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>Chorus cuối: </Text>
                                        <Text style={styles.txtLyric}>Nhắm mắt nhớ phút đắm đuối </Text>
                                        <Text style={styles.txtLyric}>Lúc đôi môi anh thì thầm gọi nhẹ "babe" </Text>
                                        <Text style={styles.txtLyric}>Thắm thiết hôn từ sau </Text>
                                        <Text style={styles.txtLyric}>Có những cảm giác ám ảnh chẳng thề phai màu...</Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>(I just cant stop missing you bae...) </Text>
                                        <Text style={styles.txtLyric}>Nhưng không - ta đã kết thúc </Text>
                                        <Text style={styles.txtLyric}>Chẳng thể nói ra lời thật lòng muộn màng để nói câu </Text>
                                        <Text style={styles.txtLyric}>"Em xin lỗi..." </Text>
                                        <Text style={styles.txtLyric}>Buông xuôi quá khứ chấp nhận vùi bao nhớ thương </Text>
                                        <Text style={styles.txtLyric}>dù ngọt đắng... cũng chỉ vì anh </Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}></Text>
                                        <Text style={styles.txtLyric}>End:</Text>
                                        <Text style={styles.txtLyric}>Nặng lời nhau đau vỡ trái tim,</Text>
                                        <Text style={styles.txtLyric}>người tổn thương.. không về</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.containerFooter}>
                    <View style={styles.containerTime}>
                        <Text style={styles.txtTime}>01:12</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.timeLineColor}>_________</Text>
                            <View style={{ backgroundColor: '#8e44ad', width: 10, height: 10, borderRadius: 10 / 2 }} />
                            <Text style={styles.timeLine}>_____________________________________</Text>
                        </View>
                        <Text style={styles.txtTime}>04:16</Text>
                    </View>
                    <View style={styles.containerSelect}>
                        <Image style={styles.imgSelect} source={require('../../../img/icon/shuffle.png')} />
                        <Image style={styles.imgSelect} source={require('../../../img/icon/prev.png')} />
                        <Image style={styles.imgSelect} source={require('../../../img/icon/pause.png')} />
                        <Image style={styles.imgSelect} source={require('../../../img/icon/next.png')} />
                        <Image style={styles.imgSelect} source={require('../../../img/icon/repeat.png')} />
                    </View>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4F322E',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    wrapCover: {
        width: width - 100,
        height: width - 100,
        borderRadius: (width - 100) / 2,
        marginTop: 30
    },
    coverStyle: {
        width: width - 100,
        height: width - 100,
        borderRadius: (width - 100) / 2
    },
    wrapLyric: {
        width: width - 100,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    wrapTool: {
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imgTool: {
        width: 25,
        height: 25
    },
    txtLyric: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginTop: 7
    },
    containerLyric: {
        alignItems: 'center',
        paddingTop: 25
    },
    header: {
        width,
        height: width / 7,
        backgroundColor: '#4F322E',
        // opacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapIconHeader: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 23,
        height: 23,
    },
    wrapText: {
        width: (width / 7) * 5,
        height: width / 9,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10,
    },
    artist: {
        color: '#C9C9C9',
        fontSize: 14,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10,
    },
    containerFooter: {
        backgroundColor: '#4F322E',
        width,
        height: width / 3,
    },
    containerSelect: {
        flexDirection: 'row',
        width,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25
    },
    imgSelect: {
        width: 33,
        height: 33
    },
    containerTime: {
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtTime: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        color: 'white',
        marginHorizontal: 10
    },
    timeLine: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 12
    },
    timeLineColor: {
        color: '#8e44ad',
        fontWeight: 'bold',
        marginBottom: 12,
        fontSize: 15,
    }
});
