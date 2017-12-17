import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from './Menu';

export default class Main extends Component {
  gotoAuthentication() {
    const { navigation } = this.props;
    navigation.navigate('Screen_Authentication');
  }
  gotoChaneInfo() {
    const { navigation } = this.props;
    navigation.navigate('Screen_ChangeInfo');
  }
  gotoOrderHistory() {
    const { navigation } = this.props;
    navigation.navigate('Screen_OrderHistory');
  }
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
        content={<Menu
          openAuthentication={this.gotoAuthentication.bind(this)}
          openChangeInfo={this.gotoChaneInfo.bind(this)}
          openOrderHistory={this.gotoOrderHistory.bind(this)}
        />}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
