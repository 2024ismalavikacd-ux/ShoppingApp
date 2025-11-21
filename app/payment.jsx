import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { router } from "expo-router";
import { COLORS } from "../theme";
import { OrdersContext } from "./context/OrdersContext";


export default function Payment() {
  const [selected, setSelected] = useState("COD");

  const { cart, setCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const { orders, setOrders } = useContext(OrdersContext);

  const handlePayment = () => {
    if (cart.length === 0) return;

  // build new order entry
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      total,
      date: new Date().toDateString(),
    };

    // new orders go on TOP
    setOrders([newOrder, ...orders]);

    // clear cart
    setCart([]);

    // show confirmation → then go to orders
    alert("Order Confirmed!");
    router.push("/orders");
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CHECKOUT</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.itemName}>
              {item.name} x{item.qty}
            </Text>
            <Text style={styles.itemPrice}>₹{item.price * item.qty}</Text>
          </View>
        ))}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹{total}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Shipping Details</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Address" style={[styles.input, { height: 80 }]} multiline />
      <TextInput placeholder="Phone Number" style={styles.input} keyboardType="numeric" />

      <Text style={styles.sectionTitle}>Payment Method</Text>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selected === "CARD" && { backgroundColor: COLORS.plum, opacity: 0.9 }
        ]}
        onPress={() => setSelected("CARD")}
      >
        <Text style={styles.paymentText}>💳 Credit / Debit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selected === "UPI" && { backgroundColor: COLORS.plum, opacity: 0.9 }
        ]}
        onPress={() => setSelected("UPI")}
      >
        <Text style={styles.paymentText}>📲 UPI / Google Pay / Paytm</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selected === "COD" && { backgroundColor: COLORS.plum, opacity: 0.9 }
        ]}
        onPress={() => setSelected("COD")}
      >
        <Text style={styles.paymentText}>💵 Cash On Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
        <Text style={styles.payText}>Order now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    paddingTop: 50,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 3,
    color: COLORS.plum,
  },

  summaryCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#111",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: COLORS.plum,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  itemName: {
    fontSize: 16,
  },

  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 10,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "800",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "800",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  paymentOption: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#111",
  },

  paymentText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
  },

  payBtn: {
    backgroundColor: COLORS.plum,
    padding: 16,
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 30,
  },

  payText: {
    color: COLORS.ivory,
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 2,
  },
});
