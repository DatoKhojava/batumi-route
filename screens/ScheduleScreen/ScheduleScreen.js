import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import "./style.js";

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Ionicons name="ios-bus" size={35} color="black" />
          </View>
          <Text style={styles.number}>№42</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>დრო</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>განრიგი</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Ionicons name="ios-bus" size={35} color="black" />
          </View>
          <Text style={styles.number}>№42</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>დრო</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>განრიგი</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Ionicons name="ios-bus" size={35} color="black" />
          </View>
          <Text style={styles.number}>№42</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>დრო</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>განრიგი</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Ionicons name="ios-bus" size={35} color="black" />
          </View>
          <Text style={styles.number}>№42</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>განრიგი</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>მარშუტი</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Ionicons name="ios-bus" size={35} color="black" />
          </View>
          <Text style={styles.number}>№42</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>დრო</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>განრიგი</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

//require()

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: 25,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
  },
  cardHeader: {
    flexDirection: "row",
    padding: 25,
  },
  number: {
    alignSelf: "center",
    marginLeft: "15%",
    fontWeight: "bold",
  },
  buttons: {
    margin: 5,
    flexDirection: "row",
  },
  button: {
    padding: 15,
    margin: 5,
    backgroundColor: "#eee",
    width: 150,
    textAlign: "center",
  },
});
