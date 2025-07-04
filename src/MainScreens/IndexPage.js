import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const IndexPage = () => {
    const naviagation = useNavigation()
  return (
    <View style = {styles.mainView}>
        <View style = {styles.headerView}>
            <Image source={require('../../assets/images/indexIcon.png')}
            resizeMode='cover'/>
            <Text style={styles.headerText}>Index</Text>
            <Image source={require('../../assets/images/profilePicture.png')}
            resizeMode='cover'/>
        </View>

        <View style ={styles.IndexPageImage}>
            <Image source={require('../../assets/images/index1.png')}
            resizeMode='cover'
            />
            <Text style={styles.headerText}>What do you want to do today?</Text>
            <Text style={styles.headerText}>Tap + to add your tasks</Text>
        </View>
      
    
    </View>
  )
}

export default IndexPage

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'black',
    },
    headerView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%',
        marginHorizontal: 24,
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    IndexPageImage:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
    },


})