import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange' }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back to Main</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_ProductDetail')}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
