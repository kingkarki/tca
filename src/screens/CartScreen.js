import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ProductContext } from "../../App";
import { CartContext } from "../CartContext";
const CartScreen = (props) => {
  const navigation = useNavigation();
  const [item, setItem] = useState(null);
  const [cItem, setCItem] = useState(null);
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const handlePrevButtonPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (props.route?.params) {
      const {
        route: {
          params: { screenProps },
        },
      } = props;

      const item = screenProps?.item;
      setItem(item);
      addToCart(item);
    }
  }, []);

  const currentItems = cartItems.filter((cartItem) => cartItem.id === item?.id);
  const curentPrice = currentItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0
  );

  // find count if the id is same as item id
  const count = cartItems.filter((cartItem) => cartItem.id === item?.id).length;

  const RadioButton = ({ selected }) => (
    <View
      style={[styles.radioButton, selected && styles.radioButtonSelected]}
    />
  );

  const SizeButton = ({ label }) => (
    <TouchableOpacity
      style={label === cItem ? styles.sizeButtonA : styles.sizeButton}
      onPress={() => setCItem(label)}
    >
      <Text
        style={label === cItem ? styles.sizeButtonTextA : styles.sizeButtonText}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <ImageBackground
          source={require("../../assets/unsplash_tA90pRfL2gM.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <TouchableOpacity
              onPress={handlePrevButtonPress}
              style={styles.prevButton}
            >
              <FontAwesome name="chevron-left" size={15} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <FontAwesome
                name="heart"
                size={20}
                color={item.isFavorite ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topContent}>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item?.name}</Text>
              <Text style={styles.itemDescription}>With Oat Milk</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome
                  name="star"
                  size={16}
                  color="#D98046"
                  style={styles.starIcon}
                />
                <Text style={styles.rating}>
                  {item?.rating} <Text style={styles.rat}>(6.986)</Text>
                </Text>
              </View>
            </View>
            <View style={styles.itemPriceContainer}>
              <View style={styles.ctr}>
                <Image
                  source={require("../../assets/cofee-icon.png")}
                  style={styles.itemImage}
                />
                <Image
                  source={require("../../assets/cart-icon.png")}
                  style={styles.itemImage}
                />
              </View>
              <Text style={styles.type}>Medium Roasted</Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.sectionTitle1}>Sugar Level</Text>
        <View style={styles.radioButtonsContainer}>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonText}>Normal</Text>
            <RadioButton selected={false} />
          </View>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonText}>High</Text>
            <RadioButton selected={true} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Special Instruction <Text style={styles.opt}>Optional</Text>
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Add special instruction"
        />
        <View style={styles.sizeButtonsContainer}>
          <SizeButton label="S" />
          <SizeButton label="M" />
          <SizeButton label="L" />
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesome name="minus" size={15} color="#FF9314" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{count}</Text>
          <TouchableOpacity
            onPress={() => increaseQuantity(item.id)}
            style={styles.quantityButton}
          >
            <FontAwesome name="plus" size={15} color="#FF9314" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cartFooter}>
        <View style={styles.piceButton}>
          <Text style={styles.priceTitle}>Price</Text>
          <Text style={styles.price}>${curentPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemDescription: {
    color: "#A99A97",
  },
  type: {
    marginTop: 10,
    color: "#A99A97",
    fontSize: 14,
    fontFamily: "RobotoBold",
  },
  section1: {
    paddingBottom: 20,
  },
  ctr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginRight: 10,
  },
  opt: {
    color: "#888",
    fontSize: 14,
  },
  section: {
    borderTopWidth: 8,
    borderTopColor: "#939393",
    paddingTop: 5,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 350,
    borderBottomLeftRadius: 40,
    resizeMode: "stretch",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  prevButton: {
    padding: 10,
    height: 35,
    width: 35,
    borderRadius: "50%",
    backgroundColor: "#888",
  },
  rat: {
    color: "#888",
  },
  topContent: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins700",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 5,
  },
  rating: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins500",
  },
  sectionTitle1: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 20,
    fontFamily: "Poppins500",
  },
  radioButtonsContainer: {
    paddingLeft: 20,
    display: "flex",
    gap: 2,
    marginBottom: 5,
  },
  radioButtonItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  radioButtonText: {
    fontSize: 16,
    marginRight: 5,
    color: "#939393",
    fontFamily: "Poppins500",
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#888",
    backgroundColor: "#fff",
  },
  radioButtonSelected: {
    backgroundColor: "#888",
  },
  inputField: {
    borderWidth: 1,
    height: 40,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    backgroundColor: "#E9E9E9",
    padding: 10,
    marginBottom: 20,
  },
  sizeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 20,
  },
  sizeButton: {
    borderRadius: 10,
    minWidth: 90,
    padding: 10,
    minHeight: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9E9E9",
  },

  sizeButtonA: {
    borderRadius: 10,
    minWidth: 90,
    padding: 10,
    minHeight: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D17742",
    backgroundColor: "#321D0B",
  },
  sizeButtonTextA: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  sizeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A6A2A2",
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
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
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  priceTitle: {
    fontSize: 18,
    color: "#979696",
    fontFamily: "RobotoBold",
  },
  cartFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#888",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    position: "absolute",
    width: "100%",
    bottom: 80,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF9314",
    fontFamily: "Poppins500",
  },
  addToCartButton: {
    width: "60%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#D17742",
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins700",
  },
  overlay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 30,
    paddingHorizontal: 20,
  },
  piceButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartScreen;
