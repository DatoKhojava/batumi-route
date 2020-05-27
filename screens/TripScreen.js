import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";

import { number39 } from "../database/number39";
import { number40 } from "../database/number40";
import { number42 } from "../database/number42";
import { number44 } from "../database/number44";
import { number45 } from "../database/number45";

const routes = [
  { id: 1, title: "number 39", coords: number39 },
  { id: 2, title: "numer 40", coords: number40 },
  { id: 3, title: "number 42", coords: number42 },
  { id: 4, title: "number 44", coords: number44 },
  { id: 5, title: "number 45", coords: number45 },
];

export default function TripScreen() {
  const [coordinats, setCoordinats] = useState([]);
  const [modalMenu, SetModalMenu] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <TouchableOpacity
        onPress={() => SetModalMenu(true)}
        style={{ zIndex: 1, position: "absolute", top: 20, right: 30 }}
      >
        <Ionicons name="md-menu" size={35} color="black" />
      </TouchableOpacity>
      <Modal visible={modalMenu} animationType="slide">
        <View>
          <TouchableOpacity>
            <Ionicons
              name="ios-close-circle"
              size={24}
              color="black"
              style={{
                justifyContent: "center",
                textAlign: "center",
                margin: 15,
              }}
              onPress={() => SetModalMenu(false)}
            />
          </TouchableOpacity>
          <View>
            <FlatList
              data={routes}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={item.id}
                  style={{ margin: 15 }}
                  onPress={() => {
                    setCoordinats(item.coords);
                    SetModalMenu(!modalMenu);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Ionicons name="md-bus" size={24} color="black" />
                    <Text style={{ fontWeight: "bold", margin: 5 }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            width: "100%",
            height: "100%",
          }}
          initialRegion={{
            latitude: 41.6168,
            longitude: 41.6367,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Polyline
            coordinates={coordinats}
            strokeColor="#333"
            strokeWidth={4}
          />
        </MapView>
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
