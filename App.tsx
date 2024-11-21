import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Ensure path is correct
import StartersScreen from './StartersScreen'; // Ensure path is correct
import MainScreen from './MainScreen'; // Ensure path is correct
import DessertScreen from './DessertScreen'; // Ensure path is correct
import AddItemScreen from './AddItemsScreen'; // Ensure path is correct

const Stack = createStackNavigator();

// Main App with navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
        <Stack.Screen name="StartersScreen" component={StartersScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DessertScreen" component={DessertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

