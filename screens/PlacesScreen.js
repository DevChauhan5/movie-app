import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../PlaceContext";
import { Feather } from "@expo/vector-icons";

const PlacesScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 15, letterSpacing: 1 }}>
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),
    });
  }, []);
  const { selectedCity, setSelectedCity } = useContext(Place);
  return (
    <View>
      <View
        style={{
          margin: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#E0E0E0",
          borderWidth: 2,
          borderRadius: 30,
        }}
      >
        <TextInput placeholder="Search Your City" />
        <Feather name="search" size={24} color="black" />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Selected Location</Text>
        <Text>{selectedCity}</Text>
      </View>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
