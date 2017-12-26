import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

import homeIconSelect from '../../../img/appIcon/home.png';
import homeIcon from '../../../img/appIcon/home0.png';
import cartIconSelect from '../../../img/appIcon/cart.png';
import cartIcon from '../../../img/appIcon/cart0.png';
import searchIconSelect from '../../../img/appIcon/search.png';
import searchIcon from '../../../img/appIcon/search0.png';
import contactIconSelect from '../../../img/appIcon/contact.png';
import contactIcon from '../../../img/appIcon/contact0.png';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: []
        };
    }
    componentDidMount() {
        fetch('http://eotw2012.000webhostapp.com/api/') //eslint-disable-line
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            const { type } = resJSON;
            this.setState({ types: type });
        });
    }
    openMenu() {
        const { navigation } = this.props;
        navigation.navigate('DrawerOpen');
    }

    render() {
        const { types, selectedTab } = this.state;
        return (
            <View style={{ flex: 1 }} >
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                    selected={selectedTab === 'home'}
                    title="Home"
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    renderIcon={() => <Image source={homeIcon} style={styles.iconTab} />}
                    renderSelectedIcon={() => <Image source={homeIconSelect} style={styles.iconTab} />}
                    selectedTitleStyle={{ fontFamily: 'sans-serif-medium' }}
                    >
                        <Home navigation={this.props.navigation} types={types} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                    selected={selectedTab === 'cart'}
                    title="Cart"
                    onPress={() => this.setState({ selectedTab: 'cart' })}
                    renderIcon={() => <Image source={cartIcon} style={styles.iconTab} />}
                    renderSelectedIcon={() => <Image source={cartIconSelect} style={styles.iconTab} />}
                    selectedTitleStyle={{ fontFamily: 'sans-serif-medium' }}
                    badgeText="1"
                    >
                        <Cart navigation={this.props.navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                    selected={selectedTab === 'search'}
                    title="Search"
                    onPress={() => this.setState({ selectedTab: 'search' })}
                    renderIcon={() => <Image source={searchIcon} style={styles.iconTab} />}
                    renderSelectedIcon={() => <Image source={searchIconSelect} style={styles.iconTab} />}
                    selectedTitleStyle={{ fontFamily: 'sans-serif-medium' }}
                    >
                        <Search navigation={this.props.navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                    selected={selectedTab === 'contact'}
                    title="Contact"
                    onPress={() => this.setState({ selectedTab: 'contact' })}
                    renderIcon={() => <Image source={contactIcon} style={styles.iconTab} />}
                    renderSelectedIcon={() => <Image source={contactIconSelect} style={styles.iconTab} />}
                    selectedTitleStyle={{ fontFamily: 'sans-serif-medium' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconTab: {
        width: 23,
        height: 23
    }
});
