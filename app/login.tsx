import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import colors from "@/utils/colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const router = useRouter(); // Router for manual navigation

  const handleGetStarted = React.useCallback(async () => {
    try {
      const redirectUrl = Linking.createURL("/", {
        scheme: "home-service-mobile-app",
      });

      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl,
      });

      if (createdSessionId) {
        await setActive({ session: createdSessionId }); // Set the session
        console.log("Login successful, session set.");

        // Manually navigate to home after setting the session
        router.replace("/(tabs)");
      } else {
        console.log("No session created. Handle MFA or other flows here.");
      }
    } catch (err) {
      console.error("OAuth Error:", JSON.stringify(err, null, 2));
    }
  }, [router]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.PRIMARY }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login.png")}
          style={styles.loginImage}
        />
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>
            Let's Find
            <Text style={styles.boldText}>
              {" "}
              Professional Cleaning and Repair
            </Text>{" "}
            Service
          </Text>
          <Text style={styles.subText}>
            Best app to find services near you that deliver professional service
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
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
  headingText: {
    fontSize: 27,
    color: colors.WHITE,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  subText: {
    fontSize: 17,
    color: colors.WHITE,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    color: colors.PRIMARY,
  },
});
