import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from "react-native";

export default class App extends Component{
  save = async()=>{
    try{
      await AsyncStorage.setItem("@AAA:key", "End Of The World 2012");
      console.log("SAVE OK");
    }catch(e){
      console.log(e);
    }
  }
  get = async()=>{
    try{
      var v = await AsyncStorage.getItem("@AAA:key");
      console.log(v);
    }catch(e){
      console.log(e);
    }
  }
  render(){
    return (
      <View style = {styles.wrapper}>
        <TouchableOpacity style = {styles.button}
          onPress={()=>{this.save()}}
        >
          <Text style = {styles.text}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}
          onPress={()=>{this.get()}}
        >
          <Text style = {styles.text}>GET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:"black", alignItems:"center", justifyContent:"center"},
  text:{color:"yellow"},
  button:{borderWidth:1, borderColor:"yellow", width:200, padding: 30, marginBottom: 20, alignItems:"center", justifyContent:"center"}
});
