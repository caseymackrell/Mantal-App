
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/home/home';
import ExploreScreen from '../screens/explore/explore';
import MessagesScreen from '../screens/messages/message';
import ProfileScreen from '../screens/profile/profile';
import CalendarScreen from '../screens/calender/calender';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'; 

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
                  } else if (route.name === 'Explore') {
                    iconName = focused ? 'search' : 'search';
                  }
                   else if (route.name === 'Calendar') {
                    iconName = focused ? 'calendar' : 'calendar';
                  }
                    else if (route.name === 'Message') {
                    iconName = focused ? 'chatbox' : 'chatbox';
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
                name = "Explore"
                component={ExploreScreen}
                />
                <Tab.Screen
                name = "Calendar"
                component={CalendarScreen}
                />
                <Tab.Screen
                name = "Message"
                component={MessagesScreen}
                />
                <Tab.Screen
                name = "Profile"
                component={ProfileScreen}
                />
            </Tab.Navigator>
  );
}