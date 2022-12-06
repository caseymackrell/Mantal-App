
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'; 
import StartWorkoutScreen from '../screens/startworkout/startworkout';

const Tab = createBottomTabNavigator();



export default function Navigator() {
  
  return (

            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-home'
                      : 'ios-home';
                  } else if (route.name === 'Start Workout') {
                    iconName = focused ? 'barbell-sharp' : 'barbell-sharp';
                    
                  }
                    else{
                        iconName = focused ? 'person-sharp' : 'person-sharp';
                    }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1499C3',
                tabBarInactiveTintColor: 'gray',
              })}
            >
                <Tab.Screen
                name = "Home"
                component={HomeScreen}
                />
                <Tab.Screen
                name = "Start Workout"
                component={StartWorkoutScreen}
                />
                <Tab.Screen
                name = "Profile"
                component={ProfileScreen}
                />
            </Tab.Navigator>
  );
}