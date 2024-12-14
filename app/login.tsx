import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "@/utils/colors";

const Login = () => {
  const handleGetStarted = () => {};

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 27, color: colors.WHITE, textAlign: "center" }}
        >
          Let's Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Cleaning and repair
          </Text>{" "}
          Service
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a professional
          service
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text
            style={{ textAlign: "center", fontSize: 17, color: colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});
