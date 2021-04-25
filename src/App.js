import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Jobs, SavedJobs } from './pages'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="SavedJobs" component={SavedJobs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
