import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CoffeeShopCard = ({
  name,
  image,
  distance,
  location,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.details}>
            <View style={styles.locationContainer}>
              <FontAwesome name="map-marker" size={18} color="#959595" />
              <Text style={styles.distance}> {distance} km . </Text>
            </View>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="#FCBC00" />
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    height: 80,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 5,
    fontSize: 14,
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: "#888",
  },
  distance: {
    fontSize: 14,
    color: "#888",
  },
});

export default CoffeeShopCard;
