import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Plus = () => {
  return (
    <View style={styles.mainView}>
      <Text>Plus</Text>
    </View>
  )
}

export default Plus

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})