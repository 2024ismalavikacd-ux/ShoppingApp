import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../theme";
import { useContext } from "react";
import { OrdersContext } from "./context/OrdersContext";

const pastOrders = [
  {
    id: "1",
    name: "Floral Dress",
    price: 1999,
    image: "https://i.pinimg.com/1200x/37/d3/3a/37d33aee4ace6a768b64900da11dc64b.jpg",
    date: "Jan 21, 2025",
  },
  {
    id: "2",
    name: "Oversized Tee",
    price: 899,
    image: "https://i.pinimg.com/1200x/40/68/de/4068de0129f70153c9cd8448b0fc8511.jpg",
    date: "Jan 10, 2025",
  },
];

export default function Orders() {
  const { orders } = useContext(OrdersContext);
  const allOrders = [...orders, ...pastOrders];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR ORDERS</Text>

      <FlatList
        data={allOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              marginBottom: 16,
              borderRadius: 10,
              padding: 15,
              borderWidth: 1,
              borderColor: "#111",
            }}
          >
            {item.items ? (
              <>
                <Text style={styles.date}>Ordered on {item.date}</Text>

                {item.items.map((product) => (
                  <View
                    key={product.id}
                    style={{ flexDirection: "row", marginTop: 10 }}
                  >
                    <Image
                      source={{ uri: product.image }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 8,
                        marginRight: 12,
                      }}
                    />

                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.name}>{product.name}</Text>
                      <Text style={styles.price}>
                        ₹{product.price} × {product.qty}
                      </Text>
                    </View>
                  </View>
                ))}

                <Text style={[styles.price, { marginTop: 10 }]}>
                  Total: ₹{item.total}
                </Text>
              </>
            ) : (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>₹{item.price}</Text>
                  <Text style={styles.date}>Ordered on {item.date}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.ivory, padding: 20 },

  title: {
    fontSize: 27,
    fontWeight: "800",
    paddingTop: 50,
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 3,
    color: COLORS.plum,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#111",
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
  },

  info: { flex: 1, justifyContent: "center" },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  price: {
    fontSize: 14,
    color: COLORS.plum,
    marginVertical: 4,
    fontWeight: "700",
  },

  date: {
    fontSize: 12,
    color: COLORS.gray,
  },

  backBtn: {
    marginTop: 10,
    backgroundColor: COLORS.plum,
    padding: 12,
    marginBottom: 16,
    borderRadius: 12,
  },

  backText: {
    color: COLORS.ivory,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
