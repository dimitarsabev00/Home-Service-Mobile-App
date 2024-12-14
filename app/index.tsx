import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const IndexPage = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Optionally, add a loading spinner here
  }

  return isSignedIn ? <Redirect href="/home" /> : <Redirect href="/login" />;
};

export default IndexPage;
