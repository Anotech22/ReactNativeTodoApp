import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Login from './src/auth/Login'
import Register from './src/auth/Register'
import ScrolScreen from './src/auth/ScrolScreen'
import Splash from './src/auth/Splash'
import Welcome from './src/auth/Welcome'
import Create from './src/MainScreens/Create'
import BottomTabScreen from './src/bottomTabs/BottomTabScreen'
import IndexPage from './src/MainScreens/IndexPage'
import Plus from './src/MainScreens/Plus'


const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Stack.Navigator initialRouteName='bottomTab'
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name ='splash' component = {Splash}/>
        <Stack.Screen name ='welcome' component = {Welcome}/>
        <Stack.Screen name ='scrolScreen' component = {ScrolScreen}/>
        <Stack.Screen name ='login' component = {Login}/>
        <Stack.Screen name ='register' component = {Register}/>
        <Stack.Screen name ='index' component = {IndexPage}/>
        <Stack.Screen name ='bottomTab' component = {BottomTabScreen}/>
        <Stack.Screen name ='create' component = {Create} 
          options={{
            presentation:'modal'
          }}
        />
        <Stack.Screen name ='plus' component = {Plus}
        options={{
          presentation:'modal'
        }}
        />
    </Stack.Navigator>
  )
}

export default App

const styles = StyleSheet.create({})