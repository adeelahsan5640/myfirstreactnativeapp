import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import ContactUs from './src/screens/ContactUs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator intitialRouteName='login'>
        <Stack.Screen name='Login' component={ContactUs} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
