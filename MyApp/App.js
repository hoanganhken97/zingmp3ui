/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SideMenu } from './src/components/Router';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
export default class App extends Component {
  render() {
    return (
      <OrderHistory />
    );
  }
}
