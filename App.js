import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/AppRotas';
import Carro from './src/telas/Carro';
import NewCarro from './src/telas/NewCarro';
import EditCarro from './src/telas/EditCarro';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Carro" component={Carro} />
        <Stack.Screen name="NovoCarro" component={NewCarro} />
        <Stack.Screen name="EditCarro" component={EditCarro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

