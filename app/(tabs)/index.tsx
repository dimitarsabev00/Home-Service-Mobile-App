import { ScrollView, View } from "react-native";
import React from "react";
import HeaderHomeScreen from "@/components/HomeTabScreenComponents/HeaderHomeScreen";
import SliderHomeScreen from "@/components/HomeTabScreenComponents/SliderHomeScreen";

export default function HomeScreen() {
  return (
    <ScrollView>
      <HeaderHomeScreen />
      <View style={{ padding: 20 }}>
        {/* Slider Section */}
        <SliderHomeScreen />
      </View>
    </ScrollView>
  );
}
