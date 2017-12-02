import React, { Component } from 'react';
import {Text, View, ListView, Image} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row)=>
            <View style={{padding: 20, borderWidth: 1}}>
              <Image source={{uri:row.Hinh}} style={{width:70, height:100}}/>
              <Text>{row.Ten}</Text>
            </View>
          }
        />
      </View>
    );
  }

  componentDidMount(){

    fetch("http://10.0.128.173:8080/WebService01/vd1.php")
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
}
