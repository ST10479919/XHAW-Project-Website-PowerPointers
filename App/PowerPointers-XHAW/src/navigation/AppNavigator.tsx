import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import DetailedScreen from '../screens/CourseDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
    Home: undefined;
    Courses: { courseType: string };
    Detailed: { courseId: string };
    About: undefined;
    Login: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
enableScreens(true);
    return (
        <Stack.Navigator>
            {/* All screens to navigate to */}
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
            <Stack.Screen name="Courses" component={CoursesScreen} options={{ title: 'Courses' }} />
            <Stack.Screen name="Detailed" component={DetailedScreen} options={{ title: 'Course Details' }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Us' }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        </Stack.Navigator>
    );
}
