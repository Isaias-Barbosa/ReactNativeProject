import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaCarro from './src/telas/Carros';
import index from './src/telas/index';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={index} />
        <Stack.Screen name="Carros" component={ListaCarro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


