import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuScreen from './src/screens/MenuScreen';
import ContactScreen from './src/screens/ContactScreen';
import VideoScreen from './src/screens/VideoScreen';
import Menu from './src/components/Menu';
import LogoTitle from './src/components/Logo';
import PhotosScreen from './src/screens/PhotosScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuScreen" drawerContent={props => <Menu {...props} />}>
        <Drawer.Screen 
          name="MenuScreen" 
          component={MenuScreen}
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
            //headerLeft: (props) => <LogoMenuTitle {...props} />,
          }}
         />

         <Drawer.Screen 
          name="ContactScreen" 
          component={ContactScreen}
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
            //headerLeft: (props) => <LogoMenuTitle {...props} />,
          }}
         />

         <Drawer.Screen 
          name="VideoScreen" 
          component={VideoScreen}
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },  
            //headerLeft: (props) => <LogoMenuTitle {...props} />,
          }}
         />

         <Drawer.Screen 
          name="PhotosScreen" 
          component={PhotosScreen}
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#000000',
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