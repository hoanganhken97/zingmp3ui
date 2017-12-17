import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from './Menu';
import Home from './Shop/Home/Home';

export default class Main extends Component {
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    return (
      <Drawer
        tapToClose
        openDrawerOffset={0.5}
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu />}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
