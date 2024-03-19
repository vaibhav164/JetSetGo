import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { BookingScreen } from '../Screens/BookingScreen';
import { AllFlightsScreen } from '../Screens/AllFlightsScreen';

export const RootNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='BookingScreen' component={BookingScreen} />
                <Stack.Screen name='AllFlightScreen' component={AllFlightsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}