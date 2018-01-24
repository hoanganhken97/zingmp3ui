import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';

import Header from './Header';
import SwiperTop from './Screens/Swiper_Top';
import TopicHot from './Screens/Topic_Hot';
import Chart from './Screens/Chart';
import ChartWeek from './Screens/Chart_Week';
import MVHot from './Screens/MV_Hot';
import TopKind from './Screens/Top_Kind';
import AlbumHot from './Screens/Album_Hot';
import Suggestion from './Screens/Suggestion';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows([0]),
        };
    }

    openMenu() {
        const { navigation } = this.props;
        navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <View style={styles.homeView}>
                <Header openMenu={this.openMenu.bind(this)} navigation={this.props.navigation} />
                <ListView
                    enableEmptySections
                    removeClippedSubviews={false}
                    dataSource={this.state.dataSource}
                    renderRow={() =>
                        <View>
                            <SwiperTop navigation={this.props.navigation} />
                            <TopicHot navigation={this.props.navigation} />
                            <Chart navigation={this.props.navigation} />
                            <ChartWeek navigation={this.props.navigation} />
                            <MVHot navigation={this.props.navigation} />
                            <TopKind navigation={this.props.navigation} />
                            <AlbumHot navigation={this.props.navigation} />
                            <Suggestion navigation={this.props.navigation} />
                        </View>
                    }
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    homeView: {
        backgroundColor: '#FEFEFE',
        flex: 1
    },
});
