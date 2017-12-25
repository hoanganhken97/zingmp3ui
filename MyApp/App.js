/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SideMenu } from './src/components/Router';
import Cart from './src/components/Main/Shop/Cart/Cart';

export default class App extends Component {
  render() {
    return (
      <Cart />
    );
  }
}
