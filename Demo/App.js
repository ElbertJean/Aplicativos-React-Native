import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/signIn/Home';
import Login from './src/screens/signIn/Login';
import Register from './src/screens/signIn/Register';
import RecoverPassword from './src/screens/signIn/RecoverPassword';
import Congratulations from './src/screens/homePage/Congratulations';
import HomeUser from './src/screens/homePage/HomeUser';
import Budget from './src/screens/homePage/Budget';

const Stack = createNativeStackNavigator ();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#343A40" barStyle='light-content'/>
      <Stack.Navigator initialRouteName='HomeUser'>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options = {{ headerShown:false }}
        />

        <Stack.Screen 
          name='Login' 
          component={Login}
          options = {{ headerShown:false }}
        />

        <Stack.Screen 
          name='Register' 
          component={Register}
          options = {{ headerShown:false }}
        />
        
        <Stack.Screen 
          name='RecoverPassword' 
          component={RecoverPassword}
          options = {{ headerShown:false }}
        />

        <Stack.Screen 
          name='Congratulations' 
          component={Congratulations}
          options = {{ headerShown:false }}
        />

        <Stack.Screen 
          name='HomeUser' 
          component={HomeUser}
          options = {{ headerShown:false }}
        />

        <Stack.Screen 
          name='Budget' 
          component={Budget}
          options = {{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;