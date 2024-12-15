import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import Heading from "../Heading";
import api from "@/utils/api";

function SliderHomeScreen() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    // Get Slider From API
    api.getSlider().then((res) => setSlider(res?.sliders));
  }, []);

  return (
    <View>
      <Heading text="Offers For You" />
      <FlatList
        data={slider}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.sliderItem}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    resizeMode: "contain",
  },
  sliderItem: {
    marginRight: 20,
  },
});

export default SliderHomeScreen;
