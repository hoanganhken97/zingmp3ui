import React, {Component} from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      un:"",
      pa:"",
      kq:"CHUA LOGIN",
      token:"..."
    }
  }

  LOGIN(){
    fetch("http://10.0.128.173:8080/DemoJWT/taoToken.php",{
      method : "POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "USERNAME": this.state.un,
        "PASSWORD": this.state.pa
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        kq:responseJson["token"]
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <View style = {styles.box}>
          <Text>LOGIN FORM</Text>
        </View>

        <View style = {styles.box}>
          <TextInput
            style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(un)=>this.setState({un})}
            placeholder="Username"
            value={this.state.un}
          />
        </View>

        <View style = {styles.box}>
          <TextInput
            style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(pa)=>this.setState({pa})}
            placeholder="Password"
            value={this.state.pa}
          />
        </View>

        <View style = {styles.box}>
          <TouchableOpacity onPress={()=>{this.LOGIN()}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.box2}>
          <Text>{this.state.kq}</Text>
          <Text>{this.state.token}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:"yellow", padding:50},
  box:{flex:1, alignItems:"center", justifyContent:"center"},
  box2:{flex:3, alignItems:"center", justifyContent:"center"},
});
