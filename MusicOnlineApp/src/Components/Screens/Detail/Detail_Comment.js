import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,
        TextInput, ScrollView, TouchableOpacity } from 'react-native';

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
                        <Text style={styles.title}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })}>
                        <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    </View>
                </ScrollView>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: imageWidth,
        flex: 1,
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
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10,
    },
    containerComment: {
        paddingBottom: 15
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
    }
});
