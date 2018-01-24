import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions,
        TouchableOpacity, Image, TextInput,
        ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default class DetailMV extends Component {
    constructor(props) {
        super(props);
        this.state = { isMore: false };
    }
    render() {
        const { isMore } = this.state;
        const viewNormal = (
            <View style={{ width }}>
                <View style={styles.containerTitle}>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.textTopTittle}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                        <Text>Bảo Anh</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ isMore: true })}>
                        <Image style={{ width: 25, height: 25 }} source={require('../../../img/icon/viewMoreDown.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerView}>
                    <View style={styles.wrapView}>
                        <Image style={styles.imgView} source={require('../../../img/icon/playBlack.png')} />
                        <Text style={styles.textTopTittle}>599K</Text>
                    </View>
                    <View style={styles.wrapView}>
                        <Image style={styles.imgView} source={require('../../../img/icon/favoriteBlack.png')} />
                        <Text style={styles.textTopTittle}>1,9K</Text>
                    </View>
                </View>
                <View style={{ height: 25, backgroundColor: '#FEFEFE' }} />
                <TouchableOpacity>
                    <View style={styles.containerComment1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgComment} source={require('../../../img/icon/comment.png')} />
                            <Text style={styles.txtComment1}>Bình luận (10)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.containUser}>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconUserStyle} source={require('../../../img/user/avatar.png')} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Viết bình luận'
                        underlineColorAndroid='rgba(0,0,0,0.5)'
                    />
                    <TouchableOpacity style={styles.wrapIcon}>
                        <Image style={styles.iconSendStyle} source={require('../../../img/user/send.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerComment}>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar1.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Vân Mai</Text>
                                <Text style={styles.txtTime}>1 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Bài này dành cho những ai chưa may mắn trong tình yêu (mình tuy là con gái mà vẫn thấy bài này đúng tâm trạng) !!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar2.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Tiểu Vy</Text>
                                <Text style={styles.txtTime}>9 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Ngày nào củng cày view vài 3 chục lần mà không chán bài này. :)))</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar3.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Thảo My</Text>
                                <Text style={styles.txtTime}>10 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá anh ơi, yêu bin quá</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar4.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Công Trần</Text>
                                <Text style={styles.txtTime}>11 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá nghe đúng tâm trạng cảm xúc luôn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar5.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Vũ Minh Hiếu</Text>
                                <Text style={styles.txtTime}>11 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá anh hát xúc động thật</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar2.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Thanh Vy</Text>
                                <Text style={styles.txtTime}>12 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>chị Bảo Anh thành công như cố lên cùng Mr.Siro chị nhá</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar5.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Đào Minh Tuấn</Text>
                                <Text style={styles.txtTime}>12 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá trời luôn. Ngày nào củng nghe mà ko chán. Yêu chị Bảo Anh nhìu.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar4.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Tuấn Anh</Text>
                                <Text style={styles.txtTime}>15 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Bị nghiện bài này rồi, giọng Bảo Anh trầm ấm quá.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
        const viewMore = (
            <View style={{ width }}>
                <View style={styles.containerTitle}>
                    <View style={styles.wrapTitle}>
                        <Text style={styles.textTopTittle}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                        <Text>Bảo Anh</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ isMore: false })}>
                        <Image style={{ width: 25, height: 25 }} source={require('../../../img/icon/viewMoreUp.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerLyric}>
                    <Text style={[styles.textTopTittle, { marginTop: 15, color: 'black' }]}>LỜI BÀI HÁT</Text>
                    <View style={{ marginTop: 15, marginBottom: 25 }}>
                        <Text style={styles.textTopTittle}>Nhìn vào hư không... ngước vô định vào xa xăm </Text>
                        <Text style={styles.textTopTittle}>Thở dài tiếc nuối biết bao ân hận... với một người </Text>
                        <Text style={styles.textTopTittle}>Nặng lời nhau đau vỡ trái tim, người tổn thương.. đi rồi </Text>
                        <Text style={styles.textTopTittle}>Nhận ra phải sống xa anh chẳng dễ dàng </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>Ong đã biết... cần hoa lấy mật </Text>
                        <Text style={styles.textTopTittle}>Biết đợi nắng.. sưởi ấm mỗi ngày </Text>
                        <Text style={styles.textTopTittle}>Em giờ không trẻ con như trước </Text>
                        <Text style={styles.textTopTittle}>sẽ không để lạc nhau dù một bước </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>Chorus:</Text>
                        <Text style={styles.textTopTittle}>Nếu quá khứ có trở lại </Text>
                        <Text style={styles.textTopTittle}>Hứa với anh - sẽ chẳng còn sự khờ dại và </Text>
                        <Text style={styles.textTopTittle}>sẽ yêu anh êm đềm vững chãi </Text>
                        <Text style={styles.textTopTittle}>Gió thôi gợn sóng trả lại mặt hồ yên ả </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>Có những nỗi nhớ lấn át</Text>
                        <Text style={styles.textTopTittle}>Chẳng biết vui bao giờ để nở nụ cười buồn </Text>
                        <Text style={styles.textTopTittle}>Trái tim em bây giờ chẳng khác, </Text>
                        <Text style={styles.textTopTittle}>Có cả thế giới nhưng trong lòng lại chơi vơi </Text>
                        <Text style={styles.textTopTittle}>Vì anh chính là cả cuộc đời </Text>
                        <Text style={styles.textTopTittle}>(anh chiếm hết cả cuộc đời) </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>Giang tấu: </Text>
                        <Text style={styles.textTopTittle}>Từ lâu tôi nghĩ rằng bao ngốc nghếch chịu đựng vì yêu ai cũng trải qua </Text>
                        <Text style={styles.textTopTittle}>Người yêu dỗi hờn hay trách móc là quan tâm đến ta. </Text>
                        <Text style={styles.textTopTittle}>Chẳng hiểu sao hai đứa cứ xa dần, thương nhưng vẫn không sao lại gần nữa... </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>Chorus cuối: </Text>
                        <Text style={styles.textTopTittle}>Nhắm mắt nhớ phút đắm đuối </Text>
                        <Text style={styles.textTopTittle}>Lúc đôi môi anh thì thầm gọi nhẹ "babe" </Text>
                        <Text style={styles.textTopTittle}>Thắm thiết hôn từ sau </Text>
                        <Text style={styles.textTopTittle}>Có những cảm giác ám ảnh chẳng thề phai màu...</Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>(I just cant stop missing you bae...) </Text>
                        <Text style={styles.textTopTittle}>Nhưng không - ta đã kết thúc </Text>
                        <Text style={styles.textTopTittle}>Chẳng thể nói ra lời thật lòng muộn màng để nói câu </Text>
                        <Text style={styles.textTopTittle}>"Em xin lỗi..." </Text>
                        <Text style={styles.textTopTittle}>Buông xuôi quá khứ chấp nhận vùi bao nhớ thương </Text>
                        <Text style={styles.textTopTittle}>dù ngọt đắng... cũng chỉ vì anh </Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}></Text>
                        <Text style={styles.textTopTittle}>End: </Text>
                        <Text style={styles.textTopTittle}>Nặng lời nhau đau vỡ trái tim, người tổn thương.. không về</Text>
                        <Text style={[styles.textTopTittle, { marginTop: 15, color: 'black' }]}>THÔNG TIN</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View>
                                <Text style={[styles.textTopTittle, { marginTop: 10 }]}>Nhạc sĩ</Text>
                                <Text style={[styles.textTopTittle, { marginTop: 10 }]}>Thể Loại</Text>
                                <Text style={[styles.textTopTittle, { marginTop: 10 }]}>Ca sĩ</Text>
                            </View>
                            <View style={{ marginLeft: 25 }}>
                                <Text style={[styles.textTopTittle, { color: '#7847A3', marginTop: 10 }]}>Bảo Anh</Text>
                                <Text style={[styles.textTopTittle, { color: '#7847A3', marginTop: 10 }]}>Mr.Siro</Text>
                                <Text style={[styles.textTopTittle, { color: '#7847A3', marginTop: 10 }]}>Việt Nam, Nhạc Trẻ</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerView}>
                    <View style={styles.wrapView}>
                        <Image style={styles.imgView} source={require('../../../img/icon/playBlack.png')} />
                        <Text style={styles.textTopTittle}>599K</Text>
                    </View>
                    <View style={styles.wrapView}>
                        <Image style={styles.imgView} source={require('../../../img/icon/favoriteBlack.png')} />
                        <Text style={styles.textTopTittle}>1,9K</Text>
                    </View>
                </View>
                <View style={{ height: 25, backgroundColor: '#FEFEFE' }} />
                <TouchableOpacity>
                    <View style={styles.containerComment1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgComment} source={require('../../../img/icon/comment.png')} />
                            <Text style={styles.txtComment1}>Bình luận (10)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.containUser}>
                    <View style={styles.wrapIcon}>
                        <Image style={styles.iconUserStyle} source={require('../../../img/user/avatar.png')} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Viết bình luận'
                        underlineColorAndroid='rgba(0,0,0,0.5)'
                    />
                    <TouchableOpacity style={styles.wrapIcon}>
                        <Image style={styles.iconSendStyle} source={require('../../../img/user/send.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerComment}>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar1.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Vân Mai</Text>
                                <Text style={styles.txtTime}>1 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Bài này dành cho những ai chưa may mắn trong tình yêu (mình tuy là con gái mà vẫn thấy bài này đúng tâm trạng) !!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar2.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Tiểu Vy</Text>
                                <Text style={styles.txtTime}>9 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Ngày nào củng cày view vài 3 chục lần mà không chán bài này. :)))</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar3.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Thảo My</Text>
                                <Text style={styles.txtTime}>10 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá anh ơi, yêu bin quá</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar4.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Công Trần</Text>
                                <Text style={styles.txtTime}>11 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá nghe đúng tâm trạng cảm xúc luôn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar5.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Vũ Minh Hiếu</Text>
                                <Text style={styles.txtTime}>11 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá anh hát xúc động thật</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar2.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Thanh Vy</Text>
                                <Text style={styles.txtTime}>12 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>chị Bảo Anh thành công như cố lên cùng Mr.Siro chị nhá</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar5.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Đào Minh Tuấn</Text>
                                <Text style={styles.txtTime}>12 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Hay quá trời luôn. Ngày nào củng nghe mà ko chán. Yêu chị Bảo Anh nhìu.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.wrapRowComment}>
                        <Image style={styles.avatarStyle} source={require('../../../img/detailComment/avatar4.jpg')} />
                        <View style={styles.wrapRowContent}>
                            <View style={styles.wrapName}>
                                <Text style={styles.txtName}>Tuấn Anh</Text>
                                <Text style={styles.txtTime}>15 ngày trước</Text>
                            </View>
                            <View style={styles.wrapComment}>
                                <Text style={styles.txtComment}>Bị nghiện bài này rồi, giọng Bảo Anh trầm ấm quá.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
        const checkView = isMore ? viewMore : viewNormal;
        return (
            <View style={styles.container}>
                <Image style={styles.imgBackGround} source={require('../../../img/detailMV/mv.jpg')} />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/icon/backWhite.png')} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.wrapIconHeader}>
                            <Image style={styles.iconStyle} source={require('../../../img/icon/favorite.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapIconHeader}>
                            <Image style={styles.iconStyle} source={require('../../../img/icon/share.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerTimeLine}>
                    <View style={styles.wrapTimeLine}>
                        <Text style={styles.txtTime1}>00:53</Text>
                        <Text style={{ color: '#8e44ad', marginBottom: 5, fontWeight: 'bold', fontSize: 25 }}>___</Text>
                        <View style={{ backgroundColor: '#8e44ad', width: 10, height: 10, borderRadius: 10 / 2, marginBottom: 5 }} />
                        <Text style={{ color: '#E6E8EC', marginBottom: 5, fontWeight: 'bold', fontSize: 25 }}>____________________</Text>
                        <Text style={styles.txtTime1}>07:55</Text>
                        <Image style={{ width: 20, height: 20 }} source={require('../../../img/icon/fullscreen.png')} />
                    </View>
                </View>
                <View style={styles.containerVideo}>
                    <Image style={{ width: 33, height: 33 }} source={require('../../../img/icon/video.png')} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: '#ededed' }}>
                        { checkView }
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
        paddingBottom: 15,
        backgroundColor: '#FEFEFE',
    },
    imgBackGround: {
        width,
        height: (width * 9) / 16,
    },
    header: {
        width,
        height: width / 7,
        // backgroundColor: 'black',
        // opacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute'
    },
    wrapIconHeader: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    containerTimeLine: {
        width,
        height: (width * 9) / 16,
        position: 'absolute',
        justifyContent: 'flex-end',
    },
    wrapTimeLine: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 15
    },
    txtTime1: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    containerVideo: {
        width,
        height: (width * 9) / 16,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        width,
        height: width / 10,
        backgroundColor: '#ededed',
        justifyContent: 'space-around',
    },
    imgView: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    wrapView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTopTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15
    },
    containerTitle: {
        backgroundColor: '#ededed',
        borderBottomWidth: 0.5,
        marginTop: 15,
        paddingBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    wrapTitle: {
        backgroundColor: '#ededed',
    },
    containerLyric: {
        backgroundColor: '#FEFEFE',
        paddingHorizontal: 10,
    },
    containerComment1: {
        flexDirection: 'row',
        alignItems: 'center',
        height: width / 10,
        backgroundColor: '#ededed',
        justifyContent: 'space-between'
    },
    imgComment: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 10
    },
    txtComment1: {
        fontFamily: 'sans-serif-medium',
        color: '#7847A3',
        fontSize: 15,
    },
    containUser: {
        width,
        height: width / 6,
        backgroundColor: '#ededed',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapIcon: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconUserStyle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    textInput: {
        width: (width / 7) * 5,
        height: width / 9,
        backgroundColor: '#ededed',
        fontSize: 15,
        paddingLeft: 10,
        fontFamily: 'sans-serif-medium',
    },
    iconSendStyle: {
        width: 25,
        height: 25
    },
    containerComment: {
        paddingBottom: 15,
        backgroundColor: '#FEFEFE'
    },
    wrapRowComment: {
        marginTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    avatarStyle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    wrapRowContent: {
        flexDirection: 'column',
        flex: 1
    },
    wrapName: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    txtName: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15
    },
    txtTime: {
        fontFamily: 'sans-serif-medium',
        fontSize: 14,
    },
    wrapComment: {
        flexWrap: 'wrap',
        marginLeft: 10,
        flexDirection: 'row',
    },
    txtComment: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 14
    },
});
