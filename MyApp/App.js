/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SideMenu } from './src/components/Router';
import Authentication from './src/components/Authentication/Authentication';
import Menu from './src/components/Main/Menu';
export default class App extends Component {
  render() {
    return (
      <SideMenu />
    );
  }
}
