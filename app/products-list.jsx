import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const productsData = {
  womens: [
    {
      id: "1",
      name: "Floral Summer Dress",
      price: 1299,
      image: "https://images.unsplash.com/photo-1520975918318-3b37a4c0bfbb",
      description: "Lightweight floral dress perfect for summer outings.",
    },
    {
      id: "2",
      name: "Elegant Blouse",
      price: 899,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      description: "Soft fabric, premium quality, office-ready top.",
    },
  ],

  mens: [
    {
      id: "3",
      name: "Classic White Shirt",
      price: 999,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      description: "Slim fit, breathable cotton, perfect for all occasions.",
    },
  ],

  children: [
    {
      id: "4",
      name: "Kids Hoodie",
      price: 699,
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      description: "Soft, warm, and cute hoodie for little ones.",
    },
  ],

  trending: [
    {
      id: "5",
      name: "Oversized Streetwear Tee",
      price: 799,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f76",
      description: "Viral TikTok fashion piece trending worldwide.",
    },
  ],
};

export default function ProductList({ category }) {
  const data = productsData[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{category.toUpperCase()}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/products/[id]",
                params: {
                  id: item.id,
                  name: item.name,
                  price: String(item.price), // convert to string
                  image: item.image,
                  description: item.description,
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F0", padding: 20 },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
    letterSpacing: 2,
    color: "#4B1B2F",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 4,
  },

  img: { width: "100%", height: 220, borderRadius: 12, marginBottom: 12 },

  name: { fontSize: 18, fontWeight: "600", color: "#000" },

  price: { fontSize: 16, color: "#4B1B2F", fontWeight: "600", marginTop: 5 },
});
