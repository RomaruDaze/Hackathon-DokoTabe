import React, { Component } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./settingscreen.style";

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://i.postimg.cc/0yVPDr0C/temp-Image7-DJHEb.avif",
              }}
              style={styles.profileimage}
            />
            <View style={styles.carddesc}>
              <Text style={styles.profname}>John Doe</Text>
              <Text style={styles.profemail}>john.doe@gmail.com</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SettingScreen;
