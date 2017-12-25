import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import map from '../../../../img/appIcon/map.png';

import phoneIcon from '../../../../img/appIcon/phone.png';
import mailIcon from '../../../../img/appIcon/mail.png';
import messageIcon from '../../../../img/appIcon/message.png';
import locationIcon from '../../../../img/appIcon/location.png';

export default class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image
                        style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={map}
                    />
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>Ký Túc Xá Khu B - ĐHQG TP.HCM</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 1672983683</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>vanminhnguyenbmt@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 1672983683</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#d8dde0' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 3
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 3
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 33,
        height: 33
    },
    infoText: {
        fontFamily: 'sans-serif-medium',
        color: '#C52F79',
    }
});
