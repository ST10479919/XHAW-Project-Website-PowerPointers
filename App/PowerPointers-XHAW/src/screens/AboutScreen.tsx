import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "About">;

export default function AboutScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionContent}>
            Empowering the Nation was established in 2022 by Precious Radebe to
            provide professional skills training to domestic workers and
            gardeners in Johannesburg. Inspired by her parents and elders who
            lacked opportunities to upskill, Precious built a program that helps
            learners become more marketable, earn higher wages, and even launch
            their own small businesses. Hundreds of learners have already
            completed our six month Learnerships and six‑week Short Skills
            Training Programs.{" "}
          </Text>
        </View>
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <Text style={styles.sectionContent}>
            6 month programmes: First Aid, Sewing, Landscaping, Life Skills.
          </Text>
          <Text style={styles.sectionContent}>
            6 week programmes: Child Minding, Cooking, Garden Maintenance,
            Cleaning, Home Management.
          </Text>
          <Text style={styles.sectionContent}>Discounts when you bundle multiple courses.</Text>
        </View>
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>Why It Matters</Text>
          <Text style={styles.sectionContent}>Employers gain confidence and value from skilled staff; employees gain dignity, mobility, and better pay. Everyone wins when skills grow. </Text>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text> Go Back </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
