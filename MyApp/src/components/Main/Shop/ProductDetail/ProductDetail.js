import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                    <Text>Back to List</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
