import React, { StyleSheet, View, PropTypes,TextInput } from 'react-native';

import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/UserActions';
import { connect } from 'react-redux';

import UserProfile from '../UserProfile';
import UserProfileIcon from './UserProfileIcon';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class TopMenu extends React.Component {
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
    this.goToUserProfile = this.goToUserProfile.bind(this);
  }

  goToUserProfile() {
    this.props.toRoute({
      name: 'User Profile',
      component: UserProfile
    });

  }

  render() {
    return (
      <View style={this.styles.iconContainer}>
        <UserProfileIcon goToUserProfile={this.goToUserProfile} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 50
  }
});

TopMenu.propTypes = propTypes;

export default connect(state => ({
  user: state.psm.user
}),
(dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
})
)(TopMenu);
