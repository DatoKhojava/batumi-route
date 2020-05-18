import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background1.jpg")}
        style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
      >
        <Text>Home Screen</Text>
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
