import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image, Animated } from "react-native";
import { useRef, useEffect } from "react";
import { router } from "expo-router";
import { COLORS } from "../theme";

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;     // for fade in
  const scaleAnim = useRef(new Animated.Value(0.7)).current;  // for bounce

  useEffect(() => {
  Animated.parallel([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }),
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }),
  ]).start();
}, []);

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.smallBrand}>EST. 2025</Text>
        <Text style={styles.smallBrand}>BLACKBERRY</Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Blackberry</Text>
        <Text style={styles.tagline}>The Statement</Text>
      </View>
      
      <Animated.Image
        source={require("../assets/logo.png")}
        style={{
          width: 120,
          height: 120,
          marginTop: 20,
          alignSelf: "center",
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      />

      {/* Category Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => router.push("/women")}>
          <Text style={styles.menuItem}>WOMEN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/men")}>
          <Text style={styles.menuItem}>MEN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/children")}>
          <Text style={styles.menuItem}>CHILDREN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/trending")}>
          <Text style={styles.menuItem}>TRENDING</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/account")}>
          <Text style={styles.navItem}>ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/wishlist")}>
          <Text style={styles.navItem}>WISHLIST</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Text style={styles.navItem}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/orders")}>
          <Text style={styles.navItem}>ORDERS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallBrand: {
    fontSize: 10,
    letterSpacing: 2,
    color: COLORS.gray,
  },

  logoContainer: {
    marginTop: "20%",
    alignItems: "center",
  },

  logo: {
    fontSize: 65,
    marginTop: 70,
    fontFamily: "cursive",
    fontWeight: "900",
    color: COLORS.plum,
    letterSpacing: 1,
  },

  tagline: {
    marginTop: 6,
    fontSize: 17,
    fontFamily: "serif",
    letterSpacing: 1,
    color: COLORS.gray,
    textTransform: "uppercase",
  },

  menuContainer: {
    marginTop: 120,
    alignItems: "center",
  },

  menuItem: {
    fontSize: 28,
    marginVertical: 12,
    fontFamily: "serif-monospace",
    fontWeight: "900",
    letterSpacing: 4,
    color: COLORS.gray,
  },

  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: COLORS.plum,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navItem: {
    fontSize: 13,
    fontFamily: "serif-monospace",
    fontWeight: "700",
    letterSpacing: 1,
    color: COLORS.ivory,
  },
});
