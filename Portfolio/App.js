import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MenuScreen from './src/screens/MenuScreen';
import MdcScreen from './src/screens/MdcScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import Menu from './src/components/Menu';
import SumScreen from './src/screens/SumScreen';
import DivisionScreen from './src/screens/DivisionScreen';
import MultiplicationScreen from './src/screens/MultiplicationScreen';
import TabuadaScreen from './src/screens/TabuadaScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuScreen" drawerContent={props => <Menu {...props} />}>
        <Drawer.Screen name="Tela inicial" component={MenuScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="Soma" component={SumScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="Divisão" component={DivisionScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="Multiplicação" component={MultiplicationScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="Tabuada" component={TabuadaScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="MDC" component={MdcScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
          }}
        />

        <Drawer.Screen name="Calculadora" component={CalculatorScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#007C4F',
            },
            headerTintColor: '#E1ECE6',
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
