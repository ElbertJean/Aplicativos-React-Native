import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import RecoverPasswordScreen from './src/screens/RecoverPasswordScreen';
import RegisterAccountScreen from './src/screens/RegisterAccountScreen';
import ApiScreen from './src/screens/ApiScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" >
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{
            headerMode:'none',
          }}
        />
        <Stack.Screen 
          name="RecoverPasswordScreen" 
          component={RecoverPasswordScreen}
          options={{
            headerMode:'none',
          }}
        />
        <Stack.Screen 
          name="RegisterAccountScreen" 
          component={RegisterAccountScreen}
          options={{
            headerMode:'none',
          }}
        />
        <Stack.Screen 
          name="ApiScreen" 
          component={ApiScreen}
          options={{
            headerMode:'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;