import React from 'react';  // (The IIE, 2024) 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  // (React Native, 2024) 
import HomeScreen from './HomeScreen';
import AddItemsScreen from './AddItemsScreen';
import FilterScreen from './FilterScreen';
import StartersScreen from './StartersScreen';
import MainScreen from './MainScreen';
import DessertScreen from './DessertScreen';

const Stack = createStackNavigator();   // (React Native, 2024) 

export default function App() {    // (The IIE, 2024) 
  return (
    <NavigationContainer>  
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddItemsScreen" component={AddItemsScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="StartersScreen" component={StartersScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DessertScreen" component={DessertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/* References */ 
/* The IIE. 2024. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute of Education: Unpublished [Accessed 20 November 2024]. */ 
/* React Native.dev. (n.d.). Button .React Native. [online] Available at: https://reactnative.dev/docs/components-and-apis [Accessed 20 November 2024]. */ 