import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../theme";
import { router } from "expo-router";


export default function Account() {
  return (
    <View style={styles.container}>

      {/* Profile Image */}
      <Image
        source={{ uri: "https://i.pinimg.com/736x/b6/2c/8f/b62c8f8382b6b19f0b190bbcf5aee818.jpg" }}
        style={styles.profileImg}
      />

      {/* Name */}
      <Text style={styles.name}>Mira Rai</Text>

      {/* Email */}
      <Text style={styles.email}>mirarai1997@gmail.com</Text>

      {/* Address */}
      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.address}>
        221B RK Street, Yadavnagar, Mysore,
        570023
      </Text>

      {/* Edit Buttons */}
      <TouchableOpacity style={styles.gotocartBtn} onPress={() => router.push("/cart")}>
        <Text style={styles.gotocartText}>Go to cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.gotowishlistBtn} onPress={() => router.push("/wishlist")}>
        <Text style={styles.gotowishlistText}>Go to wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editBtn} onPress={() => router.push("/editprofile")}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => alert("Logged out!")}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ivory",
    alignItems: "center",
    paddingTop: 200,
    paddingHorizontal: 20,
  },

  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 45,
  },

  name: {
    fontSize: 29,
    fontFamily: "serif",
    fontWeight: "700",
    marginBottom: 5,
  },

  email: {
    fontSize: 18,
    fontFamily: "serif",
    color: "gray",
    marginBottom: 70,
  },

  sectionTitle: {
    width: "100%",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },

  address: {
    width: "100%",
    fontSize: 16,
    color: "#444",
    marginBottom: 50,
    lineHeight: 22,
  },

  editBtn: {
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  editText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  logoutBtn: {
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  logoutText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  gotocartBtn: {
    backgroundColor: COLORS.plum,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  gotocartText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  gotowishlistBtn: {
    backgroundColor: COLORS.plum,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  gotowishlistText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
