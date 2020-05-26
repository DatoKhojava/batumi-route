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
  CheckBox,
  ScrollView,
  TextInput,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";

import { number39 } from "../database/number39";
import { number40 } from "../database/number40";
import { number42 } from "../database/number42";
import { number44 } from "../database/number44";
import { number45 } from "../database/number45";

const routes = [number39, number40, number42, number44, number45];

export default function TripScreen() {
  const [coordinats, setCoordinats] = useState(number45);
  const [modalMenu, SetModalMenu] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <TouchableOpacity
        onPress={() => SetModalMenu(true)}
        style={{ zIndex: 1, position: "absolute", top: 20, right: 30 }}
      >
        <Ionicons name="md-menu" size={35} color="black" />
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
              <View>
                <FlatList
                  data={routes}
                  renderItem={({ item }) => (
                    <View>
                      <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                      />
                    </View>
                  )}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
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
          <Polyline coordinates={coordinats} />
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

{
  /* <MapView
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
          <Polyline coordinates={coordinats} />
        </MapView> */
}
