import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
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

export const UserStack = StackNavigator({
  ManHinh_User: {
    screen: User,
    navigationOptions: {
      title: 'Tai khoan'
    }
  },
})

export const Tabbar = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel:'HOME'
    }
  },
  User: {
    screen: UserStack,
    navigationOptions: {
      tabBarLabel:'USER'
    }
  },
},
  {
    tabBarPosition:'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#dddddd'
      },
      inactiveTintColor:'green',
      activeTintColor:'red'
    }
});

export const SideMenu = DrawerNavigator({
  Tabbar: {
    screen: Tabbar
  },
},
  {
    drawerWidth: 200,
    drawerPostition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
