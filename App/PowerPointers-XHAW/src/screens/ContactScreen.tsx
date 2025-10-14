import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  Linking,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  BackHandler,
  ScrollView,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import MapView from "react-native-maps";
import { styles } from "../styles/styles";
import { Marker } from "react-native-maps";

type Props = NativeStackScreenProps<RootStackParamList, "Contact">;

export default function ContactScreen({ navigation }: Props) {
  return (
    <SafeAreaView>
        {/* 
        For some reason, placing everything into a container breaks the style.
        DON"T ADD IT
        */}
      <ScrollView>
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>General </Text>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Email</Text>
            <Text style={mapStyle.hyperlink} onPress={() => Linking.openURL('mailto:info@empoweringthenation.co.za')}>info@empoweringthenation.co.za</Text>
          </View>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Phone</Text>
            <Text style={mapStyle.hyperlink} onPress={() => Linking.openURL('tel:+27123456789')}>+27 (0)12 345 6789</Text>
          </View>
        </View>

        {/* (npm, n.d.) */}
        <View style={styles.courseItem}>
          <Text style={styles.sectionTitle}>Locations</Text>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Rosebank</Text>
            <Text>3 keyes Ave, Rosebank, Johannesburg, 2196</Text>
            <MapView
              style={mapStyle.map}
              initialRegion={{
                latitude: -26.146911696784063, 
                longitude: 28.037424169312253,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
                <Marker coordinate={{ latitude: -26.146911696784063, longitude:  28.037424169312253}}/>
            </MapView>
          </View>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Roodepoort</Text>
            <Text>144 Peter Rd, Ruimsig, Roodepoort, 1724</Text>
            <MapView
              style={mapStyle.map}
              initialRegion={{
                latitude: -26.082783101250353, 
                longitude: 27.876240423280624,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
                <Marker coordinate={{ latitude: -26.082783101250353, longitude: 27.876240423280624}}/>
            </MapView>
          </View>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Randburg</Text>
            <Text>444 Jan Smuts Ave, Bordeaux, Randburg, 2194</Text>
            <MapView
              style={mapStyle.map}
              initialRegion={{
                latitude: -26.108421296162458,
                longitude: 28.01755491534388,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
                <Marker coordinate={{ latitude: -26.108421296162458, longitude: 28.01755491534388}}/>
            </MapView>
          </View>
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

const mapStyle = StyleSheet.create({
  map: {
    width: "100%",
    height: 200,
  },

  hyperlink: {
    color: "#0000FF"
  }
});
