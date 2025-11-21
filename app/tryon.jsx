import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function TryOn() {
  const { image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <View style={styles.closeIcon} />
      </TouchableOpacity>

      <Image
        source={{ uri: image }}
        style={styles.productImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  closeBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },

  closeIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
  },
});
