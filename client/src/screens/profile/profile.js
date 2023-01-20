import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';

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
    const { workoutName, workoutDiscription, musclesTargeted, createdAt, workoutLevel } = item;

    return (

        <TouchableOpacity>
        <View style={{backgroundColor: '#1499C3', flex: 1, marginVertical: 10, paddingBottom: 50, paddingTop: 50}}>

            <View style={{backgroundColor: 'white', paddingVertical: 120, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

            {/* Render the workout name, description, and targeted muscles */}
                <View>
                <Text style={{color: 'black', fontSize: 40, paddingBottom: 20}}>Workout: {workoutName}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                <Text style={{color: 'black', display: 'flex', flexDirection: 'column'}}>Muscles Targeted:</Text>
                <Text>{musclesTargeted}</Text>
                </View>
                <View>
                <Text style={{color: 'black'}}>Level of Workout: {workoutLevel}</Text>
                </View>
                <View>
                <Text style={{color: 'black'}}>Description: {workoutDiscription}</Text>
                </View>
        </View>
         
        </View>
        </TouchableOpacity>
    );
}



const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.appContainer}>
            <View style={{marginTop: 50, marginBottom: 35}}>
                <Text style={{fontSize: 50, color: 'white', paddingLeft: 10}}>Casey Mackrell</Text>
                <Text style={{fontSize: 20, color: '#1499C3', paddingLeft: 30}}>@c_mackrell</Text>
            </View>

            <View style={{height: 1, width: '90%', backgroundColor: 'white', marginLeft: 15}}/>

            <View>
                <Text style={{fontSize: 30, paddingLeft: 13, paddingTop: 10, color: 'white'}}>My Workouts</Text>
            </View>

            <FlatList style={styles.flatlist}
                // Set the data prop to the workouts array
                data={workouts}
                // Set the renderItem prop to the workoutName function
                renderItem={workoutName}
                // Add a keyExtractor prop to specify a unique key for each item in the list
                keyExtractor={(item) => item._id}
            />
            {/* <TouchableOpacity 
                onPress={() => navigation.navigate("Register")}
            >
            <View style={styles.registerButton}>
              <Text style = {{textAlign: 'center', color: 'white', fontSize: 27}}>Log Out</Text>
          </View>
          </TouchableOpacity> */}
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
      },
      flatlist: {
        flex: 1,
        marginTop: 10
      }
    
  });




export default ProfileScreen;
