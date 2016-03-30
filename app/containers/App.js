'use strict';

import React, { Component, View, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import { COLOR, IconToggle, Icon } from 'react-native-material-design';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/UserActions';
import SplashScreen from '@remobile/react-native-splashscreen';
import GridView from 'rn-grid-view';
import Router from 'react-native-simple-router';

import BackButton from '../components/BackButton';
import TopMenu from '../components/icons/TopMenu';
import CloseMenu from '../components/icons/CloseMenu';
import Menu from '../components/icons/Menu';
import LeftNav from '../components/LeftNav';
// import News from '../components/News';
import NewsPage from '../components/NewsPage';
import LoginPage from '../components/LoginPage';

class App extends React.Component {
  static childContextTypes = {
    drawer: React.PropTypes.object,
    navigator: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      navigator: null
    }
  }

  getChildContext = () => {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator
    }
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  setDrawer(drawer) {
    this.setState({
      drawer: drawer
    });
  }

  setNavigator(navigator) {
    this.setState({
      navigator: navigator
    });
  }

  render() {
    const {drawer,navigator} = this.state;
    const firstRoute = {
      name: 'News',
      component: NewsPage,
      passProps: { drawer: this.state.drawer },
      rightCorner: CloseMenu,
      leftCorner: () => {
        return (
          <View></View>
        )
      }
    }

    return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => {
                      if (drawer) {
                          return <LeftNav router = {this.state.navigator} drawer={drawer} {...this.props}/>;
                      }
                      return null;
                  }}
          ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
        >

        {drawer &&
          <Router
            firstRoute={firstRoute}
            headerStyle={styles.header}
            backButtonComponent={BackButton}
            handleBackAndroid={true}
            ref={(router) => { !this.state.navigator ? this.setNavigator(router) : null }}/>
        }
      </DrawerLayoutAndroid>
    );
  }
};


var styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#5cafec',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 8,
  },
  login: {
        flex: 1,
        backgroundColor: '#3B5998',
        padding: 10,
        alignItems: 'center'
    },
    whiteFont: {
        color: 'white'
    },
    backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
  }
});


export default App;