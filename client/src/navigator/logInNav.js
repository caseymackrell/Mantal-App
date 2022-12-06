import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';
import VerifyOTPScreen from '../screens/Verify OTP/verifyOTP';



const Stack = createNativeStackNavigator();



export default function LogInNav() {

    

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = "Login" 
            component={LoginScreen}
            options = {{header: () => null}}
            />
            <Stack.Screen 
            name = "VerifyNumber" 
            component={VerifyOTPScreen}
            options = {{header: () => null}}
            />

        </Stack.Navigator>
    )
}