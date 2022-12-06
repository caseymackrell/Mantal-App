import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { auth } from '../../../firebase';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    

    const handleChangeUsername = (text) => {
        setUsername(text)
      }

      const handleChangePhoneNumber = (text) => {
        setPhoneNumber(text)
      }

      const handleSignUp = () => {
        alert(username + " " + phoneNumber)
        navigation.navigate("VerifyNumber")
        setUsername("")
        setPhoneNumber("")
   

      // const handleSignUp = () =>{
      //   auth 
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(userCredentials => {
      //     const user = userCredentials.user
      //     console.log(user)
      //   })
      //   .catch(error => alert(error.message))
      }
    return (
        <View style={styles.appContainer}>
          <Image source={require('../../icons/mainLogo.png')}/>
          <View style={styles.textInputContainer}>
        <View style={styles.loginType}>
          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 30, color: 'white'}}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

          <View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Username'
              value={username}
              onChangeText={handleChangeUsername}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Phone Number'
              value={phoneNumber}
              onChangeText={handleChangePhoneNumber}
              secureTextEntry={true}
              />
            </View>
          <TouchableOpacity
          onPress={handleSignUp}
          >
          <View style={styles.registerButton}>
              <Text style = {{textAlign: 'center', color: 'white', fontSize: 27}}>Sign In</Text>
          </View>
          </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style = {{marginLeft: 4, marginBottom: 5}}>
              <Image source={require('../../icons/loginWithGoogle.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{marginLeft: 7}}>
              <Image source={require('../../icons/Fixed.png')}/>
            </View>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 100,
      paddingHorizontal: 16,
      flex: 1,
      backgroundColor: '#2C2C2C',
      alignContent: 'center'
      
    },
    textInput: {
      backgroundColor: 'white',
      marginBottom: 40,
      paddingVertical: 10,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10
    },
    textInputContainer: {
      marginTop: 25,
      justifyContent: 'center',
    },
    loginType: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 300,
      marginLeft: 30,
      marginBottom: 45
    },
    loginContainer: {
      justifyContent: 'center'
    },
    registerButton: {
      backgroundColor: '#EAAA6F',
      marginTop: 30,
      paddingVertical: 10,
      borderColor: '#EAAA6F',
      borderWidth: 2,
      borderRadius: 10,
      alignContent: 'center',
      marginBottom: 100
    }
  });




export default LoginScreen
