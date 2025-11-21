import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { router } from "expo-router";
import { COLORS } from "../theme";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR CART</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty 😭</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>

                <View style={styles.qtyRow}>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => decreaseQty(item.id)}>
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyNumber}>{item.qty}</Text>

                  <TouchableOpacity style={styles.qtyBtn} onPress={() => increaseQty(item.id)}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {cart.length > 0 && (
        <TouchableOpacity style={styles.payBtn} onPress={() => router.push("/payment")}>
          <Text style={styles.payText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.ivory, padding: 20 },

  title: {
    fontSize: 28,
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
    fontSize: 21,
    marginTop: 40,
    color: COLORS.black,
  },

  itemCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
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

  info: { flex: 1, justifyContent: "space-between" },

  name: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },

  price: {
    fontSize: 14,
    color: COLORS.plum,
    marginBottom: 8,
    fontWeight: "700",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyBtn: {
    backgroundColor: "#eee",
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: { fontSize: 18, fontWeight: "700" },

  qtyNumber: { fontSize: 16, fontWeight: "700" },

  remove: {
    color: "red",
    marginTop: 8,
    fontWeight: "600",
    fontSize: 12,
  },

  payBtn: {
    backgroundColor: COLORS.black,
    padding: 16,
    borderRadius: 10,
    marginTop: 14,
  },

  payText: {
    color: COLORS.ivory,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
