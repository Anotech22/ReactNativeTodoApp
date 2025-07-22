import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScrolScreen = () => {

    const navigation = useNavigation()
  return (
    <View style = {styles.mainView}>
       {/* Container for the two images on screen */}
        <View style = {styles.imageView}>
            <Image
            source ={require('../../assets/images/scrolimg.png')}
            />
            <Image
            source ={require('../../assets/images/scrolNav.png')}
            style = {{marginTop: '30%'}}
            />
        </View>  
        

        {/* Texts Container  */}
        <View style ={styles.textContainer}>
            <Text style = {styles.text1}> Manage your tasks</Text>
            <Text style = {styles.text2}> You can easily manage all of your daily tasks in DoMe for free</Text>
        </View>
      
      {/* Button Texts */}
      <View style = {styles.buttonTextContainer}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('splash')}>
          <Text style = {styles.buttonText1}>BACK</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('welcome')}>
          <Text style = {styles.buttonText2}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScrolScreen

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: "black",
  },
  imageView: {
    width: 213.0002899169922,
    height: 277.7803955078125,
    // justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '20%',
    // left: 81;
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: "#FFFFFFDE",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 180,
    fontFamily: 'Lato',
  },
  text2: {
    color: "#FFFFFFDE",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 40,
    fontFamily: 'Lato',
    paddingHorizontal: 20,
    textAlign: 'center',
    width: 299,
    height: 48,
// top: 547px;
// marginLeft: 38,
  },
  buttonTextContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: '45%',
    marginHorizontal: 50,

  },
  buttonText1:{
    color: "white",
    paddingVertical: 12,
    // paddingHorizontal:1,
  },
  buttonText2:{
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#8875FF",
    borderRadius: 4,
  },
})