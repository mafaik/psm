'use strict';

import React, { InteractionManager, Component, Dimensions, View, ScrollView, WebView, Image, Navigator, StyleSheet, Text, TouchableOpacity, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, Platform, PropTypes } from 'react-native';
import { Button, IconToggle, Icon } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';


const propTypes = {
  toRoute: PropTypes.func.isRequired,
  data: PropTypes.object
};

class DeskripsiReward extends Component {

  constructor(props) {
    super(props);
    
    var {height, width} = Dimensions.get('window');
    this.state = {
      loading: true
    };

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({loading: false});
    });
  }


  addCart(data) {
    this.props.actions.addCart(data.produkid,data.nama,appTypes.server+'/public/uploads/products/'+data.nama_image,data.harga,data.berat,1);
  }


  renderLoading () {

    if (Platform.OS === 'ios') {
      return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
    } else {
      return (
        <View  style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
          <ProgressBarAndroid styleAttr="Large"/>
        </View>
      );
    }

  }


  render() {

    const { rewardsid, name, image, deskripsi, poin } = this.props.data;


    if( !this.state.loading )
    {


          return (


            
              <View style={styles.container}>
                  <ScrollView style={styles.scroll}>
                    <View style={styles.imgContainer}>
                       <Image
                        mode='contain'
                        style={styles.img}
                        source={{uri: image}}  />
                    </View>
                    <Text style={{fontSize: 16, margin: 10}}>{deskripsi}</Text>
                  </ScrollView>

                  <View style={styles.topContainer}>
                    <View style={styles.fullWidth}>
                      <View style={styles.topLeft}>
                        <Text style={styles.textNama} numberOfLines={1}>{name}</Text>
                        <Text style={styles.textHarga}>Poin: {poin}</Text>
                      </View>
                    </View>
                  </View>
                  
                <View style={styles.bottomContainer}>
                  <View style={styles.btnContainer}>
                    <Button text="REDEEM" primary={appTypes.theme} theme="dark" raised={true} onPress={()=> this.addCart(this.props.data)} />
                  </View>
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'rgba(255,255,255,.9)',
    top:0,
    right:0,
    left: 0,
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  topLeft: {
    flex: 1,
    height: 40,
    alignItems: 'flex-start'
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'

  },
  bottomContainer: {
    position: 'absolute',
    height: 50,
    bottom:10,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNama: {
    fontSize: 16,
    width: 200,
    marginLeft: 20,
  },
  textHarga: {
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  textDetail: {
    fontSize: 16
  },
  text14: {
    fontSize: 14,
  },
  btnContainer: {
    padding: 16,
    width:300
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  btnCloseContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#FFFFFF',
    alignSelf: 'flex-end',
    padding: 8,
    margin: 10
  },
  closeButton: {
    color: 'white',
    textAlign: 'center',
    
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  img: {
    width: Dimensions.get('window').width,
    height: 150
  },
  scroll: {
    height: Dimensions.get('window').height,
  },
  webView: {
    flex: 1
  },
});


DeskripsiReward.propTypes = propTypes;

export default connect(state => ({
  status: state.psm.status
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(DeskripsiReward);
