import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import DetailedScreen from '../screens/CourseDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import ContactScreen from '../screens/ContactScreen';
import { Course, CourseType } from '../services/courses';

export type RootStackParamList = {
    Home: undefined;
    Courses: { courseType: "6-Months" | "6-Weeks" };
    Detailed: { course: Course; courseType: "6-Months" | "6-Weeks" };
    Cart: undefined;
    About: undefined;
    Login: undefined;
    Contact: undefined;
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
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Us' }} />
            <Stack.Screen name="Contact" component={ContactScreen} options={{title: 'Contact us'}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        </Stack.Navigator>
    );
}