import { useState, useEffect, createContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { productData, coffeeShopData } from "./src/data/fake";
import { CartContextProvider } from "./src/CartContext";
import AppScreen from "./src/app";

const loadFonts = async () => {
  await Font.loadAsync({
    Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins700: require("./assets/fonts/Poppins-Bold.ttf"),
    RobotoBold: require("./assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
    BebaseNuove: require("./assets/fonts/BebasNeue-Regular.ttf"),
  });
};

// Create the context
export const ProductContext = createContext();
export const CoffeeShopContext = createContext();

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const loadAsyncData = async () => {
      await loadFonts();
      setIsFontLoaded(true);
    };

    loadAsyncData();
  }, []);

  useEffect(() => {
    loadData();
    setRestaurants(coffeeShopData);
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("products");
      if (data !== null) {
        const parsedData = JSON.parse(data);
        setProducts(parsedData);
      } else {
        await AsyncStorage.setItem("products", JSON.stringify(productData));
        setProducts(productData);
      }
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  if (!isFontLoaded) {
    return null; // You can render a loading indicator here if needed
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      <CoffeeShopContext.Provider
        value={{
          restaurants,
        }}
      >
        <CartContextProvider>
          <SafeAreaView style={styles.content}>
            <AppScreen />
          </SafeAreaView>
        </CartContextProvider>
      </CoffeeShopContext.Provider>
    </ProductContext.Provider>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
