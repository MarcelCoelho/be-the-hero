import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './src/pages/Incidents';
import Detail from './src/pages/Detail';

export default function App() {
  return (
    <NavigationContainer>

    <AppStack.Navigator screenOption={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>

</NavigationContainer>
  );
}
 