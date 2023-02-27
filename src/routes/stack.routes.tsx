// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

const {Navigator,Screen} = createNativeStackNavigator();


export function StackRoutes() {
  return (
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="Home" component={Home} />
        <Screen name="Welcome" component={Welcome} />
       
      </Navigator>
  );
}