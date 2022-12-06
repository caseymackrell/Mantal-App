import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';


const RegisterScreen = ({navigation}) => {
    
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleLogin = () => {
    alert(username + " " + email + " " + password + " " + confirmPassword)
    navigation.navigate("VerifyOTP")
    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  const handleChangeUsername = (text) => {
    setUsername(text)
  }
  const handleChangeEmail = (text) => {
    setEmail(text)
  }
  const handleChangePassword = (text) => {
    setPassword(text)
  }
  const handleChangeConfirmPassword = (text) => {
    setConfirmPassword(text)
  }
  
  
  return (
        <View style={styles.appContainer}>
          <Image source={require('../../icons/mainLogo.png')}/>
          <View style={styles.textInputContainer}>
        <View style={styles.loginType}>
          <TouchableOpacity>
            <View>
              <Text style={{fontSize: 30, color: '#1499C3'}}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          >
            <View style={{marginLeft: 15}}>
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
              placeholder='Email'
              value={email}
              onChangeText={handleChangeEmail}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Password'
              value={password}
              onChangeText={handleChangePassword}
              secureTextEntry={true}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              secureTextEntry={true}
              placeholder='Confirm Password'
              value={confirmPassword}
              onChangeText={handleChangeConfirmPassword}
              />
            </View>
          <TouchableOpacity
          onPress={handleLogin}
          >
          <View style={styles.registerButton}>
              <Text style = {{textAlign: 'center', color: 'white', fontSize: 27}}>Create Account</Text>
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
      marginBottom: 18,
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
      marginBottom: 40
    }
  });




export default RegisterScreen
