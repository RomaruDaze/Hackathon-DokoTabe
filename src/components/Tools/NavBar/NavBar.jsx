import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./navbar.style";

function NavBar() {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: "https://i.postimg.cc/rwbvC47M/temp-Image-Ev3-IBC.avif",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: "https://i.postimg.cc/zG3sg7tx/temp-Image7gy-Qmc.avif",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: "https://i.postimg.cc/NfNhFS4y/temp-Image-U0g-Ad-W.avif",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NavBar;
