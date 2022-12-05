import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

let iconHeight = 26;
let iconWidth

const ExploreScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <TextInput placeholder='search'/>
                </View>
            </View>

            <ScrollView style={{backgroundColor: 'purple', height: '100%'}}>
                <ScrollView horizontal style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>
                    <View style={{height: 50, width: 50, backgroundColor: 'blue', justifyContent:'center'}}>

                    </View>
                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                <ScrollView style={{backgroundColor: 'red', height: 100, marginVertical: 30}}>

                </ScrollView>
                
                
            </ScrollView>   
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#2C2C2C',
    },
    header: {
        backgroundColor: 'grey',
        padding: 20
    },
    search: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 25,
        justifyContent: 'center',
        paddingLeft: 10
    }
  });




export default ExploreScreen;
