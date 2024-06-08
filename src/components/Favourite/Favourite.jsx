import React, { Component } from "react";
import { SafeAreaView, View, Text, FlatList, LogBox } from "react-native";
import { Card } from "react-native-elements";
import styles from "./Favourite.style";

const CustomCardTitle = ({ title }) => <Card.Title>{title}</Card.Title>;

class Favourite extends Component {
  state = {
    stores: [
      { id: "1", name: "Store A" },
      { id: "2", name: "Store B" },
      { id: "3", name: "Store C" },
      { id: "4", name: "Store D" },
      { id: "5", name: "Store E" },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>お気に入りリスト</Text>
          <FlatList
            data={this.state.stores}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card containerStyle={styles.cardContainer}>
                <CustomCardTitle title={item.name} />
                <Card.Divider />
                <Text style={styles.name}>{item.name}</Text>
              </Card>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Favourite;
