import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendar from '../MainScreens/Calendar';
import Focus from '../MainScreens/Focus';
import IndexPage from '../MainScreens/IndexPage';
import Plus from '../MainScreens/Plus';
import ProfilePage from '../MainScreens/ProfilePage';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();



const CustomPlusButton = ({children, onPress}) =>{

return(
    <TouchableOpacity
      style={{
          top: -30,
          justifyContent:'center',
          alignItems: 'center',

      }}
      onPress={onPress}
    >
        <View
          style = {{
            width: 70,
            height:70,
            borderRadius:35,
            backgroundColor: '#8687E7',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
    </TouchableOpacity>
);
}

function BottomTabScreen() {
  return (
    <Tab.Navigator
    initialRouteName='Index'
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
                   <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center', }}>Index</Text>
                </View>
            ),
      }}/>
      <Tab.Screen name="calendar" component={Calendar} options={{
            tabBarIcon: ({focused}) =>(
              <View style ={{alignItems:'center', justifyContent:'center', marginTop: 17}}>
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
                <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center', width:42,}}>Calendar</Text>
              </View>
            ),
      }}/>
      <Tab.Screen name="plus" component={Plus} options={{
            tabBarIcon:({focused})=>(
                  <Image source={require('../../assets/icons/add.png')}
                resizeMode='contain'
                style = {{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'white' : 'white',
                }}

                  />
            ),
            tabBarButton: (props) =>(
              <CustomPlusButton {...props}/>
            )
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
                <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center',}}>Focus</Text>
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
                <Text style={{color: focused? 'white' : '#8e8e93', fontSize:12, textAlign:'center',}}>User</Text>
              </View>
            ),
            }}/>
      </Tab.Navigator>
  );
}

export default BottomTabScreen;

const style = StyleSheet.create({
   

})