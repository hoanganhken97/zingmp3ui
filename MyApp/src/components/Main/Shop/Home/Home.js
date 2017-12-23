import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {
    render() {
        return (
        <ScrollView style={styles.wrapAll}>
            <Collection />
            <Category navigation={this.props.navigation} />
            <TopProduct navigation={this.props.navigation}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    wrapAll: {
        backgroundColor: '#d8dde0',
        flex: 1,
    }
});
