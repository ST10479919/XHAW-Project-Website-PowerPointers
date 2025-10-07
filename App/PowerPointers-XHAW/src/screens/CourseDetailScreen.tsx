import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View, ScrollView, Pressable, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import  { styles}  from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Detailed">;



export default function DetailedScreen({ route, navigation }: Props ) {
    const { course, courseType } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseType}>{courseType}</Text>
                
                <View style={styles.textSection}>
                    <Text style={styles.sectionTitle}>Purpose</Text>
                    <Text style={styles.sectionContent}>{course.purpose}</Text>
                </View>
                
                <View style={styles.textSection}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.sectionContent}>{course.description}</Text>
                </View>
                
                <View style={styles.textSection}>
                    <Text style={styles.sectionTitle}>Course Content</Text>
                    <Text style={styles.sectionContent}>{course.content}</Text>
                </View>
                
                <View style={styles.textSection}>
                    <Text style={styles.sectionTitle}>Price</Text>
                    <Text style={styles.price}>R {course.price}</Text>
                    </View>
                    <View style={styles.container}>

                    <Pressable
                    style={styles.button} 
                    onPress={navigation.goBack}
                    >
                        <Text style={{color:"#fff"}}>Go back</Text>
                    </Pressable>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}