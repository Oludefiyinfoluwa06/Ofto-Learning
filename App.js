import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import HtmlPage from './screens/HtmlPage';
import CssPage from './screens/CssPage';
import JsPage from './screens/JsPage';
 
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ofto Tech'>
        <Stack.Screen name='Ofto Tech' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Learn Coding' component={DashboardScreen} />
        <Stack.Screen name='Learn HTML' component={HtmlPage} />
        <Stack.Screen name='Learn CSS' component={CssPage} />
        <Stack.Screen name='Learn JavaScript' component={JsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;