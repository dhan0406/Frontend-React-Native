import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import { render } from 'react-dom';
import UserSelection from './components/UserSelection';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Select your choices </Text> */}
      <UserSelection></UserSelection>
      </View>
    )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  }
});
