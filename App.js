import { Slot } from "expo-router";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Lavishly: require("@expo-google-fonts/lavishly-yours/LavishlyYours-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <WishlistProvider>
      <CartProvider>
        <Slot />
      </CartProvider>
    </WishlistProvider>
  );
}
