import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMenuItems } from "../../hooks/HookApi";
import styles from "./Menu.style";

function Menu() {
  const navigation = useNavigation();
  const route = useRoute();
  const { shopid } = route.params;
  const { menuItems, loading, error } = useMenuItems(shopid);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          color="#007AFF"
        />
      </View>
      <View style={styles.menu}>
        <Text style={styles.title}>Menu</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item) => `${item.shopid}-${item.manuname}`}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                source={{
                  uri: "https://i.postimg.cc/3NsW4d1J/temp-Image6-Fk-Dkw.avif",
                }}
                style={styles.itemimage}
              />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.manuname}</Text>
                <Text style={styles.itemPrice}>¥{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default Menu;
