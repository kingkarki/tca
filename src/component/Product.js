import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProductItem = ({
  name,
  price,
  image,
  isFavorite,
  onPressFavorite,
  onPressAddToCart,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity
          onPress={onPressFavorite}
          style={styles.favoriteButton}
        >
          <FontAwesome
            name={isFavorite ? "heart" : "heart-o"}
            size={20}
            color={isFavorite ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity onPress={onPressAddToCart} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    width: 200,
    height: 280,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
    zIndex: 1,
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
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    color: "#FF9314",
  },
  addButton: {
    backgroundColor: "#D17842",
    width: 35,
    height: 35,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductItem;
