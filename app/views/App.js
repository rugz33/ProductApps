import React from 'react';
import {
  AppRegistry,
  Platform,
  Linking,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux'
import { fetchData } from '../actions/Actions'

import MainTab from './MainTab';
import MapsTab from './MapsTab';

const prefix = Platform.OS == 'android' ? 'yself://yself/' : 'yself://';

const Tab = TabNavigator(
  {
    MainTab: {
      screen: MainTab ,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    MapsTab: {
      screen: MapsTab,
      path: '/maps',
      navigationOptions: {
        tabBarLabel: 'Maps',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-map' : 'ios-map-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },
    }
  },
);

class App extends React.Component {
  componentWillMount(){
    this.props.fetchData();
  }

  render() {
    return (
      <Tab uriPrefix={prefix} screenProps={this.props}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
