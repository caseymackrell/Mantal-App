import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';

const StartWorkoutScreen = () => {
  // Declare a state variable for storing the list of exercises
  const [exerciseList, setExerciseList] = useState([]);
  // Declare a state variable to track whether the "Add Exercise" button should be displayed
  const [showAddButton, setShowAddButton] = useState(true);

  // Function to handle adding a new exercise
  const addExercise = () => {
    // Create a new exercise object with empty values for weight, sets, and reps
    const newExercise = {
      weight: '',
      sets: 1,
      reps: '',
    };
    // Add the new exercise to the list and update the state
    setExerciseList([...exerciseList, newExercise]);
    // Hide the "Add Exercise" button
    setShowAddButton(false);
  };

  // Function to handle updating the values for an exercise
const updateExercise = (index, key, value) => {
  // Create a new list of exercises with the updated value
  const updatedExerciseList = exerciseList.map((exercise, i) => {
    if (i === index) {
      if (key === 'sets') {
        return { ...exercise, sets: exercise.sets + 1 };
      } else {
        return { ...exercise, [key]: value };
      }
    }
    return exercise;
  });
  // Update the state with the new list of exercises
  setExerciseList(updatedExerciseList);
};

  return (
    <ScrollView style={styles.appContainer}>
      {/* Button to add a new exercise, only displayed if showAddButton is true */}
      {showAddButton && (
        <Button title="Add Exercise" onPress={addExercise} />
      )}



      {/* Loop through the list of exercises and render an input field for each one */}
      {exerciseList.map((exercise, index) => (
        <View key={index} style={styles.createWorkout}>
          <View style={{marginBottom: 5}}>
            <Text>Exercise</Text>
          </View>
          <View style={styles.text}>
          <Text>Sets:</Text>
          <Text>Weight:</Text>
          <Text>Reps:</Text>
          </View>
  <View style={styles.textInputContainer}>
  {/* Loop through the number of sets and render an input field for each one */}
  {[...Array(exercise.sets)].map((_, i) => (
    <View key={i} style={styles.textInput}>
      
      <TextInput
        value={exercise.sets}
        onChangeText={(value) => updateExercise(index, 'sets', value)}
      />
      <TextInput
        value={exercise.weight}
        onChangeText={(value) => updateExercise(index, 'weight', value)}
      />
      <TextInput
        value={exercise.reps}
        onChangeText={(value) => updateExercise(index, 'reps', value)}
      />
    </View>
  ))}
  
</View>
          
      {exerciseList.map((exercise, index) => (
  <View key={index} style={styles.createWorkout}>
    {/* ... */}
    <Button title="Add Set" onPress={() => updateExercise(index, 'sets')} />
    {/* ... */}
  </View>
))}  
          

          

          {/* Button to add another exercise, only displayed if it's not the last exercise in the list */}
          {index < exerciseList.length && (
            <Button title="Add Another Exercise" onPress={addExercise} />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#2C2C2C',
      
    },
    text:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
      paddingHorizontal: 40
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
      paddingVertical: 2,
      paddingHorizontal: 50,
      paddingLeft: 2,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'row'
    },
    textInputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
      paddingHorizontal: 27,
      marginTop: 10

    },
    createWorkout: {
      display: 'flex',
      marginTop: 100,
      backgroundColor: 'white',
      display: 'flex'
    }
})

export default StartWorkoutScreen;