import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

import checkLogin from '../../../../api/checkLogin';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJpbkB5YWhvby5jb20iLCJpYXQiOjE1MTQ2MTE2NDUsImV4cGlyZSI6MTUxNDc4NDQ0NX0.COGQIRsPTEcT3SDYRQmn4ahTkhRy3l2no9ARKpTFVDU';
export default class Home extends Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log('----------------------');
    //     console.log(nextProps.topProducts);
    //     console.log('----------------------');
    // }
    componentDidMount() {
        checkLogin(token)
        .then(res => console.log('CHECK LOGIN', res))
        .catch(err => console.log('LOI CHECK LOGIN', err));
    }
    render() {
        const { types, topProducts } = this.props;
        return (
        <ScrollView style={styles.wrapAll}>
            <Collection />
            <Category navigation={this.props.navigation} types={types} />
            <TopProduct navigation={this.props.navigation} topProducts={topProducts} />
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
