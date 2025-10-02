import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
    Home: undefined;
    Courses: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
enableScreens(true);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        </Stack.Navigator>
    );
}
