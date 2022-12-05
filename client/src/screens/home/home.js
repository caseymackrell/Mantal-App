import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
let iconHeight = 26;
let iconWidth

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.topNavContainer}>
                <View style={styles.topNavBar}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={30} color="black" />
                        </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Register")}
                    >
                        <View style={styles.registerButton}>
                        <Text style = {{textAlign: 'center', color: 'white', fontSize: 20}}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View style={styles.feedContainer}>
                    <Text>f</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    appContainer: {
     height: "100%",
     width: "100%",
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
    topNavBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '80%',
        height: '100%',
        justifyContent: 'space-between',
        marginTop: 50,
        alignItems: 'center'
    },
    topNavContainer: {
        position: 'absolute',
        top: 1,
        alignContent: 'space-between'

    },
    iconBehave: {
        padding: 14
    },
    registerButton: {
        backgroundColor: '#EAAA6F',
        paddingVertical: 3,
        borderColor: '#EAAA6F',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 2,
        marginRight: 20
      },
      feedContainer:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop: 85
      }
    
  });




export default HomeScreen;
