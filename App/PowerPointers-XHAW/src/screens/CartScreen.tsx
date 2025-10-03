import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  BackHandler,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;


export default function CartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Cart Screen</Text>
        </SafeAreaView>
    );
}