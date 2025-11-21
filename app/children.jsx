import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../theme";

const childrenProducts = [
  { id: 201, name: "Kids Hoodie", price: 799, image: "https://i.pinimg.com/1200x/ad/e5/34/ade534bf9d55be60292259896472fd04.jpg" },
  { id: 202, name: "Cartoon T-shirt", price: 499, image: "https://i.pinimg.com/1200x/66/94/7e/66947e15abb9a966bd20703eccc2cf63.jpg" },
  { id: 203, name: "Baby Dress", price: 999, image: "https://i.pinimg.com/1200x/24/d6/90/24d6905202c27912b24b89be0abe0fa4.jpg" },
  { id: 204, name: "Mini Sneakers", price: 1099, image: "https://i.pinimg.com/1200x/b8/24/2e/b8242e95f8b3cc19963ebf315cf31382.jpg" },
  { id: 205, name: "Play Romper", price: 1199, image: "https://i.pinimg.com/1200x/8b/8e/e8/8b8ee824fcbc294f3a1827ce359f9bcd.jpg" },
  { id: 206, name: "Knit sweater", price: 499, image: "https://i.pinimg.com/736x/62/3e/4e/623e4e3aca2ae404c0f1a0403a716848.jpg" },
  { id: 207, name: "Raincoat", price: 899, image: "https://i.pinimg.com/1200x/26/42/7f/26427f570438e9179a5fa238d5415d10.jpg" },
  { id: 208, name: "Sun hat", price: 599, image: "https://i.pinimg.com/1200x/26/8a/43/268a434f74e803ecab61ad99b0e06484.jpg" },
];


export default function Children() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHILDREN</Text>

      <FlatList
        data={childrenProducts}
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
                  description: "High-quality kids fashion item",
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
    fontSize: 27,
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
