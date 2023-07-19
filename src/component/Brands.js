import { View, StyleSheet, Image } from "react-native";
import React from "react";

const Brands = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.card}>
      <Image source={item.logo} style={styles.logo} />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
