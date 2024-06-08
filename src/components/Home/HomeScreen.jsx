import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Header from "./header/header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <View>
        <Body />
      </View>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
