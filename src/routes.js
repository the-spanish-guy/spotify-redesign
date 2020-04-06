import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator()

import Home from './pages/Home'
import Musics from './pages/Musics'
import Album from './pages/Album'
import Artist from './pages/Artist'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}} >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Musics" component={Musics} />
        <AppStack.Screen name="Album" component={Album} />
        <AppStack.Screen name="Artist" component={Artist} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}