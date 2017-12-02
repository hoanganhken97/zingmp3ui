import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      HOTEN:"",
      USERNAME:"",
      PASSWORD:"",
      result:"..."
    }
  }

  clickPlus(){
    console.log("+++++");
    fetch("http://10.0.128.173:8080/DemoLive/dangky.php", {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "HOTEN"   :this.state.HOTEN,
        "USERNAME":this.state.USERNAME,
        "PASSWORD":this.state.PASSWORD
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log("++++++");
      console.log(responseJson);
      this.setState({result:responseJson.id})
    })
    .catch((error)=>{console.log(error)});
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(HOTEN)=>this.setState({HOTEN})}
          placeholder="Ho Ten"
          value={this.state.HOTEN}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(USERNAME)=>this.setState({USERNAME})}
          placeholder="Username"
          value={this.state.USERNAME}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(PASSWORD)=>this.setState({PASSWORD})}
          placeholder="Password"
          value={this.state.PASSWORD}
        />
        <TouchableOpacity style={styles.plus} onPress={()=>{this.clickPlus()}}>
          <Text style={styles.plusText}> Resister </Text>
        </TouchableOpacity>
        <View style={styles.result}>
         <Text>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:"yellow", padding: 50},
  plus:{padding:30, backgroundColor:"black", justifyContent:"center", alignItems:"center"},
  plusText:{color:"white"},
  result:{padding:30, backgroundColor:"white", justifyContent:"center", alignItems:"center"}
});
