import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./startup.style";

const Startup = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000); // Delay for 2 seconds before navigating
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mai}>
        <Image
          source={{
            uri: "https://i.postimg.cc/nhqdSKY1/temp-Imagebp-V2-Zt.avif",
          }}
          style={styles.image}
        />
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loading}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Startup;
