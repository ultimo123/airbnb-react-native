import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  return (
    <View style={styles.container}>
      {/* Row One Adults */}
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Adults</Text>
          <Text style={styles.agesText}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}
          >
            <Text style={styles.counter}>- </Text>
          </Pressable>

          <Text style={styles.value}>{adults} </Text>

          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}
          >
            <Text style={styles.counter}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Children</Text>
          <Text style={styles.agesText}>Ages 2-12</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={styles.counter}>- </Text>
          </Pressable>

          <Text style={styles.value}>{children} </Text>

          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}
          >
            <Text style={styles.counter}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Infants</Text>
          <Text style={styles.agesText}>Under 2</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={styles.counter}>- </Text>
          </Pressable>

          <Text style={styles.value}>{infants} </Text>

          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}
          >
            <Text style={styles.counter}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
