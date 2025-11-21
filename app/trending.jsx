import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../theme";

const trendingProducts = [
  { id: 301, name: "Oversized Tee", price: 899, image: "https://i.pinimg.com/1200x/40/68/de/4068de0129f70153c9cd8448b0fc8511.jpg" },
  { id: 302, name: "Cargo Pants", price: 1599, image: "https://i.pinimg.com/1200x/ca/8b/38/ca8b38c56501e1692ec483bf1fecc4e8.jpg" },
  { id: 303, name: "Streetwear Jacket", price: 2499, image: "https://i.pinimg.com/736x/a3/e6/6d/a3e66dc27f2610723ecc56711867ebed.jpg" },
  { id: 304, name: "Chunky Sneakers", price: 2999, image: "https://i.pinimg.com/1200x/5b/2f/01/5b2f016854f90bb89c30ae7c1c5f6be3.jpg" },
  { id: 305, name: "Graphic Hoodie", price: 1999, image: "https://i.pinimg.com/1200x/0e/e7/b6/0ee7b6799c61addc021c41b860dcd844.jpg" },
  { id: 306, name: "Ripped Jeans", price: 1899, image: "https://i.pinimg.com/736x/06/83/f3/0683f3245d6af84a711629363e108604.jpg" },
  { id: 307, name: "Baseball Cap", price: 499, image: "https://i.pinimg.com/1200x/66/39/b1/6639b14e55fa4bfc623fed7319cb4435.jpg" },
  { id: 308, name: "Minimalist Tote Bag", price: 799, image: "https://i.pinimg.com/736x/8b/8c/2e/8b8c2e7fa94c9b63aad6fc8960c4a9ae.jpg" },
];


export default function Trending() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRENDING</Text>

      <FlatList
        data={trendingProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: `/products/${item.id}`,
                params: {
                  id: String(item.id),
                  name: item.name,
                  price: String(item.price),
                  image: item.image,
                  description: "Trending modern streetwear",
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.ivory, padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    paddingTop: 50,
    fontFamily: "serif",
    textAlign: "center",
    letterSpacing: 3,
    color: COLORS.plum,
  },
  card: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#111",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 170,
  },
  productName: {
    marginTop: 8,
    marginHorizontal: 8,
    fontSize: 14,
    fontFamily: "serif",
    fontWeight: "700",
    color: COLORS.black,
  },
  productPrice: {
    marginHorizontal: 8,
    marginBottom: 10,
    fontSize: 14,
    color: COLORS.plum,
    fontWeight: "700",
  },
});
