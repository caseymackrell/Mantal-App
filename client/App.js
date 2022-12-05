
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/navigator';
import LogInNav from './src/navigator/logInNav';


export default function App() {
  
  let loggedIn
  let notloggedIn
  let user = notloggedIn

  if (user !== loggedIn) {
  return (
    <NavigationContainer>
    <Navigator/>
    </NavigationContainer>
  );
} else{
  return (
    <NavigationContainer>
    <LogInNav/>
    </NavigationContainer>
  )
}
}