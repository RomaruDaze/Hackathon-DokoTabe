import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useShops } from "../../hooks/HookApi";
import Icon from "react-native-vector-icons/FontAwesome";

function Favourite() {
  const { shops, loading, error } = useShops();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Menu", { shopid: item.shopid })}
      style={styles.card}
    >
      <Image
        source={{
          uri: "https://i.postimg.cc/YSCYYDY4/coffee-shop-store-market-restaurant-24911-11058-jpg.avif",
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.shopname}</Text>
      </View>
      <Icon name="heart" size={30} color="tomato" />
    </TouchableOpacity>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>お気に入り</Text>
      <FlatList
        data={shops}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.shopid ? item.shopid.toString() : index.toString()
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  cardContent: {
    flex: 1,
    margin: 20,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardDetail: {
    fontSize: 10,
    color: "grey",
  },
});

export default Favourite;
