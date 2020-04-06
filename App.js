import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Routes from './src/routes'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content"/>
      <Routes />
    </SafeAreaProvider>
  );
}