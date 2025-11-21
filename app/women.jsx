import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../theme";

const womenProducts = [
  { id: 1, name: "Floral Dress", price: 1999, image: "https://i.pinimg.com/1200x/37/d3/3a/37d33aee4ace6a768b64900da11dc64b.jpg" },
  { id: 2, name: "Black Heels", price: 1499, image: "https://i.pinimg.com/736x/f9/1a/85/f91a85728e03be1e157e3d1506d3bc45.jpg" },
  { id: 3, name: "White Top", price: 799, image: "https://i.pinimg.com/1200x/f5/d3/a8/f5d3a86b0fc21f6369f5a3d7d9011c39.jpg" },
  { id: 4, name: "Denim Jacket", price: 2299, image: "https://i.pinimg.com/1200x/d8/e7/6b/d8e76b31488282379bf8ad04ed913196.jpg" },
  { id: 5, name: "Satin Skirt", price: 1599, image: "https://i.pinimg.com/736x/8f/55/7f/8f557fac37afaaa3a7ff5e4015ebc2d3.jpg" },
  { id: 6, name: "Blazer", price: 1299, image: "https://i.pinimg.com/1200x/00/76/d4/0076d46167830c30c6c26384fea54a24.jpg" },
  { id: 7, name: "Cotton Kurti", price: 1899, image: "https://i.pinimg.com/736x/eb/99/28/eb992842852f2e46bb4b661acafbc9da.jpg" },
  { id: 8, name: "Party gown", price: 1899, image: "https://i.pinimg.com/1200x/39/93/90/399390424fd2c639aa316384cd887cb1.jpg" },
];


export default function Women() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WOMEN</Text>

      <FlatList
        data={womenProducts}
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
                  description: "High-quality womenswear item",
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
    borderColor: "#black",
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
