import React, { Component } from 'react';
import {Text, View, ListView} from 'react-native';

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
          renderRow={(r)=>
            <View style={{padding: 20, borderWidth: 1}}>
              <Text>{r}</Text>
            </View>
          }
        />
      </View>
    );
  }

  componentDidMount(){
    var mang = ["11111", "222222", "333333"]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mang),
    });
  }
}
