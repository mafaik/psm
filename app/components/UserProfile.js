'use strict';

import React, { Component, View, ListView, ScrollView, Picker, Image,  StyleSheet, Text, TextInput, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, Platform, PropTypes } from 'react-native';
import { Button, Icon, IconToggle, Subheader } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';

const propTypes = {
  toRoute: PropTypes.func.isRequired
};

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'haha'
    };
  }

  kembali() {
    this.props.reset();
  }

  render() {
      return (
        <View style={styles.container}>
          <Subheader text="Terima Kasih" color="googleYellow" />
          <Text>Konfirmasi pembayaran anda telah kami terima. Tim kami akan segera memproses pembelian anda. Mohon menunggu untuk mendapatkan informasi terbaru terkait transaksi anda.</Text>
          <Button text="KEMBALI" primary={appTypes.theme} theme="dark" raised={true} onPress={()=> this.kembali()} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  centerText: {
    alignItems: 'center',
  },
  noCartText: {
    marginTop: 80,
    color: '#888888',
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    height:90,
    justifyContent: 'center',
  },
  line:{
    backgroundColor:'#eef0f3',
    height:1,
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  pesanButton: {
    flex: 1,
    backgroundColor: '#3B5998',
    padding: 10,
    alignItems: 'center'
  },
  whiteFont: {
    color: 'white'
  }
});

UserProfile.propTypes = propTypes;

export default connect(state => ({
  user: state.psm.user
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(UserProfile);