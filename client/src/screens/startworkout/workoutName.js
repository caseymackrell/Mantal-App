import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
let iconHeight = 26;
let iconWidth

const StartWorkoutScreen = () => {
  const [workoutName, setWorkoutName] = useState("")
  const [musclesTargeted, setMusclesTargeted] = useState("")
  const [workoutLevel, setWorkoutLevel] = useState("")
  const [Description, setDescription] = useState("")

  const handleLogin = () => {
    alert(workoutName + " " + musclesTargeted + " " + workoutLevel + " " + Description)
    setWorkoutName("")
    setMusclesTargeted("")
    setWorkoutLevel("")
    setDescription("")
  }

  const handleChangeWorkoutName = (text) => {
    setWorkoutName(text)
  }
  const handleChangeMusclesTargeted = (text) => {
    setMusclesTargeted(text)
  }
  const handleChangeWorkoutLevel = (text) => {
    setWorkoutLevel(text)
  }
  const handleChangeDescription = (text) => {
    setDescription(text)
  }  
  
  return (
        <SafeAreaView style={styles.appContainer}>
<View style={styles.inputContainer}>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Workout Name'
              value={workoutName}
              onChangeText={handleChangeWorkoutName}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Muscles Targeted'
              value={musclesTargeted}
              onChangeText={handleChangeMusclesTargeted}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Workout Level'
              value={workoutLevel}
              onChangeText={handleChangeWorkoutLevel}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput 
              placeholder='Workout Description'
              value={Description}
              onChangeText={handleChangeDescription}
              />
            </View>
            </View>
          
           <TouchableOpacity
          onPress={handleLogin}
          >
          <View style={styles.startWorkout}>
              <Text style = {{textAlign: 'center', color: 'white', fontSize: 27}}>Start Workout</Text>
          </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#2C2C2C',
      
    },
    startWorkout: {
      backgroundColor: '#EAAA6F',
      marginTop: 30,
      paddingVertical: 10,
      marginHorizontal: 10,
      borderColor: '#EAAA6F',
      borderWidth: 2,
      borderRadius: 10,
      alignContent: 'center',
      marginBottom: 100
    },
      textInput: {
      backgroundColor: 'white',
      marginBottom: 65,
      paddingVertical: 15,
      paddingLeft: 10,
      marginHorizontal: 20,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10
    },
    inputContainer: {
      display: 'flex',
      marginTop: 100
    }
})

export default StartWorkoutScreen;