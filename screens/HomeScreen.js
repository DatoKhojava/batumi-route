import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background1.jpg")}
        style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 250,
            height: "auto",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            padding: 50,
            margin: 250,
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
