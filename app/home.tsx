import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

const HomeScreen = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
          router.replace("/login");
        }}
      />
    </View>
  );
};

export default HomeScreen;

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
