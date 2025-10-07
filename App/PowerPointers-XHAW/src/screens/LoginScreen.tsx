import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {

    {/* State to manage email and password input */ }
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    {/* Simple validation functions for email and password, unimplemented due to demo */ }
    function isValidEmail(email: string): boolean {
        return emailRegex.test(email);
    }

    function isValidPassword(password: string): boolean {
        return password.length >= 6;
    }

    function demoAlert() {
        alert("This is a front end demo (no server). Use it to simulate sign in.");
    }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>

      <View>
        <TextInput style={styles.inputBox} placeholder="Email" onChangeText={setEmail}></TextInput>
        <TextInput style={styles.inputBox} placeholder="Password" onChangeText={setPassword}></TextInput>
      </View>

      <View style={styles.groupButtons}>
        <Pressable style={styles.button} onPress={() => {
            demoAlert();
        }}>
          <Text style={{color:"#fff"}}>Sign in</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            demoAlert();
        }}>
          <Text style={{color:"#fff"}}>Create user</Text>
        </Pressable>
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => {
            navigation.goBack();
        }}>
          <Text style={{color:"#fff"}}>Go back</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
