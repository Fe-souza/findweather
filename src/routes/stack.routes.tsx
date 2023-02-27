// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';

const {Navigator,Screen} = createNativeStackNavigator();

export type IStackRoutes = {
  Welcome: undefined;
  Home: undefined;
  Search: undefined;
};

interface IStackParam {
  initialRoute: keyof IStackRoutes;
}

export const StackRoutes = ({ initialRoute }: IStackParam): JSX.Element => {

  
  return (
      <Navigator screenOptions={{
        headerShown: false,
        
      }}
      initialRouteName={initialRoute}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Search" component={Search} />
       
      </Navigator>
  );
}