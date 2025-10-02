import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../../assets/img/WebsiteLogoTrans.png")} style={styles.image} />
      </View>

      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text>Login</Text>
        </Pressable>

        <View style={styles.groupButtons}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text>6-Months</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => {}}>
            <Text>6-Weeks</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={() => {}}>
          <Text>Cart</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => {}}>
          <Text>Exit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const homeStyle = StyleSheet.create({});
