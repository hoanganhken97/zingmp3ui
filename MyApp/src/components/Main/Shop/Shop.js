import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

import Global from '../../../components/Global';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

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
            types: [],
            topProducts: [],
            cartArray: []
        };
        Global.addProductToCart = this.addProductToCart.bind(this);
        Global.increaseQuantity = this.increaseQuantity.bind(this);
        Global.decreaseQuantity = this.decreaseQuantity.bind(this);
        Global.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        initData()
        .then(resJSON => {
            const { type, product } = resJSON;
            this.setState({ types: type, topProducts: product });
        });
        getCart()
        .then(cartArray => this.setState({ cartArray }));
    }

    addProductToCart(product) {
        this.setState(
            { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
            () => saveCart(this.state.cartArray)
        );
    }

    increaseQuantity(productID) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productID) return e;
            return { product: e.product, quantity: e.quantity + 1 };
        });
        this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }

    decreaseQuantity(productID) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productID) return e;
            return { product: e.product, quantity: e.quantity - 1 };
        });
        this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }

    removeProduct(productID) {
        const newCart = this.state.cartArray.filter(e => e.product.id !== productID);
        this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }

    openMenu() {
        const { navigation } = this.props;
        navigation.navigate('DrawerOpen');
    }

    render() {
        const { types, selectedTab, topProducts, cartArray } = this.state;
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
                        <Home navigation={this.props.navigation} types={types} topProducts={topProducts} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                    selected={selectedTab === 'cart'}
                    title="Cart"
                    onPress={() => this.setState({ selectedTab: 'cart' })}
                    renderIcon={() => <Image source={cartIcon} style={styles.iconTab} />}
                    renderSelectedIcon={() => <Image source={cartIconSelect} style={styles.iconTab} />}
                    selectedTitleStyle={{ fontFamily: 'sans-serif-medium' }}
                    badgeText={cartArray.length}
                    >
                        <Cart navigation={this.props.navigation} cartArray={cartArray} />
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
