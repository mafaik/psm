'use strict';

import React, { Alert, Component, View, ScrollView, Picker, Image,  StyleSheet, Text, TextInput, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, Platform, PropTypes } from 'react-native';
import { Button, Icon, IconToggle } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const propTypes = {
  toRoute: PropTypes.func.isRequired
};

class DaftarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        users_id: '',
        identity_number: '',
        name: this.props.name,
        address: '',
        email: this.props.email,
        coverage_id: '',
        coverage_name: '',
        point: '',
        status: '',
        note: '',
      },
      coverage: [],
      loading: false
    };
  }

  componentWillMount() {
    fetch(appTypes.server + '/public/user.php/getAvailable').then(res => {
      res.json().then(data => {
        this.setState({
          coverage: data.records
        });
      });
    }, err => {
      console.log(err);
    });
  }

  insertUserProfile() {
    var api = appTypes.server + '/api/toko/user.php/updateUserData';
    fetch(api, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.user)
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.props.actions.setUserProfile(this.state.user);
      this.setState({loading:false});
    })
    .done();
  }

  goToUserProfile() {
    if (this.state.user.identity_number == '' || this.state.user.name == '' || this.state.user.address == '' || this.state.user.email == '') {
      Alert.alert(
        'Peringatan',
        'Mohon isi semua kolom',
      )
    } else {
      this.setState({loading:true});
      this.getNamaCoverage(this.state.user.coverage_id);
      this.insertUserProfile();
      this.props.toRoute({
        name: 'Profil Pengguna',
        component: UserProfile
      });
    }
  }

  getNamaCoverage(coverage_id) {
    var api = appTypes.server + '/api/toko/user.php/getNamaKotaProvinsi?coverage_id='+coverage_id;
    fetch(api, {
      method: 'get'
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({user: {...this.state.user,coverage_name: responseData.coverage_name} });
    })
    .done();
  }


  render() {
      var pickerCoverage = [];

      if( this.state.coverage.length > 0 && this.state.loading == false)
      {
        this.state.coverage.map((data, index) => {
          pickerCoverage.push(<Picker.Item label={data.coverage_name} value={data.coverage_id} key={data.coverage_id}/>)
        });

        return (
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <TextInput onChangeText={(identity_number) => this.setState({user: {...this.state.user,identity_number: identity_number} })} defaultValue={this.state.user.identity_number} placeholder='Nomor Identitas'/>
              <TextInput onChangeText={(name) => this.setState({user: {...this.state.user,name: name} })} defaultValue={this.state.user.name} placeholder='Nama Anda'/>
              <TextInput onChangeText={(address) => this.setState({user: {...this.state.user,address: address} })} defaultValue={this.state.user.address} placeholder='Alamat Anda'/>
              <TextInput onChangeText={(email) => this.setState({user: {...this.state.user,email: email} })} defaultValue={this.state.user.email} placeholder='email@anda.com' keyboardType='email-address'/>
              <Picker
                selectedValue={this.state.user.coverage_id}
                onValueChange={(coverage_id) => this.setState({user: {...this.state.user,coverage_id: coverage_id} })}>
                  {pickerCoverage}
              </Picker>
              <Button text="SIMPAN" primary={appTypes.theme} theme="dark" raised={true} onPress={()=> this.goToUserProfile()} />
            </ScrollView>
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollView: {
    flex: 1,
    paddingBottom: 20
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

DaftarUser.propTypes = propTypes;

export default connect(state => ({
  user: state.psm.user,
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(DaftarUser);