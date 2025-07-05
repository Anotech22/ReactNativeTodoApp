import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfilePage = () => {
  return (
    <View style={styles.mainView}>
      <Text>ProfilePage</Text>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})