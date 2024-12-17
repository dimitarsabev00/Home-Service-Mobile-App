import { ScrollView, View } from "react-native";
import React from "react";
import HeaderHomeScreen from "@/components/HomeTabScreenComponents/HeaderHomeScreen";
import SliderHomeScreen from "@/components/HomeTabScreenComponents/SliderHomeScreen";
import CategoriesHomeScreen from "@/components/HomeTabScreenComponents/CategoriesHomeScreen";

export default function HomeScreen() {
  return (
    <ScrollView>
      <HeaderHomeScreen />
      <View style={{ padding: 20 }}>
        {/* Slider Section */}
        <SliderHomeScreen />

        {/* Categories Section */}
        <CategoriesHomeScreen />
      </View>
    </ScrollView>
  );
}
