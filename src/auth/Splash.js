import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {

    const navigation = useNavigation()

    return (
    <View style={styles.mainView}>
        <Image source={require('../../assets/images/splash.png')} 
        style={styles.image}
        />

      <Pressable 
        onPress={() => navigation.navigate('scrolScreen')}
      >
        <Text style = {styles.text}> Get started </Text>
      </Pressable>
        
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: "black",
  },

  image:{
    resizeMode:"contain",
    width: 140, 
    height:180,
    marginTop: '100%',
    alignSelf: 'center',  
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 170,
    alignSelf: 'center',
    fontStyle:'italic', 
  },
})