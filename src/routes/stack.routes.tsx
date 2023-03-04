// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { TabRoutes } from './tab.routes';
import { IForecastData } from '../utils/search.interface';
import { NextDays } from '../screens/NextDays';
import { IForecastDay } from '../utils/forecastdays.interface';

const {Navigator,Screen} = createNativeStackNavigator();

export type IStackRoutes = {
  Welcome: undefined;
  TabRoutes: undefined;
  Home: undefined;
  Search: undefined;
  NextDays: {
    forecast: {
      forecastday: Array<IForecastData>;
    };
    forecastDays: Array<IForecastDay>;
  };
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
        <Screen name="TabRoutes" component={TabRoutes} />
        <Screen name="Home" component={Home} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Search" component={Search} />
        <Screen name="NextDays" component={NextDays} />
       
      </Navigator>
  );
}