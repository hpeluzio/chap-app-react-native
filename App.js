import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import Chat from './src/screens/Chat'
import ChatG from './src/screens/ChatG'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatG" component={ChatG} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
