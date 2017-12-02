import React, {Component} from "react";
import {View, Image} from "react-native";
import TabNavigator from 'react-native-tab-navigator';

export default class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:"home"
    }
  }
  render(){
    return(
      <TabNavigator tabBarStyle={{backgroundColor:"green"}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          badgeText="1"
          renderIcon={() => <Image source={require("../Images/Home_Orange.png")} />}
          renderSelectedIcon={() => <Image source={require("../Images/Home_Black.png")} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style = {{flex:1, backgroundColor:"yellow"}}></View>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'shop'}
          title="My Shop"
          onPress={() => this.setState({ selectedTab: 'shop' })}>
          <View style = {{flex:1, backgroundColor:"red"}}></View>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'cart'}
          title="Shopping Cart"
          onPress={() => this.setState({ selectedTab: 'cart' })}>
          <View style = {{flex:1, backgroundColor:"orange"}}></View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
