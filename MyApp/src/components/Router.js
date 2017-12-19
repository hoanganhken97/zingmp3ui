import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Menu from './Main/Menu';

export const HomeStack = StackNavigator({
  Screen_Main: {
    screen: Shop,
    navigationOptions: {
      title: 'Screen Main',
      header: null
    }
  }
});
export const SignStack = StackNavigator({
    Screen_Authentication: {
      screen: Authentication,
      navigationOptions: {
        title: 'Screen Authentication',
        header: null
      }
    },
    Screen_ChangeInfo: {
      screen: ChangeInfo,
      navigationOptions: {
        title: 'Screen ChangeInfo',
        header: null
      }
    },
    Screen_OrderHistory: {
      screen: OrderHistory,
      navigationOptions: {
        title: 'Screen Orderhistory',
        header: null
      }
    }
});

export const SideMenu = DrawerNavigator(
    {
        HomeStack: {
            screen: HomeStack
        },
        SignStack: {
            screen: SignStack
        }
    },
    {
        initialRouteName: 'HomeStack',
        drawerWidth: 250,
        drawerPostition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);
