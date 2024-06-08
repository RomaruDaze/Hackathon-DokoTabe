import React from "react";
import styles from "./header.style";
import { Text, Image, View, SafeAreaView } from "react-native";

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image
          source={{
            uri: "https://i.postimg.cc/76Zk642W/temp-Imagem7-Uw-V5.avif",
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>ドコタベ</Text>
    </SafeAreaView>
  );
}

export default Header;
