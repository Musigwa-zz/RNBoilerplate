import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { styles } from '.';


class Container extends Component {

  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View
          style={styles.container}
        >
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Container;
