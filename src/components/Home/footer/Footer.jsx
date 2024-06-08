import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./footer.style";
import NavBar from "../../Tools/NavBar/NavBar";

function Footer() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
    </SafeAreaView>
  );
}

export default Footer;
