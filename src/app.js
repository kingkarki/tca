import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OticonsIcon from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//Import some screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";
import ShoppingCartScreen from "./screens/ShopingCart";

// Initialized all Navigator
const Tab = createBottomTabNavigator();

export function AppTabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: "#9f9f9f",
        tabBarActiveTintColor: "#b48164",
        tabBarLabelStyle: { fontSize: 14, fontWeight: 600, paddingBottom: 3 },
        tabBarStyle: {
          height: 55,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          borderTopWidth: 0,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          elevation: 4,
        },
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <OticonsIcon
              name="home"
              color={color}
              size={25}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons
              name="grid"
              color={color}
              size={25}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-cart-outline"
              color={color}
              size={25}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-person-outline"
              color={color}
              size={25}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
