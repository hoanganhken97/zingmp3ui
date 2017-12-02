import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class User extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <Text>User</Text>
      </View>
    );
  }
}
