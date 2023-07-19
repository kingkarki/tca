import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { ProductItem } from "../component";
import { ProductContext } from "../../App";

const MenuScreen = (props) => {
  const [activeTab, setActiveTab] = useState(null);
  const [item, setItem] = useState(null);
  const { products } = useContext(ProductContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (props.route?.params) {
      const {
        route: {
          params: { screenProps },
        },
      } = props;

      const item = screenProps?.item;
      setItem(item);
    }
  }, []);

  const coffeeShopData = {
    name: "Coffee House",
    image: require("../../assets/unsplash_c2Y16tC3yO8.png"),
    distance: 1.2,
    location: "123 Main St",
    rating: 4.5,
    price: "$$",
    openingTime: "9:00 AM - 6:00 PM",
  };

  const tabData = [
    { id: "1", name: "Hot Drinks" },
    { id: "2", name: "Cold Drinks" },
    { id: "3", name: "Pastries" },
    { id: "4", name: "Sandwiches" },
  ];

  const renderTabButton = ({ item }) => (
    <TouchableOpacity onPress={() => setActiveTab(item.id)}>
      <View
        style={activeTab === item.id ? styles.activeTabButtn : styles.tabButton}
      >
        <Text
          style={
            activeTab === item.id
              ? styles.activeButtonText
              : styles.tabButtonText
          }
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleFavoritePress = (productId) => {
    setIsFavorite(!isFav);
  };

  const handlePrevButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeShopData.image}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handlePrevButtonPress}
              style={styles.prevButton}
            >
              <FontAwesome name="chevron-left" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.homeText}>
            <Text style={styles.shopName}>{item?.name}</Text>
            <View style={styles.infoRow}>
              <FontAwesome name="map-marker" size={16} color="#fff" />
              <Text style={styles.infoText}>{item?.distance} km</Text>
              <FontAwesome
                name="star"
                size={20}
                color="#FCBC00"
                style={styles.starIcon}
              />
              <Text style={styles.infoText}>
                {item?.rating || coffeeShopData.rating}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialIcon name="delivery-dining" size={20} color="#fff" />
              <Text style={styles.infoText}>{coffeeShopData.price}</Text>
              <FontAwesome
                name="clock-o"
                size={16}
                color="#fff"
                style={styles.timeIcon}
              />
              <Text style={styles.infoText}>{coffeeShopData.openingTime}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <ScrollView>
        <FlatList
          data={tabData}
          renderItem={renderTabButton}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContainer}
        />

        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.itemContainer,
                index % 2 !== 0 && styles.itemContainerRight,
              ]}
            >
              <ProductItem
                name={item.name}
                price={item.price}
                image={item.image}
                isFavorite={item.isFavorite}
                onPressFavorite={() => handleFavoritePress(item.id)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  prevButton: {
    padding: 10,
    height: 35,
    width: 35,
    borderRadius: "50%",
    backgroundColor: "#888",
  },
  backgroundImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    marginBottom: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
  homeText: {
    position: "absolute",
    left: 15,
    bottom: 30,
  },
  shopName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  starIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  timeIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
  },
  tabContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: "#E9E9E9",
    borderRadius: 8,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#A4A4A4",
  },
  activeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF9314",
  },
  activeTabButtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: "#fff",
    borderColor: "#FF9314",
    borderWidth: 2,
    borderRadius: 8,
  },
  itemContainer: {
    flex: 1,
    marginLeft: 10, // Adjust the margin as needed
    marginBottom: 10, // Adjust the margin as needed
  },
  itemContainerRight: {
    marginRight: 10, // Adjust the margin as needed
  },
});

export default MenuScreen;
