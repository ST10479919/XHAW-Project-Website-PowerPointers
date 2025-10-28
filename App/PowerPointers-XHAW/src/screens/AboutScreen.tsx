import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Dropdown } from "react-native-element-dropdown";

import { styles } from "../styles/styles";


type Props = NativeStackScreenProps<RootStackParamList, "About">;

export default function AboutScreen({ navigation }: Props) {

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    { label: "Johannesburg", value: '0'},
    { label: "Cape-Town", value: '1'},
    { label: "Pretoria", value: "2" },
  ]


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
            completed our six month Learnerships and six week Short Skills
            Training Programs.
          </Text>
        </View>
        <View style={styles.courseItem}>
            <Text style={styles.sectionTitle}> Centers near you </Text>
            <Text style={styles.sectionContent}> Select the location you are closest to and we'll send you email of the closest training centre</Text>
            {/* (Hoaphantn7604, n.d.) */}
            <Dropdown
              style={dropdown.box}
              placeholderStyle={dropdown.placeholder}
              selectedTextStyle={dropdown.selectedText}
              data={locations}
              labelField="label"
              valueField="value"
              placeholder="Select your city"
              value={selectedLocation}
              onChange={item => {
                setSelectedLocation(item.value)
              }}
            />
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
          <Text style={styles.sectionContent}>Discounts when you bundle multiple</Text>
        </View>
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>Why It Matters</Text>
          <Text style={styles.sectionContent}>Employers gain confidence and value from skilled staff; employees gain dignity, mobility, and better pay. Everyone wins when skills grow. </Text>
        </View>
        
        <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={{color:"#fff"}}> Go Back </Text>
        </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const dropdown = StyleSheet.create({
  box: {
    height: 50,
    borderColor: '#6e6e6eff',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    backgroundColor: '#f9f9f9',
  },

  placeholder: {
    color: '#999'
  },
  selectedText: {
    color: '#333'
  },

  selectedCity: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#e8f4ff',
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#4395d8ff',
  },

});