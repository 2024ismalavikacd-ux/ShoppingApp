import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { COLORS } from "../../theme";

export default function ProductDetails() {
  const params = useLocalSearchParams();

  const id = params.id;
  const name = params.name;
  const price = Number(params.price);
  const image = params.image;
  const description = params.description;

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  console.log("PRODUCT PARAMS:", params);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />

      <TouchableOpacity
        style={styles.viewimageBtn}
        onPress={() =>
          router.push({
            pathname: "/tryon",
            params: { image }
          })
        }
    >
      <Text style={styles.viewimageBtn}>View image</Text>
    </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₹{price}</Text>

      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        style={styles.buyBtn}
        onPress={() => {
          // create a temporary cart with only this item
          addToCart({ id, name, price, image });

          // go to payment page
          router.push("/payment");
        }}
      >
        <Text style={styles.buyText}>BUY NOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => addToCart({ id, name, price, image })}
      >
        <Text style={styles.cartText}>ADD TO CART</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => addToWishlist({ id, name, price, image })}
      >
        <Text style={styles.wishlistText}>♡ ADD TO WISHLIST</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    padding: 20,
    paddingTop: 120,
  },

  productImage: {
    width: "100%",
    height: 350,
    borderRadius: 15,
    marginBottom: 5,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "serif",
    marginBottom: 6,
    letterSpacing: 1,
    color: COLORS.black,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.plum,
    marginBottom: 14,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: 70,
  },


  viewimageBtn: {
    padding: 12,
    borderRadius: 10,
  },

    viewimageText: {
    fontSize: 15,
    fontWeight: "600",
    fontColor: "#4B1B2F",
    textAlign: "center",
    letterSpacing: 1,
  },

  buyBtn: {
    backgroundColor: COLORS.plum,
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
  },

  buyText: {
    color: COLORS.ivory,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },

  cartBtn: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.plum,
    marginBottom: 10,
  },

  cartText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.plum,
    textAlign: "center",
    letterSpacing: 1,
  },

  wishlistBtn: {
    padding: 12,
    borderRadius: 10,
  },

  wishlistText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.plum,
    textAlign: "center",
    letterSpacing: 1,
  },
});
