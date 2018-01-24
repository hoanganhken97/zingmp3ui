import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class ChartWeek extends Component {
    render() {
        return (
            <View style={styles.wrapAll}>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>M4U CHART TUẦN</Text>
                </View>
                <View style={styles.wrapTopic}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailChartWeek')}>
                            <Image style={styles.imgStyle} source={require('../../img/chartWeek/vietnam.png')} />
                        </TouchableOpacity>
                        <Image style={styles.imgStyle} source={require('../../img/chartWeek/us-uk.png')} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image style={styles.imgStyle} source={require('../../img/chartWeek/k-pop.png')} />
                        <Image style={styles.imgStyle} source={require('../../img/chartWeek/top100.png')} />
                    </View>
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    wrapAll: {
        width: imageWidth,
        marginTop: 25,
    },
    wrapTitle: {
        marginLeft: 10,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium'
    },
    wrapTopic: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
    },
    //width / height = 1.4142
    imgStyle: {
        width: (imageWidth / 2) - 15,
        height: (((imageWidth / 2) - 15) * 9) / 16,
        borderRadius: 3,
    }
});
