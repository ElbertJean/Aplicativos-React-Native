import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MenuScreen from './src/screens/MenuScreen';
import Exercise1Screen from './src/screens/Exercise1Screen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuScreen">
        <Drawer.Screen 
          name="Tela Inicial" 
          component={MenuScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
         />

        <Drawer.Screen 
          name="Exercício 1" 
          component={Exercise1Screen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
         />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
