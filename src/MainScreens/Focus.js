import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Focus = () => {
  return (
    <View style={styles.mainView}>
      <Text>Focus</Text>
    </View>
  )
}

export default Focus

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})