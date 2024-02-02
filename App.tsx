/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from './pantallas/perfil';
import Inicio from './pantallas/inicio';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'Home' component={Inicio}/>
        <Stack.Screen name= 'Perfilj' component={Perfil}/>
      </Stack.Navigator>
        </NavigationContainer>
  );
}
  

export default App;
