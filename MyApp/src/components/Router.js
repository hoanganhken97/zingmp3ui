import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Home from './Main/Shop/Home/Home';
import Menu from './Main/Menu';
import ProductList from './Main/Shop/ProductList/ProductList';
import ProductDetail from './Main/Shop/ProductDetail/ProductDetail';

export const MainStack = StackNavigator({
    Screen_Main: {
        screen: Shop,
        navigationOptions: {
            title: 'Screen Main',
            header: null
        }
    }
});

export const HomeStack = StackNavigator({
    Screen_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Screen Home',
            header: null
        }
    }
});

export const SignStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            title: 'Screen Main',
            header: null
        }
    },
    Screen_OrderHistory: {
        screen: OrderHistory,
        navigationOptions: {
            title: 'Screen Orderhistory',
            header: null
        }
    },
    Screen_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'Screen ChangeInfo',
            header: null
        }
    }
});

export const AuthStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            title: 'Screen Main',
            header: null
        }
    },
    Screen_Authentication: {
        screen: Authentication,
        navigationOptions: {
            title: 'Screen Authentication',
            header: null
        }
    }
});

export const HomeElement = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            title: 'Screen Main',
            header: null
        }
    },
    Screen_ProductList: {
        screen: ProductList,
        navigationOptions: {
            title: 'Screen ProductList',
            header: null
        }
    },
    Screen_ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'Screen ProductList',
            header: null
        }
    }
});

export const SideMenu = DrawerNavigator(
    {
        MainStack: {
            screen: MainStack
        },
        HomeStack: {
            screen: HomeStack
        },
        SignStack: {
            screen: SignStack
        },
        AuthStack: {
            screen: AuthStack
        },
        HomeElement: {
            screen: HomeElement
        }
    },
    {
        initialRouteName: 'MainStack',
        drawerWidth: 250,
        drawerPostition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);
