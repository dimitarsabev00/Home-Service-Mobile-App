import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking</Text>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
