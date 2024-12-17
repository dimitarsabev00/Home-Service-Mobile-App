import api from "@/utils/api";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "../Heading";
import colors from "@/utils/colors";

// Business List Component
const BusinessListHomeScreen = () => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    api.getBusinessList().then((res) => setBusinessList(res.businessLists));
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Heading text="Latest Business" isViewAll />
      <FlatList
        data={businessList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
};
export default BusinessListHomeScreen;

// Business List Item Component (used in BusinessListHomeScreen)
function BusinessListItemSmall({ business }) {
  return (
    <TouchableOpacity style={businessListStyles.container}>
      <Image
        source={{ uri: business?.images?.url }}
        style={businessListStyles.image}
      />
      <View style={businessListStyles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {business?.name}
        </Text>
        <Text
          style={{ fontSize: 13, fontFamily: "outfit", color: colors.GRAY }}
        >
          {business?.contactPerson}
        </Text>
        <Text style={businessListStyles.categoryTag}>
          {business?.category?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const businessListStyles = StyleSheet.create({
  container: { padding: 10, backgroundColor: colors.WHITE, borderRadius: 10 },
  infoContainer: { padding: 7, gap: 3 },
  image: { width: 160, height: 100, borderRadius: 10 },
  categoryTag: {
    fontSize: 10,
    fontFamily: "outfit",
    padding: 3,
    color: colors.PRIMARY,
    backgroundColor: colors.PRIMARY_LIGHT,
    borderRadius: 3,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
});
