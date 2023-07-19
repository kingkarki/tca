import { View, Text, Image, StyleSheet } from "react-native";
const CarouselItem = ({ item }) => {
  return <Image style={styles.image} source={item.image} />;
};

export default CarouselItem;

const styles = StyleSheet.create({
  //   carouselItemContainer: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     height: 190,
  //   },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 190,
  },
});
