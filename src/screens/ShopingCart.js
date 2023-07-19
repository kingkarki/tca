import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";

const ShoppingCartScreen = () => {
  const cartItems = [
    {
      id: "1",
      title: "Item 1",
      size: "M",
      quantity: 2,
      price: 10,
      image: require("../../assets/Image1.png"),
    },
    {
      id: "2",
      title: "Item 2",
      size: "S",
      quantity: 1,
      price: 5,
      image: require("../../assets/Image.png"),
    },
    {
      id: "3",
      title: "Item 3",
      size: "L",
      quantity: 3,
      price: 15,
      image: require("../../assets/Image1.png"),
    },
  ];

  const handleClearAll = () => {
    // Handle clear all button press
    console.log("Clear All button pressed");
  };

  const handleDeleteItem = (itemId) => {
    // Handle delete button press for the specific item
    console.log(`Delete button pressed for item with ID: ${itemId}`);
  };

  const handleCheckout = () => {
    // Handle checkout button press
    console.log("Checkout button pressed");
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSize}>{item.size}</Text>
        <View style={styles.quantityContainer1}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <FontAwesome name="minus" size={13} color="#FF9314" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <FontAwesome name="plus" size={13} color="#FF9314" />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleDeleteItem(item.id)}
        style={styles.deleteButton}
      >
        <Octicons name="trash" size={25} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cartList}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleCheckout}
          style={styles.checkoutButton}
        >
          <View style={styles.totalItems}>
            <Text style={styles.totalItemsText}>{getTotalItems()}</Text>
          </View>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.totalPrice}>
            <Text style={styles.totalPriceText}>${getTotalPrice()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins500",
  },
  clearAllText: {
    fontSize: 16,
    color: "red",
    fontFamily: "Poppins500",
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Poppins500",
  },
  itemSize: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
    fontFamily: "Poppins500",
    color: "#9E9E9E",
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  quantityContainer1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  quantityButton: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 5,
    display: "flex",
    backgroundColor: "#fff",
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
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  deleteButton: {
    marginRight: 20,
    marginTop: -20,
  },
  footer: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginTop: 20,
  },
  totalItems: {
    height: 30,
    width: 30,
    backgroundColor: "#000",
    borderRadius: 15,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  totalItemsText: {
    color: "#fff",
    fontSize: 18,
  },
  totalPriceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  totalPrice: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutButton: {
    backgroundColor: "#D17742",
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    width: "97%",
    height: 60,
    flexDirection: "row",
    display: "flex",
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF9314",
    marginRight: -20,
  },
});

export default ShoppingCartScreen;
