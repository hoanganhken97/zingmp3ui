import React, { Component } from 'react';
import {Text, View, ListView, Image, RefreshControl} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      refreshing:false,
      trang:0,
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }

  loadNewData(){
    this.setState({
      refreshing:true
    });

    fetch("http://10.0.128.173:8080/WebService01/vd1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        refreshing:false,
        trang:this.state.trang + 1
      });
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  render() {
    return (
      <View>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing = {this.state.refreshing}
              onRefresh = {this.loadNewData.bind(this)}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={(row)=>
            <View style={{padding: 20, borderWidth: 1}}>
              <Image source={{uri:row.Hinh}} style={{width:70, height:100}}/>
              <Text>{row.Id}</Text>
            </View>
          }
        />
      </View>
    );
  }

  componentDidMount(){

    fetch("http://10.0.128.173:8080/WebService01/vd1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        trang:this.state.trang + 1
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
}
