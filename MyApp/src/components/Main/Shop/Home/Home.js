import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

import checkLogin from '../../../../api/checkLogin';
import getToken from '../../../../api/getToken';
import refreshToken from '../../../../api/refreshToken';
import Global from '../../../Global';

export default class Home extends Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log('----------------------');
    //     console.log(nextProps.topProducts);
    //     console.log('----------------------');
    // }
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => Global.onSignIn(res.user))
        .catch(err => console.log('LOI CHECK LOGIN', err));

        setInterval(() => {
            getToken()
            .then(token => refreshToken(token));
        }, 60 * 1000);
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
