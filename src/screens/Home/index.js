import React from "react";
import { View, ImageBackground, Text, Pressable } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Feather name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Destination Search")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
