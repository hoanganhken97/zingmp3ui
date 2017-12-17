import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Main from './Main/Main';
import Menu from './Main/Menu';

export const HomeStack = StackNavigator({
  Screen_Main: {
    screen: Shop,
    navigationOptions: {
      title: 'Screen Shop'
    }
  },
  Screen_Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: 'Screen Authentication'
    }
  },
  Screen_ChangeInfo: {
    screen: ChangeInfo,
    navigationOptions: {
      title: 'Screen ChangeInfo'
    }
  },
  Screen_OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      title: 'Screen Orderhistory'
    }
  },
});

export const SideMenu = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack
    }
  },
  {
    drawerWidth: 200,
    drawerPostition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
