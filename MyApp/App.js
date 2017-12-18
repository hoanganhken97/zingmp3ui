/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { HomeStack } from './src/components/Router';
import Authentication from './src/components/Authentication/Authentication';

export default class App extends Component {
  render() {
    return (
      <Authentication />
    );
  }
}
