
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container } from '../components/Container';
import { CircularFAB } from '../components/Buttons';


class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <View>
          <Text>HomeScreen</Text>
        </View>
        <CircularFAB />
      </Container>
    );
  }
}

export default HomeScreen;
