/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SideMenu } from './src/components/Router';
import ProductDetail from './src/components/Main/Shop/ProductDetail/ProductDetail';
import ProductList from './src/components/Main/Shop/ProductList/ProductList';

export default class App extends Component {
  render() {
    return (
      <ProductDetail />
    );
  }
}
