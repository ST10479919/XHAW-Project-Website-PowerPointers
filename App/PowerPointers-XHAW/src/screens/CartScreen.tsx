import React, { useState } from "react";
import {
    Text,
    View,
    Pressable,
    FlatList,
    Alert,
    SectionList,
    Button,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";
import { coursesData, CourseType, Course } from "../services/courses";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

type CartItem = {
    course: Course;
    courseType: CourseType;
};

export default function CartScreen({ navigation, route }: Props) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (course: Course, courseType: CourseType) => {
        const isAddedItem = cartItems.find(item => item.course.title === course.title && item.courseType === courseType);
        if (!isAddedItem) {
            setCartItems(prev => [...prev, { course, courseType }]);
            return true;
        }
        return false;
    };

    const removeFromCart = (courseName: string) => {
        setCartItems(prev => prev.filter(item => item.course.title !== courseName));
    };

    const clearCart = () => setCartItems([]);

    const getTotalPrice = () => {
        const courseAmount = cartItems.length
        var discountRate = 0;
        const subTotal = cartItems.reduce((total, item) => total + item.course.price, 0)

        if (courseAmount > 1) {
            switch (courseAmount) {
                case 2:
                    discountRate = 0.05
                    break;
                case 3:
                    discountRate = 0.10
                    break;
                default:
                    discountRate = 0.15;
                    break;
            }
        }

        const vatCost = subTotal * 0.15;
        const discountAmount = (subTotal + vatCost) * discountRate;
        const finalTotal = subTotal + vatCost - discountAmount;

        return {
            subTotal,
            discountRate,
            discountAmount,
            vatCost,
            finalTotal
        }
    };

    const isCourseInCart = (courseTitle: string) => {
        return cartItems.some(item => item.course.title === courseTitle);
    };


    const courseSections = [{
        title: "6-Month Courses",
        data: coursesData["6-Months"],
        type: "6-Months" as CourseType
    },
    {
        title: "6-Week Courses",
        data: coursesData["6-Weeks"],
        type: "6-Weeks" as CourseType
    }
    ];

    const renderCourseItems = ({ item, section }: { item: Course, section: any }) => (
        <View style={styles.courseItem}>
            <View style={styles.cartItemInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.coursePurpose}>{item.purpose}</Text>
                <Text style={styles.coursePrice}>R{item.price}</Text>
            </View>

            {isCourseInCart(item.title) ? (
                <Pressable
                    style={[styles.button, { backgroundColor: "#cf3726ff" }]}
                    onPress={() => removeFromCart(item.title)}>
                    <Text style={{ color: "#fff" }}>Remove</Text>
                </Pressable>
            ) : (
                <Pressable
                    style={styles.button}
                    onPress={() => addToCart(item, section.type)}>
                    <Text style={{ color: "#fff" }}>Add</Text>
                </Pressable>
            )}
        </View>
    );

    const renderSections = ({ section }: { section: any }) => (
        <View style={styles.textSection}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
    );

    const costs = getTotalPrice();

    const doCheckout = () => {
        if (cartItems.length === 0) {
            Alert.alert("Cart Empty", "Please select a course");
            return;
        }

        Alert.alert(
            "Checkout Complete",
            "Thank you for your purchase!",
            [{
                text: "OK", onPress: () => {
                    clearCart();
                    navigation.navigate("Home");
                }
            }]
        )
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.screenTitle}>Select Courses</Text>


            <SectionList
                sections={courseSections}
                renderSectionHeader={renderSections}
                renderItem={renderCourseItems}
                keyExtractor={(item, index) => item.title + index}
                showsVerticalScrollIndicator={true}
            />

            <View style={styles.textSection}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <View style={styles.costSection}>
                    <View style={styles.costDisplay}>
                        <Text style={styles.sectionContent}>Subtotal:</Text>
                        <Text style={styles.sectionContent}>R {costs.subTotal}</Text>
                    </View>
                    <View style={styles.costDisplay}>
                        <Text style={styles.sectionContent}>VAT cost:</Text>
                        <Text style={styles.sectionContent}>R {costs.vatCost.toFixed(2)}</Text>
                    </View>
                    <View style={styles.costDisplay}>
                        <Text style={styles.sectionContent}>Discount: {costs.discountRate * 100}%</Text>
                        <Text style={styles.sectionContent}>R {(costs.discountAmount).toFixed(2)}</Text>
                    </View>
                    <View style={styles.costDisplay}>
                        <Text style={styles.sectionContent}>Final cost:</Text>
                        <Text style={styles.sectionContent}>R {costs.finalTotal.toFixed(2)}</Text>
                    </View>


                    <Pressable
                        style={styles.button}
                        onPress={doCheckout}
                    ><Text style={{ color: "#fff" }}>Confirm</Text></Pressable>

                </View>
            </View>

        </SafeAreaView>
    )
}