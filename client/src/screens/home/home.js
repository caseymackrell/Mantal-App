import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
const workouts = [
{
    _id: "1",
    workoutName: "Chest and Back",
    workoutDiscription: "This workout will help strengthen both the chest and back",
    musclesTargeted: "Chest, Back",
    workoutLevel: "beginner",
    workoutType: "bulking",
    user: "casey_mackrell",
    workout: {
        group: [
            {
                exercises: [
                    {
                        exercise: "63a6037670d9c26037879920",
                        sets: [
                            {
                                setNum: 1,
                                reps: 10,
                                weight: 135,
                                _id: "63a762c271efb3731311cf99"
                            },
                            {
                                setNum: 2,
                                reps: 8,
                                weight: 185,
                                _id: "63a762c271efb3731311cf9a"
                            },
                            {
                                setNum: 3,
                                reps: 8,
                                weight: 185,
                                _id: "63a762c271efb3731311cf9b"
                            }
                        ],
                        _id: "63a762c271efb3731311cf98"
                    },
                    {
                        sets: [
                            {
                                setNum: 1,
                                reps: 10,
                                weight: 100,
                                _id: "63a762c271efb3731311cf9d"
                            },
                            {
                                setNum: 2,
                                reps: 8,
                                weight: 130,
                                _id: "63a762c271efb3731311cf9e"
                            },
                            {
                                setNum: 3,
                                reps: 8,
                                weight: 130,
                                _id: "63a762c271efb3731311cf9f"
                            }
                        ],
                        _id: "63a762c271efb3731311cf9c"
                    }
                ],
                _id: "63a762c271efb3731311cf97"
            }
        ]
    },
    "createdAt": "2022-12-24T20:36:18.072Z",
    "updatedAt": "2022-12-24T20:36:18.072Z",
    "__v": 0
},
{
    _id: "2",
    workoutName: "Ultimate Leg Workout",
    workoutDiscription: "This workout will have you needing a wheelchair",
    musclesTargeted: "quads, hamstrings",
    workoutLevel: "advanced",
    workoutType: "bulking",
    user: "conor_mackrell",
},
{
    _id: "3",
    workoutName: "Arm Blaster",
    workoutDiscription: "This is a simple and short workout to strengthen your arms ",
    musclesTargeted: "biceps, triceps",
    workoutLevel: "beginner",
    workoutType: "bulking",
    user: "torrey_leonard",
}
]

const workoutName = ({item, index, navigation}) => {
    // Use the item prop to access the relevant data from the workouts array
    const { workoutName, workoutDiscription, musclesTargeted, user, workoutLevel } = item;

    return (

        <TouchableOpacity>
        <View style={{backgroundColor: '#1499C3', flex: 1, marginVertical: 10, paddingBottom: 50, paddingTop: 35}}>
            <Text style={{color: 'black', fontSize: 20, marginLeft: 10,}}>{user}</Text>

            <View style={{backgroundColor: 'white', paddingVertical: 120, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

            {/* Render the workout name, description, and targeted muscles */}
                <View>
                <Text style={{color: 'black', fontSize: 40, paddingBottom: 20}}>{workoutName}</Text>
                </View>
                <View>
                <Text style={{color: 'black'}}>{musclesTargeted}</Text>
                </View>
                <View>
                <Text style={{color: 'black'}}>{workoutLevel}</Text>
                </View>
                <View>
                <Text style={{color: 'black'}}>{workoutDiscription}</Text>
                </View>
        </View>
         
        </View>
        </TouchableOpacity>
    );
}

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <FlatList style={styles.flatlist}
                // Set the data prop to the workouts array
                data={workouts}
                // Set the renderItem prop to the workoutName function
                renderItem={workoutName}
                // Add a keyExtractor prop to specify a unique key for each item in the list
                keyExtractor={(item) => item._id}
            />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    appContainer: {
     height: "100%",
     width: "100%",
      backgroundColor: '#2C2C2C',  
    }
    
  });




export default HomeScreen;
