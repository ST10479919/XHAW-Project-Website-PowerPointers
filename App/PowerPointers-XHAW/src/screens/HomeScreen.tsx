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

type Props = NativeStackScreenProps<RootStackParamList, "Home">;



export default function HomeScreen({ navigation }: Props) {
  {/* State to manage selected course type */ }
  const [courseType, setCourseType] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <Image source={require("../../assets/img/WebsiteLogoTrans.png")} style={styles.image} />
        
      </View>

      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => {navigation.navigate("Login")}}>
          <Text style={{color:"#fff"}}>Login</Text>
        </Pressable>

        <View style={styles.groupButtons}>

          <Pressable style={styles.button} onPress={() => {navigation.navigate("Courses", { courseType: "6-Months" })}}>
            <Text style={{color:"#fff"}}>6-Months</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => {navigation.navigate("Courses", { courseType: "6-Weeks" })}}>
            <Text style={{color:"#fff"}}>6-Weeks</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={() => {navigation.navigate("Cart")}}>
          <Text style={{color:"#fff"}}>Cart</Text>
        </Pressable>

        <Pressable style={styles.button} onPress ={() => {navigation.navigate("About")}}>
          <Text style={{color:"#fff"}}>About Us</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => {navigation.navigate("Contact")}}>
          <Text style={{color:"#fff"}}>Contact us</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={() => {BackHandler.exitApp()}}>
          <Text style={{color:"#fff"}}>Exit</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

