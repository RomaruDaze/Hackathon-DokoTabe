import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./settingscreen.style";

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>アカウント設定</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>通知</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>プライバシー</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>ログアウト</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SettingScreen;
