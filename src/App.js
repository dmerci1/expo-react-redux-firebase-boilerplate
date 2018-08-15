import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navigator from './components/Navigation/Navigator';

export default class App extends Component {
  render() {
    return (
        <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
