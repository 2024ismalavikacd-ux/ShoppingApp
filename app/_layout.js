import { Stack } from "expo-router";
import { OrdersProvider } from "./context/OrdersContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OrdersProvider>
        <CartProvider>
          <WishlistProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </WishlistProvider>
        </CartProvider>
      </OrdersProvider>
    </GestureHandlerRootView>
  );
}
