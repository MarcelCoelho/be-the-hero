import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';

const AppStack = CreateStackNavigator();

import Incidents from './src/pages/Incidents';
import Detail from './src/pages/Detail';

export default function Routes() {
    return (

        <NavigationContainer>

            <AppStack.Navigator screenOption={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>

    );
} 