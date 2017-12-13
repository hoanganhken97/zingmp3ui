/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home_Page from './src/Components/Home.js';

export default class App extends Component {
  render() {
    return (
      <Home_Page />
    );
  }
}
