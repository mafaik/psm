import React, { Component, Navigator, BackAndroid, PropTypes, DrawerLayoutAndroid, View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import TopMenu from '../components/icons/TopMenu';
import LoginPage from '../components/LoginPage';
// import HargaSampah from '../components/HargaSampah';
// import TentangAplikasi from '../components/TentangAplikasi';

export default class LeftNav extends Component {
    constructor(props) {
        super(props);

        this.changeScene = this.changeScene.bind(this);
        this.state = {
            route: null
        }
    }

    quit() {
        BackAndroid.exitApp();
    }

    logout() {
        this.props.actions.resetUserData();
        this.props.reset();
    }

    changeScene = (component, name) => {

        const { drawer } = this.props;
        this.setState({
            route: name
        });

        var rightComponent = TopMenu;

        var props = {};

        var route = {
          name: name,
          component: component,
          rightCorner: rightComponent,
          passProps: props,
        };
        drawer.closeDrawer();
        this.props.router.onForward(route,this.props.router.refs.navigator);
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Section
                    title="Menu"
                    items={[{
                        icon: 'fingerprint',
                        value: 'Log In',
                        active: route === 'Log In',
                        onPress: () => this.changeScene(LoginPage,'Log In'),
                        onLongPress: () =>  this.changeScene(LoginPage,'Log In')
                    },
                    /*
                    {
                        icon: 'payment',
                        value: 'Harga Sampah',
                        active: route === 'Harga Sampah',
                        onPress: () => this.changeScene(HargaSampah,'Harga Sampah'),
                        onLongPress: () =>  this.changeScene(HargaSampah,'Harga Sampah')
                    },*/
                    {
                        icon: 'eject',
                        value: 'Log Out',
                        active: route === 'Log Out',
                        onPress: () => this.logout(),
                        onLongPress: () =>  this.logout()
                    },
                    /*
                    {
                        icon: 'pan-tool',
                        value: 'Tentang Aplikasi',
                        active: route === 'Tentang Aplikasi',
                        onPress: () => this.changeScene(TentangAplikasi,'Tentang Aplikasi'),
                        onLongPress: () =>  this.changeScene(TentangAplikasi,'Tentang Aplikasi')
                    },*/
                    {
                        icon: 'exit-to-app',
                        value: 'Keluar Aplikasi',
                        active: route === 'Keluar Aplikasi',
                        onPress: () => this.quit(),
                        onLongPress: () =>  this.quit()
                    }]}
                />





            </Drawer>



        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};

export default connect(state => ({
  user: state.psm.user,
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(LeftNav);