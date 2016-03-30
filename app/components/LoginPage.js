'use strict';

import React, { Alert, Component, View, ListView, ScrollView, Picker, Image,  StyleSheet, Text, TextInput, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, Platform, PropTypes, NativeModules } from 'react-native';
import { Button, Icon, IconToggle, Subheader } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import {GoogleSignin} from 'react-native-google-signin';

import UserProfile from './UserProfile';

const propTypes = {
  toRoute: PropTypes.func.isRequired
};

var FBLoginManager = NativeModules.FBLoginManager;

var LoginPage = React.createClass({
  childContextTypes: {
    drawer: React.PropTypes.object,
    navigator: React.PropTypes.object
  },
  getInitialState() {
    return {
      user: {
        users_id: '',
        identity_number: '',
        name: '',
        address: '',
        email: '',
        coverage_id: '',
        coverage_name: '',
        point: '',
        status: '',
        note: '',
      },
      loading: false
    };
  },

  goToProfile() {
    this.props.toRoute({
      name: 'Profil Pengguna',
      component: UserProfile
    });
  },

  _handleEventFacebook(e, data) {
    var result = e || data;
    if(result.type === 'success' && result.profile){
      try {
        var profile = JSON.parse(result.profile);
        var api = appTypes.server + '/public/user.php/check?email='+profile.email;
        fetch(api, {
          method: 'get'
        })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.status == 'error' && responseData.message == 'user not found') {
            // user not found, insert a new user!
            Alert.alert(
              'Peringatan',
              'Email anda belum terdaftar. Silahkan melakukan pendaftaran.',
            );
            this.props.toRoute({
              name: 'Daftar Pengguna',
              component: DaftarUser,
              passProps: {
                email: profile.email,
                name: profile.name
              }
            });
          } else {
            // user found, redirect to user profile
            var userProfile = {
              users_id: responseData.data.users_id,
              identity_number: responseData.data.identity_number,
              name: responseData.data.name,
              address: responseData.data.address,
              email: responseData.data.email,
              coverage_id: responseData.data.coverage_id,
              coverage_name: responseData.data.coverage_name,
              point: responseData.data.point,
              status: responseData.data.status,
              note: responseData.data.note,
            }

            // if user status = 0, then user is not validated yet
            if (userProfile.status == '0') {
              Alert.alert(
                'Peringatan',
                'Akun anda masih dalam proses verifikasi, mohon ditunggu hingga proses verifikasi selesai. Terima kasih.',
              );
              // this.props.reset();
            } else if (userProfile.status == '2') {
              Alert.alert(
                'Peringatan',
                'Akun anda terdapat kesalahan data: ' + userProfile.note + '. Mohon periksa kembali data akun anda.',
              );
              this.props.actions.setUserProfile(userProfile);
              this.props.toRoute({
                name: 'Update Data Pengguna',
                component: UpdateUser
              });
            }
          }
          this.setState({loading:false});
        })
        .done();
      } catch(err) {
        console.warn('Could not parse facebook profile: ', result.profile)
        console.error(err)
      }
    }
  },

  facebookLogin() {
    this.setState({loading:true});
    var permissions = ['email', 'public_profile'];
    FBLoginManager.loginWithPermissions(permissions, (err,data) => this._handleEventFacebook(err,data));
  },

  render: function() {
    if (this.state.loading == false) {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image resizeMode={Image.resizeMode.cover} source={require('../images/login-bg.jpg')} style={styles.backgroundImage}>
            <TouchableHighlight onPress={this.facebookLogin}>
                <View style={styles.loginFacebook}>
                    <Text style={styles.whiteFont}> Login with Facebook </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.loginGoogle}>
                <View style={styles.loginGoogle}>
                    <Text style={styles.whiteFont}> Login with Google </Text>
                </View>
            </TouchableHighlight>
          </Image>
        </View>
      </View>
    );
    }

    if (Platform.OS === 'ios') {
        return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
      } else {
        return (
          <View  style={{alignItems: 'center'}}>
            <ProgressBarAndroid styleAttr="Large"/>
          </View>
        );
      }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#000000',
    justifyContent: 'center'
  },
  loginFacebook: {
        flex: 1,
        backgroundColor: '#3B5998',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 8,
        width: 180
    },
  loginGoogle: {
        flex: 1,
        backgroundColor: '#EA4335',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 8,
        width: 180
    },
    whiteFont: {
        color: 'white'
    },
    greyFont: {
      color: '#767676'
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

LoginPage.propTypes = propTypes;

export default connect(state => ({
  user: state.psm.user
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(LoginPage);