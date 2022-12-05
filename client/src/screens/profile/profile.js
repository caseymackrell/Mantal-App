import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

let iconHeight = 26;
let iconWidth

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.appContainer}>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Register")}
            >
            <View style={styles.registerButton}>
              <Text style = {{textAlign: 'center', color: 'white', fontSize: 27}}>Log Out</Text>
          </View>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#2C2C2C',
     
      
    },
    bottomNavContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: 1

    },
    bottomNavBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 15
    },
    navContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: 1

    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 15
    },

    iconBehave: {
        padding: 14
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




export default ProfileScreen;
