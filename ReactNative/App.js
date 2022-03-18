import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Home from "./src/screens/Home";
import HelloWorld from "./src/screens/01_HelloWorld";
import Props from "./src/screens/02_Props";
import States from "./src/screens/03_States";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="HelloWorld" 
          component={HelloWorld}
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Props" 
          component={Props}
          options={{headerShown:false}}  
        />

        <Stack.Screen 
          name="States" 
          component={States}
          options={{headerShown:false}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;