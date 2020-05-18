import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function TripScreen() {
  const [coordinats, setCoordinats] = useState();

  function makeATrip() {
    console.log("clicked");
  }

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "75%" }}
        initialRegion={{
          latitude: 41.6168,
          longitude: 41.6367,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={{
          width: "90%",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 5,
          margin: 10,
          padding: 10,
        }}
      >
        {/* <Ionicons name="md-pin" size={24} color="black" /> */}
        {/* <Ionicons name="ios-paper-plane" size={24} color="black" /> */}

        {/* icon - input*/}
        {/* icon - input*/}
        {/* button (ikonit) */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  TextAlign: {
    textAlign: "center",
  },
  menuButton: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 1,
    padding: 5,
  },
});
