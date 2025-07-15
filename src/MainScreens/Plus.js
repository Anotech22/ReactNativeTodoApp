import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Plus = () => {

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.mainView}>
      <Text style={{marginBottom:20,}}>What's your focus for the day?</Text>

      <TouchableOpacity
      onPress={()=>{
        setModalVisible(true)
      }}
      >
        <Text style={{marginBottom:15, fontSize: 25, color: 'white'}}>Click Here to Add </Text>
      </TouchableOpacity>

      <Modal
      transparent={true}
      visible={modalVisible}
      >
        <View   style={styles.modalStyle}>
          <Text style={{marginLeft:25, marginTop:30, marginBottom:5, color:'white'}}>Add Task</Text>
          <TextInput placeholder='Task Tittle' placeholderTextColor={'white'} style={{borderWidth:1, borderColor:'gray', borderRadius:5, marginHorizontal:25, marginBottom:20, color:'white'}}/>
          <TextInput placeholder='Description' placeholderTextColor={'white'} style={{borderWidth:1, borderColor:'gray', borderRadius:5, marginHorizontal:25,color:'white'}}/>
          
          <View style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal:25, marginVertical:35, }}>
              <View style={styles.imageView}>
                <Image
                  source={require('../../assets/icons/timer.png') }
                  resizeMode='contain'
                  style={{marginRight:32}}
                />
                <Image
                  source={require('../../assets/icons/Vector.png') }
                  resizeMode='contain'
                  style={{marginRight:32}}
                />
                <Image
                  source={require('../../assets/icons/flag.png') }
                  resizeMode='contain'
                  
                />
              </View>

              <View style={{...styles.imageView2,  }}>
                <Image
                  source={require('../../assets/icons/send.png') }
                  resizeMode='contain'
                />
              </View>
          </View>
        {/* <Pressable onPress={()=>{
          setModalVisible(false)
        }}
        >
          <Text>This is a Simple Text</Text>
        </Pressable> */}
        </View>
       
      </Modal>
    </View>
  )
}

export default Plus

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalStyle:{
       alignSelf:'center',
       backgroundColor:'#363636', 
       height: 248,
       width:445,
      position:"absolute", 
      elevation: 5, 
      marginTop:380,
      borderRadius:20
    },

    imageView:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    imageView2:{
      // flexDirection: 'row',
      
    },
})