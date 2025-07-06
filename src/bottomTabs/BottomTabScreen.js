import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Calendar from '../MainScreens/Calendar';
import Focus from '../MainScreens/Focus';
import IndexPage from '../MainScreens/IndexPage';
import Plus from '../MainScreens/Plus';
import ProfilePage from '../MainScreens/ProfilePage';


const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarIcon:null,
        tabBarStyle: {
            backgroundColor:'#363636',
            position: 'absolute',
            bottom: 0,
            // marginLeft: 20,
            // marginRight: 20,
            // borderRadius: 10,
            height: 100,

        },
    }}
    // tabBarOptions={{
    //     showLabel: false
    // }}
    >
      <Tab.Screen name="Index" component={IndexPage} options={{
            tabBarIcon:({focused}) =>(
                <View>
                   <Image source={require('../../assets/icons/home-2.png')}
                   resizeMode='contain'
                   />
                   <Text>Index</Text> 
                </View>
            ),
      }}/>
      <Tab.Screen name="calendar" component={Calendar} options={{
            tabBarIcon: ({focused}) =>(
              <View>
                <Image source={require('../../assets/icons/home-2.png')}
                resizeMode='contain'
                />
              </View>
            ),
      }}/>
      <Tab.Screen name="plus" component={Plus}/>
      <Tab.Screen name="focus" component={Focus}/>
      <Tab.Screen name="Profile" component={ProfilePage}/>
    </Tab.Navigator>
  );
}

export default BottomTabScreen;

const style = StyleSheet.create({
   

})