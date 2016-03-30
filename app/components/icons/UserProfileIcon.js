import React, { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Icon, IconToggle } from 'react-native-material-design';

export default class UserProfileIcon extends React.Component {
  constructor(props) {
    super(props);

    this.goToUserProfile = this.goToUserProfile.bind(this);

    this.styles = StyleSheet.create({
      container: {
        padding: 2
      },
      icon: {
        width: 24,
        height: 24,
        marginTop: 4,
        marginRight: 15,
      },
    });
  }

  goToUserProfile() {
    this.props.goToUserProfile();
  }

  render() {

    return (

        <TouchableHighlight underlayColor="transparent" style={this.styles.container} onPress={this.goToUserProfile}>
          <View>

              <Icon name="person"
                    size={32}
                    color="#FFFFFF"
                    style={{marginRight: 5}}
              />
          </View>
        </TouchableHighlight>

    );
  }
}
