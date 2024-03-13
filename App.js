import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LandingPage from './components/landingpage';
import RegistrationPage from './components/Registration';
import LoginPage from './components/loginpage';
import AccountRecovery from './components/AccountRecovery';
import homepage from './components/homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage}  />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="loginpage" component={LoginPage} />
        <Stack.Screen name="homepage" component={homepage} />
        <Stack.Screen name="AccountRecovery" component={AccountRecovery} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
