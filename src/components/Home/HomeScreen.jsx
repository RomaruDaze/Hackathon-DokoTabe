import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./homescreen.style";
import Maps from "../Tools/Maps/map";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.map}>
          <Maps />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
