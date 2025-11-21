import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../theme";

const menProducts = [
  { id: 101, name: "White Shirt", price: 1499, image: "https://i.pinimg.com/736x/a1/86/2a/a1862a1ab95623596505a5b4c67c4f34.jpg" },
  { id: 102, name: "Slim Fit Jeans", price: 1599, image: "https://i.pinimg.com/736x/6f/4f/9e/6f4f9e678671abe53c85e27246b43142.jpg" },
  { id: 103, name: "Black Sneakers", price: 1999, image: "https://i.pinimg.com/736x/8a/13/02/8a1302ceda7708f1ead7da5bbfb239af.jpg" },
  { id: 104, name: "Beige Hoodie", price: 1799, image: "https://i.pinimg.com/736x/69/4a/db/694adb591c0c2dea63fb63fdfc70196a.jpg" },
  { id: 105, name: "Formal Trousers", price: 1499, image: "https://i.pinimg.com/736x/8e/1c/2f/8e1c2fab5e69c94671dc170d71a4fe8f.jpg" },
  { id: 106, name: "Checked Shirt", price: 1299, image: "https://i.pinimg.com/1200x/78/2e/ae/782eae89914463fee3a6e7557f3a776d.jpg" },
  { id: 107, name: "Denim Jacket", price: 1499, image: "https://i.pinimg.com/1200x/0d/b6/ee/0db6ee061c66253fcd02200e64c67c49.jpg" },
  { id: 108, name: "Sports Joggers", price: 1299, image: "https://i.pinimg.com/736x/72/5b/77/725b77cf1f40d0666beea3c7496273fd.jpg" },
];


export default function Men() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEN</Text>

      <FlatList
        data={menProducts}
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
                  description: "Men's premium fashion item",
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
