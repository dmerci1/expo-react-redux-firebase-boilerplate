import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Test from './components/Test';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Test />
      </View>
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
