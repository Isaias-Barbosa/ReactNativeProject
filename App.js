import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaTarefas from './src/telas/Tarefas';
import ListaUsuarios from './src/telas/Usuarios';
import index from './src/telas/index';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={index} />
        <Stack.Screen name="Tarefas" component={ListaTarefas} />
        <Stack.Screen name="Usuarios" component={ListaUsuarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

