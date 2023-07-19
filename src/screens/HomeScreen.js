import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { CarouselItem, ProductItem, Brand, CoffeeShopCard } from "../component";
import { carouselData, brandData } from "../data/fake";

import { ProductContext, CoffeeShopContext } from "../../App";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth;

const HomeScreen = () => {
  const { products } = useContext(ProductContext);
  const { restaurants } = useContext(CoffeeShopContext);
  const navigation = useNavigation();

  const renderProductItem = ({ item }) => (
    <ProductItem
      name={item.name}
      onPressAddToCart={() =>
        navigation.navigate("Cart", { screenProps: { item } })
      }
      price={item.price}
      image={item.image}
      isFavorite={item.isFavorite}
      onPressFavorite={() => handleFavoritePress(item.id)}
    />
  );

  const renderBrandCard = ({ item }) => <Brand item={item} />;

  const handleFavoritePress = (productId) => {
    // Handle favorite button press for the specific product
    console.log(`Favorite button pressed for product with ID: ${productId}`);
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderCoffeeShopItem = ({ item }) => {
    const { name, image, distance, location, rating } = item;
    return (
      <CoffeeShopCard
        name={name}
        image={image}
        onPress={() => navigation.navigate("Menu", { screenProps: { item } })}
        distance={distance}
        location={location}
        rating={rating}
      />
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headText}>
        <View style={styles.topText}>
          <View style={styles.mainTitle}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.nameText}>Parkling</Text>
            <Text style={styles.greetingText}>!</Text>
          </View>
          <View style={styles.iconText}>
            <Ionicons name="md-location-outline" color="#FF9314" size={20} />
            <Text style={styles.iconTextDetail}>Yuen Long, Hong kong</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              color="#fff"
              name="ticket-confirmation-outline"
              size={30}
            />
          </View>
          <View style={styles.icon}>
            <Ionicons color="#fff" name="heart-outline" size={30} />
          </View>
        </View>
      </View>
      <View style={styles.carousel}>
        <Carousel
          data={carouselData}
          renderItem={({ item }) => <CarouselItem item={item} />}
          sliderWidth={screenWidth}
          itemWidth={itemWidth}
        />
      </View>
      <View>
        <Text style={styles.titleText}>RECOMMENDED FOR YOU</Text>
        <FlatList
          style={styles.container1}
          horizontal
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <View>
        <Text style={styles.titleText}>POPULAR BRAND</Text>
        <FlatList
          data={brandData}
          renderItem={renderBrandCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View>
        <Text style={styles.titleText1}>COFFEE SHOP</Text>

        <FlatList
          data={restaurants}
          renderItem={renderCoffeeShopItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  headText: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  topText: {
    display: "flex",
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: "#D17842",
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  mainTitle: {
    fontSize: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconTextDetail: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF9314",
    fontFamily: "BebaseNuove",
  },
  greetingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FF9314",
  },
  carousel: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  separator: {
    width: 10,
    height: "100%",
  },
  container1: {
    marginTop: 10,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "BebaseNuove",
    color: "#000",
  },
  titleText1: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
