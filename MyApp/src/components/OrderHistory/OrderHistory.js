import React, { Component } from 'react';
import { View, Text, TouchableOpacity,
        StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import iconBack from '../../../src/img/appIcon/back_white.png';

const { width, height } = Dimensions.get('window');
export default class OrderHistory extends Component {
    render() {
    const { wrapAll, header, headerText, iconBackStyle,
            body, wrapAllElement, wrapElement, titleStyle } = styles;
    return (
        <View style={wrapAll}>
            <View style={header}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                    <Image source={iconBack} style={iconBackStyle} />
                </TouchableOpacity>
                <Text style={headerText}>Order History</Text>
                <View style={iconBackStyle} />
            </View>
            <View style={body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={wrapAllElement}>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order id:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>ORD1</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order time:</Text>
                            <Text style={{ color: '#C52F79', fontSize: 15 }}>25-12-2017 01:33 AM</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Status:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>Pending</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Total:</Text>
                            <Text style={{ color: '#C52F79', fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace' }}>400$</Text>
                        </View>
                    </View>
                    <View style={wrapAllElement}>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order id:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>ORD1</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order time:</Text>
                            <Text style={{ color: '#C52F79', fontSize: 15 }}>25-12-2017 01:33 AM</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Status:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>Pending</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Total:</Text>
                            <Text style={{ color: '#C52F79', fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace' }}>400$</Text>
                        </View>
                    </View>
                    <View style={wrapAllElement}>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order id:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>ORD1</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order time:</Text>
                            <Text style={{ color: '#C52F79', fontSize: 15 }}>25-12-2017 01:33 AM</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Status:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>Pending</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Total:</Text>
                            <Text style={{ color: '#C52F79', fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace' }}>400$</Text>
                        </View>
                    </View>
                    <View style={wrapAllElement}>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order id:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>ORD1</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order time:</Text>
                            <Text style={{ color: '#C52F79', fontSize: 15 }}>25-12-2017 01:33 AM</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Status:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>Pending</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Total:</Text>
                            <Text style={{ color: '#C52F79', fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace' }}>400$</Text>
                        </View>
                    </View>
                    <View style={wrapAllElement}>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order id:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>ORD1</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Order time:</Text>
                            <Text style={{ color: '#C52F79', fontSize: 15 }}>25-12-2017 01:33 AM</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Status:</Text>
                            <Text style={{ color: '#276BFC', fontSize: 15 }}>Pending</Text>
                        </View>
                        <View style={wrapElement}>
                            <Text style={titleStyle}>Total:</Text>
                            <Text style={{ color: '#C52F79', fontWeight: 'bold', fontSize: 15, fontFamily: 'monospace' }}>400$</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapAll: {
        flex: 1,
        backgroundColor: '#d8dde0'
    },
    header: {
        height: height / 12,
        backgroundColor: '#4267B2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff'
    },
    iconBackStyle: {
        width: 33,
        height: 33
    },
    body: {
        paddingLeft: 10,
        paddingRight: 10
    },
    wrapAllElement: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        height: width / 3,
        justifyContent: 'space-around',
        marginTop: 10
    },
    wrapElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center'
    },
    titleStyle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },

});
