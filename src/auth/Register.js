import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Register = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.mainView}>
        <TouchableOpacity onPress={()=> navigation.navigate('welcome')}>
              <Image
              source={require('../../assets/images/arrow-left.png')}
              resizeMode="cover"
              style={styles.arrowLeft}
              />
        </TouchableOpacity>
        
        {/* Register Text */}
        <Text style={styles.regText}>Register</Text>

        {/* userInputs */}
        <View style={styles.userInputsView}>
            <View style = {styles.useNameView}> 
                <Text style = {styles.inputTexts}>Username</Text>
                <TextInput style={styles.placeholderTexts}
                 placeholder=' Enter your Username' placeholderTextColor={'white'}/>
            </View>
            <View style = {styles.useNameView}> 
                <Text style = {styles.inputTexts}>Password</Text>
                <TextInput style={styles.placeholderTexts}
                 placeholder='    •  •  •  •  •  •  •  •  •  •  •  •' placeholderTextColor={'white'}/>
            </View>
            <View style = {styles.useNameView}> 
                <Text style = {styles.inputTexts}>Comfirm Password</Text>
                <TextInput style={styles.placeholderTexts}
                 placeholder='    •  •  •  •  •  •  •  •  •  •  •  •' placeholderTextColor={'white'}/>
            </View>
        </View>

        {/* Register Button */}
        <TouchableOpacity>
            <Text style={styles.regButton}>Register</Text>
        </TouchableOpacity>

        {/* Or Text View*/}
        <View style={styles.orTextContainer}>
            <View style={styles.line}/>
                <Text style={styles.orText}>Or</Text>
            <View style={styles.line}/>
        </View>

        {/* loginWith View */}
        <View style = {styles.loginWithView}>
            
            <TouchableOpacity>
                <View style = {styles.imgTextView}> 
                    <Image source={require('../../assets/images/google.png')}/>
                    <Text style={{color:'white', marginLeft:10 }}>Register with Google</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style = {{...styles.imgTextView, marginTop: 28}}> 
                    <Image source={require('../../assets/images/apple.png')}/>
                    <Text style={{color:'white', marginLeft:10 }}>Register with Apple</Text>
                </View>
            </TouchableOpacity>
        </View>
        {/* Already have an account? */}
            <View style={styles.alreadyHaveAccountView}>
                <Text style={{color:'white'}}>Already have an account?</Text>
                <Pressable
                    onPress={()=> navigation.navigate('login')}
                >
                    <Text style={{color:'white', marginLeft:10, fontWeight:'bold', fontSize:16}}>Login</Text>
                </Pressable>
                
            </View>
    </View>
  )
}

export default Register

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
    regText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 24,
        // width: 120,
        // height: 38,
    },
    userInputsView: {
        marginTop: 4,
        marginLeft: 24,
        // width: 327,
        // height: 200,
        // backgroundColor: '#1C1C1E',
        // borderRadius: 10,
        // padding: 20,
    },
    useNameView: {
        height: 110,
        marginRight: 24,
    
    },
    inputTexts: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
    },
    placeholderTexts: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
    },
    regButton:{
        color: 'white',
        backgroundColor: '#8687E7',
        marginTop: 30,
        marginHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 16,
        // height: 105,
        // marginRight: 24,
        
    },
    orText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        
    },
    line: {
        flex: 1,
        height: 1,
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 24,
    },
    orTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20, 
        marginBottom: 30,
    },
    imgTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1E',
        borderColor: '#8687E780',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 24,
        
    },
    alreadyHaveAccountView:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 86,
    },
})