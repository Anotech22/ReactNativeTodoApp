import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {

    const navigation = useNavigation()
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={()=> navigation.navigate('scrolScreen')}>
      <Image
      source={require('../../assets/images/arrow-left.png')}
      resizeMode="cover"
      style={styles.arrowLeft}
      />
      </TouchableOpacity> 

      {/* Texts View */}
      <View style={styles.textView}>
        <Text style={styles.texts1}>Welcome to UpTodo</Text>
        <Text style={styles.texts2}>Please login to your account or create new account to continue</Text>
      </View>
      {/* Buttons View */}
      <View style={styles.bottonTextView}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('login')}
        >
          <Text style={styles.buttonTexts1}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=> navigation.navigate('register')}
        >
          <Text style={styles.buttonTexts2}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Welcome

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "black",
  },
  arrowLeft: {
    // width: 30,
    height: 24,
    marginTop: 57,
    marginLeft: 24,
    width: 24,
  },

  textView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }, 
  
  texts1: {
    color: "#ffffff",
    fontSize:32,
    fontWeight: 'bold',
    marginTop: 20,
    // width: 291,
    // height: 38,
    // left: 42px;
    
    
  },
  texts2: {
    color: "#ffffff",
    marginTop: 20,
    fontWeight: 400,
    fontSize: 16,
    lineHeight:24,
    textAlign: 'center',
    letterSpacing: 0,
    textAlign: 'center',
    width: 287,
    height: 48,
    paddingHorizontal: 20,
  },
  bottonTextView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '120%',
    // flexDirection: ',
  }, 
  buttonTexts1: {
    color: "#ffffff",
    marginBottom: 28,
    width:327,
    height: 48, 
    paddingVertical: 12,
    paddingHorizontal: 48,
    textAlign: 'center',
    backgroundColor: '#8875FF',
    borderRadius: 4,

  },
  buttonTexts2: {
    color: "#ffffff",
    marginBottom: 28,
    width:327,
    height: 48, 
    paddingVertical: 12,
    paddingHorizontal: 48,
    textAlign: 'center',
    // backgroundColor: '#8875FF',
    borderColor: '#8875FF',
    borderWidth: 1,
    borderRadius: 4,
  },

})