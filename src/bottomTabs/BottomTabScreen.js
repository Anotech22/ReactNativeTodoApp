import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
import IndexPage from '../MainScreens/IndexPage';
import ProfilePage from '../MainScreens/ProfilePage';
const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Tab.Screen name="Home" component={IndexPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;