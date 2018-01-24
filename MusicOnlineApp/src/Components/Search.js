import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions,
        TouchableOpacity, Image, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

export default class Search extends Component {
    render() {
        const { check } = this.props.navigation.state.params;
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => { check ? this.props.navigation.navigate('MainStackNavigator') : this.props.navigation.navigate('UserStackNavigator'); }}>
                        <Image style={styles.iconStyle} source={require('../img/search/back.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nhập từ khóa'
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <TouchableOpacity style={styles.wrapIcon}>
                        <Image style={styles.iconStyle} source={require('../img/search/mic.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>TỪ KHÓA HOT</Text>
                </View>
                <View style={styles.wrapKeyHot}>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>m4u chart</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>nguoi la oi</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>vi yeu ma den</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>masew</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>karik</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>havana</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>son tung mtp</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>mr.siro</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>bao anh</Text>
                    </View>
                    <View style={styles.wrapElement}>
                        <Text style={styles.txtKey}>dong nhi</Text>
                    </View>
                </View>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>LỊCH SỬ TÌM KIẾM</Text>
                    <Text style={styles.content}>Xóa</Text>
                </View>
                <View style={styles.wrapHistory}>
                    <Image style={styles.iconStyle} source={require('../img/search/history.png')} />
                    <Text style={styles.txtHistory}>nguoi la oi</Text>
                    <Image style={styles.iconHistory} source={require('../img/search/delete.png')} />
                </View>
                <View style={styles.wrapHistory}>
                    <Image style={styles.iconStyle} source={require('../img/search/history.png')} />
                    <Text style={styles.txtHistory}>song xa anh chang de dang</Text>
                    <Image style={styles.iconHistory} source={require('../img/search/delete.png')} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
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
    wrapIcon: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    textInput: {
        width: (width / 7) * 5,
        height: width / 9,
        backgroundColor: '#FEFEFE',
        fontSize: 15,
        paddingLeft: 10,
        fontFamily: 'sans-serif-medium',
    },
    wrapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width,
        height: width / 9,
        marginTop: 25
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
    wrapKeyHot: {
        width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    wrapElement: {
        height: 33,
        borderWidth: 1,
        borderColor: '#4F4F4F',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 33 / 2,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    txtKey: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: '#7847A3',
        fontWeight: '300'
    },
    wrapHistory: {
        width,
        marginTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtHistory: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: 'black',
        fontWeight: '300',
        marginLeft: 10
    },
    iconHistory: {
        right: 0,
        position: 'absolute',
        marginRight: 10
    }
});
