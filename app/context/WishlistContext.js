import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Add to wishlist
  function addToWishlist(item) {
    const exists = wishlist.find((i) => i.id === item.id);
    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  }

  // Remove from wishlist
  function removeFromWishlist(id) {
    setWishlist(wishlist.filter((i) => i.id !== id));
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
