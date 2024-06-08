import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./body.style";
import Maps from "../../Tools/Maps/map";

function Body() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Map</Text>
        <View style={styles.map}>
          <Maps />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Body;
