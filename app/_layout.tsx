import React from "react";
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";

const secureTokenCache = {
  getToken: async (key: string) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error("Error getting token from SecureStore:", err);
      return null;
    }
  },
  saveToken: async (key: string, value: string) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error saving token to SecureStore:", err);
    }
  },
};

export default function RootLayout() {
  const publishableKey =
    "pk_test_d2lubmluZy1oaXBwby01Mi5jbGVyay5hY2NvdW50cy5kZXYk";

  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={secureTokenCache}
    >
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </SignedOut>
    </ClerkProvider>
  );
}
