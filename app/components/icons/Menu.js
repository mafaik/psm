import React, { View, StyleSheet, TouchableHighlight, Image, PropTypes } from 'react-native';
import { COLOR, IconToggle, Icon } from 'react-native-material-design';
import { connect } from 'react-redux';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  openMenu() {
    this.props.drawer.openDrawer;
  }

  render() {
    const {drawer} = this.props;
    return (
      <TouchableHighlight style={styles.iconContainer} underlayColor="transparent" onPress={drawer.openDrawer}>
        <View>
          <Icon
            name="menu"
            color="#FFFFFF"
            style={styles.icon}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  iconContainer: {
    padding: 5
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 8,
  }
};

export default Menu
