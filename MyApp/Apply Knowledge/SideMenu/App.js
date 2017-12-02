import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {SideMenu} from './Router';

export default class App extends Component {
  render() {
    return (
      <SideMenu />
    );
  }
}
