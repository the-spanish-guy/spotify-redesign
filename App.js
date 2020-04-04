import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home'
import Musics from './src/pages/Musics'
import Album from './src/pages/Album'
import Artist from './src/pages/Artist'

export default function App() {
  return (
/*    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    */
  //  <Home />
  // <Musics />
  //  <Album />
  <Artist />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
