import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react";
import { WishlistContext } from "./context/WishlistContext";
import { CartContext } from "./context/CartContext";
import { COLORS } from "../theme";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WISHLIST</Text>

      {wishlist.length === 0 ? (
        <Text style={styles.empty}>No items in wishlist 😭</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>

                <TouchableOpacity
                  style={styles.moveBtn}
                  onPress={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                  }}
                >
                  <Text style={styles.moveText}>MOVE TO CART</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.ivory, padding: 20 },

  title: {
    fontSize: 27,
    fontWeight: "800",
    marginBottom: 100,
    paddingTop: 60,
    fontFamily: "serif",
    textAlign: "center",
    letterSpacing: 2,
    color: COLORS.plum,
  },

  empty: {
    textAlign: "center",
    marginTop: 70,
    fontSize: 21,
    color: COLORS.gray,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#111",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },

  info: { flex: 1 },

  name: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },

  price: {
    fontSize: 14,
    color: COLORS.plum,
    marginBottom: 10,
    fontWeight: "700",
  },

  moveBtn: {
    backgroundColor: COLORS.black,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 6,
  },

  moveText: {
    color: COLORS.ivory,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },

  remove: {
    color: "red",
    fontWeight: "600",
    fontSize: 12,
  },
});
