import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MenuScreen from './src/screens/MenuScreen';

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
            //headerLeft: (props) => <LogoMenuTitle {...props} />,
          }}
         />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
