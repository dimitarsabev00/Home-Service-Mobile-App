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

const CategoriesHomeScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then((resp) => setCategories(resp?.categories));
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text="Categories" isViewAll />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity style={categoriesStyles.container}>
              <View style={categoriesStyles.iconContainer}>
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

const categoriesStyles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  iconContainer: {
    backgroundColor: colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});

export default CategoriesHomeScreen;
