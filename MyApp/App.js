/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SideMenu } from './src/components/Router';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';

export default class App extends Component {
  render() {
    return (
      <ChangeInfo />
    );
  }
}
