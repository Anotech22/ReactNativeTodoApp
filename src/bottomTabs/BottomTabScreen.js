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
       }}>

      <Tab.Screen name="Index" component={IndexPage} options={{
            tabBarIcon:({focused}) =>(
                <View style ={{alignItems:'center', justifyContent:'center'}}>
                   <Image source={require('../../assets/icons/home-2.png')}
                   resizeMode='contain'
                    style={{
                      width: 25, 
                      height: 25,
                      tintColor: focused ? '#8687E7' : '#8e8e93',
                      marginTop: 50,
                      marginBottom: 10,
                    }}
                   />
                   <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center' }}>Index</Text>
                </View>
            ),
      }}/>
      <Tab.Screen name="calendar" component={Calendar} options={{
            tabBarIcon: ({focused}) =>(
              <View style ={{alignItems:'center', justifyContent:'center', marginTop: 10}}>
                <Image source={require('../../assets/icons/calendar.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#8687E7' : '#8e8e93',
                  marginTop: 50,
                  marginBottom: 10,
                }}
                />
                <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center',}}>Calendar</Text>
              </View>
            ),
      }}/>
      <Tab.Screen name="plus" component={Plus} options={{
            tabBarIcon:({focused})=>(
              <View>
               
                <Text>plus</Text>
              </View>

            ),
      }}/>
      <Tab.Screen name="focus" component={Focus} options = {{
            tabBarIcon:({focused})=>(
              <View>
                <Image source={require('../../assets/icons/clock.png')}
                resizeMode='contain'
                style={{
                  width: 25, 
                  height: 25,
                  tintColor: focused ? '#8687E7' : '#8e8e93',
                  marginTop: 50,
                  marginBottom: 10,
                }}
                />
                <Text>Focus</Text>
              </View>
            ),
      }}/>
      <Tab.Screen name="Profile" component={ProfilePage} options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image source={require('../../assets/icons/user.png')}
                resizeMode='contain'
                style={{
                  width: 25, 
                  height:25,
                  tintColor: focused ? '#8687E7' : '#8e8e93',
                  marginTop: 50,
                  marginBottom: 10,
                }}
                />
                <Text>User</Text>
              </View>
            ),
            }}/>
      </Tab.Navigator>
  );
}

export default BottomTabScreen;

const style = StyleSheet.create({
   

})