import React, { View, StyleSheet, Image } from 'react-native';

export default class BackButton extends React.Component {
  render() {
    return (
      <Image source={require('../images/back_button.png')} style={styles.backButton} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  backButton: {
    width: 15,
    height: 22,
    marginLeft: 15,
    marginTop: 3,
    marginRight: 10,
    },
});
