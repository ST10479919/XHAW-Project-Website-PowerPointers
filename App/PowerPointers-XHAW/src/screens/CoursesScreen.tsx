import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";
import { coursesData, CourseType, Course  } from "../services/courses";


type Props = NativeStackScreenProps<RootStackParamList, "Courses">;

export default function CoursesScreen( { navigation, route }: Props) {
    const { courseType } = route.params;

    const courses = coursesData[courseType as CourseType];


   const renderCourseItem = ({ item }: { item: Course }) => (
        <TouchableOpacity 
            style={styles.courseItem}
            onPress={() => {
                navigation.navigate("Detailed", { 
                    course: item,
                    courseType: courseType
                });
            }}
        >
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.coursePurpose}>{item.purpose}</Text>
            <Text style={styles.coursePrice}>R {item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.screenTitle}>{courseType} Courses</Text>
            
            <FlatList
                data={courses}
                renderItem={renderCourseItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}