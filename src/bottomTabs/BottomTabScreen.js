import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import IndexPage from '../MainScreens/IndexPage';
import ProfilePage from '../MainScreens/ProfilePage';
import Calendar from '../MainScreens/Calendar';
import Plus from '../MainScreens/Plus';
import Focus from '../MainScreens/Focus';


const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Tab.Screen name="Index" component={IndexPage}/>
      <Tab.Screen name="calendar" component={Calendar}/>
      <Tab.Screen name="plus" component={Plus}/>
      <Tab.Screen name="focus" component={Focus}/>
      <Tab.Screen name="Profile" component={ProfilePage}/>
    </Tab.Navigator>
  );
}

export default BottomTabScreen;