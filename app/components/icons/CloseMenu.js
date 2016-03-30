import React, { StyleSheet, TouchableHighlight, View, PropTypes,TextInput } from 'react-native';
import { Icon } from 'react-native-material-design';

import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/UserActions';
import { connect } from 'react-redux';

import TopMenu from './TopMenu';
import Menu from './Menu';

import ListRewards from '../ListRewards';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class CloseMenu extends React.Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      }
    });
    
  }

  goToHome() {
    this.props.resetToRoute({
      name: 'Poin Anda: 500',
      component: ListRewards,
      rightCorner: TopMenu,
      leftCorner: () => {
        return <Menu drawer={this.props.drawer} />
      }
    });

  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={() => { this.goToHome() } } >
        <View style={this.styles.iconContainer}>
           <Icon name="close"
                  size={32}
                  color="#FFFFFF"
                  style={{marginRight: 10 , marginTop: 2}}
            />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 50
  }
});

CloseMenu.propTypes = propTypes;

export default CloseMenu;
