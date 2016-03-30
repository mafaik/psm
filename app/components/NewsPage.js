'use strict';

import React, { InteractionManager, Component, View, ListView, Image,  StyleSheet, Text, TouchableHighlight, ActivityIndicatorIOS, ProgressBarAndroid, Platform, PropTypes } from 'react-native';
import { Button, Icon, IconToggle } from 'react-native-material-design';
import * as appTypes from '../constants/AppTypes';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';


const propTypes = {
  toRoute: PropTypes.func.isRequired
};


class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.state = {
      dataSource : new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loading: true
    };



  }

  componentWillReceiveProps( nextProps ) {

    

    if(nextProps.status === 'DONE')
    {
      this.setState({
         dataSource: this.state.dataSource.cloneWithRows(nextProps.news)
      });

    }
    
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({loading: false});
      this.props.setRightProps({ drawer: this.props.drawer });
      this.props.actions.getNews();
    });
  }


  onEndReached() {
    this.props.actions.getNewsNextPage();
  }


  renderFooter() {
    if (this.props.status === 'DONE') {
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



  renderRow = (item: Object, sectionID, rowID) => {
    return (
      
        <View style={styles.fullwidth} key={item.newsid}>
          <View style={styles.rowContainer}>
            <Text>Tgl {item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        </View>
      
   )

  };


  render() {

      if( !this.state.loading )
      {

        if(this.props.status == 'DONE' || this.props.status == 'LOADING_FOR_NEXT' )
        {
          
          return (
            <View style={styles.container}>
              <ListView
                ref="listview"
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderFooter={this.renderFooter}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={5}
              />
            </View>
          );
        }
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
  fullwidth: {
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
    flex: 1,
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:'#eef0f3',
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  line:{
    backgroundColor:'#eef0f3',
    height:1,
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
  btnContainer: {
    padding: 16,
    width:300
  },
  pesanButton: {
    flex: 1,
    backgroundColor: appTypes.color,
    padding: 10,
    alignItems: 'center'
  },
  whiteFont: {
    color: 'white'
  },
  scrollSpinner: {
    marginVertical: 20,
  }
});

NewsPage.propTypes = propTypes;

export default connect(state => ({
  news: state.psm.news,
  status: state.psm.status
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(NewsPage);
