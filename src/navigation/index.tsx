import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import App from '../screens/app'

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
