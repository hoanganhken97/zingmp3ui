import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
  ManHinh_Home: {
    screen: Home,
    navigationOptions: {
      title: 'Trang chu'
    }
  },
  ManHinh_Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Chi tiet'
    }
  },
})
