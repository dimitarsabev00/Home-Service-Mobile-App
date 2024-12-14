import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import colors from "@/utils/colors";

function HeaderHomeScreen() {
  const { user } = useUser();

  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.userName}>{user?.fullName}</Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome
            name="search"
            style={styles.searchIcon}
            size={24}
            color={colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
    backgroundColor: colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
  userImage: { width: 45, height: 45, borderRadius: 99 },
  welcomeText: { color: colors.WHITE, fontFamily: "outfit" },
  userName: { color: colors.WHITE, fontSize: 20, fontFamily: "outfit-medium" },
  searchBarContainer: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "outfit",
  },
  searchIcon: { backgroundColor: colors.WHITE, padding: 10, borderRadius: 8 },
});

export default HeaderHomeScreen;
