import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calendar = () => {
  return (
    <View style={styles.mainView}>
      <Text>Calendar</Text>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})