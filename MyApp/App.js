/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { SideMenu } from './src/components/Router';
import Shop from './src/components/Main/Shop/Shop';
import Main from './src/components/Main/Main';

export default class App extends Component {
  render() {
    return (
      <SideMenu />
    );
  }
}
