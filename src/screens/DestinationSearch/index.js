import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import searchResults from "../../../assets/data/search";

const DestinationSearchScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate("Guests")}
            >
              <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} color="black" />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
