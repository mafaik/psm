'use strict';

import React, { InteractionManager, Linking, Component, Platform, View, ScrollView, StyleSheet, Text, Image, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, PropTypes } from 'react-native';
import { Subheader, Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
//import TimerMixin from 'react-timer-mixin';
//var Image = require('react-native-image-progress');
//var ProgressBar = require('react-native-progress/CircleSnail');
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import GridView from 'rn-grid-view';
import TopMenu from './icons/TopMenu';
import DeskripsiReward from '../components/DeskripsiReward';




const propTypes = {
  toRoute: PropTypes.func.isRequired,
  data: PropTypes.object
};



class ListRewards extends Component {


  constructor(props) {
    super(props);
    this.renderFooter = this.renderFooter.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this.state = {
      loading: true
    };
    
    

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
        this.setState({loading: false});
        this.props.actions.getRewards();
        
    });
  }

  



  goToDetailRewards(item) {
    requestAnimationFrame(() => {
      this.props.toRoute({
        name: 'Detail Rewards',
        component: DeskripsiReward,
        rightCorner: TopMenu,
        data: item
      });
    });
  }


  _renderItem(item) {

    return (
              
                    <TouchableHighlight underlayColor="transparent" onPress={() => { this.goToDetailRewards(item) } } key={item.rewardsid}>
                      <View {...item}
                        style={styles.col}>
                        <Image
                          mode='contain'
                          style={styles.thumb}
                          source={{uri: item.image}}  />
                        <Text style={styles.namaToko}>{item.name}</Text>
                        <Text style={styles.harga}>{item.poin}</Text>
                      </View>
                    </TouchableHighlight>
                  
              
                

           )
  }

  renderFooter() {
    if ( this.props.status === 'DONE' ) {
      return <View style={styles.scrollSpinner} />;
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

  onEndReached() {

      if( this.props.status !== 'PENDING')
      {
        this.props.actions.getRewardsNextPage();
      }
      
  }

  render() {

      if( !this.state.loading ) 
      {

        return (


              <View style={styles.containerScroll}>
               <GridView
                  itemsPerRow={2}
                  renderFooter={this.renderFooter}
                  onEndReached={this.onEndReached}
                  scrollEnabled={true}
                  renderSeparator={null}
                  style={{marginTop: 10}}
                  items={this.props.rewards}
                  fillIncompleteRow={false}
                  renderItem={this._renderItem}
                  renderSectionHeader={null}
                  automaticallyAdjustContentInsets={false} />
              </View>
            
          )
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
  containerScroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  header: {
      paddingTop: 16
  },
  title: {
      marginTop: 20
  },
  text: {
      fontSize: 14,
      marginLeft: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbarku: {
    height: 20,
    position: 'absolute'
  },
  scrollView: {
    flex: 1
  },
  col: {
    flex: 1 ,

  },

  thumb: {
    borderColor: '#FAFAFA',
    borderWidth: 1,
    width: 140,
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5
  },
  namaToko: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 10,
    width:130,
  },
  harga: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  btnText: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center'
  }
});


ListRewards.propTypes = propTypes;

export default connect(state => ({
  rewards: state.psm.rewards,
  status: state.psm.status
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(ListRewards);







