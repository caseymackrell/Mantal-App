import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';



const Stack = createNativeStackNavigator();



export default function LogInNav() {

    

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = "Register" 
            component={RegisterScreen}
            options = {{header: () => null}}
            />
            <Stack.Screen 
            name = "Login" 
            component={LoginScreen}
            options = {{header: () => null}}
            />
        </Stack.Navigator>
    )
}