import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  function addToCart(item) {
    const exists = cart.find((i) => i.id === item.id);

    if (exists) {
      // Increase quantity if already in cart
      setCart(
        cart.map((i) =>i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }

  // Remove item completely
  function removeFromCart(id) {
    setCart(cart.filter((i) => i.id !== id));
  }

  // Increase quantity
  function increaseQty(id) {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  }

  // Decrease quantity (remove if qty becomes 0)
  function decreaseQty(id) {
    setCart(
      cart
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
