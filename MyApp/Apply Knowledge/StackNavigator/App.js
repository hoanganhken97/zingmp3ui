import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {HomeStack} from './Router';

export default class App extends Component {
  render() {
    return (
      <HomeStack />
    );
  }
}
