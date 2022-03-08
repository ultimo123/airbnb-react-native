import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import styles from "./styles";

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://thejetset.com/wp-content/uploads/2021/12/airbnb-new-years-eve-party.jpg",
        }}
      />

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
