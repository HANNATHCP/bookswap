"use client";

import { useState } from "react";

export default function WishlistButton() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  function handleWishlist() {
    setIsWishlisted(!isWishlisted);
  }

  return (
    <button
      onClick={handleWishlist}
      className="rounded-lg border border-[#8b1e2d] px-6 py-3 font-semibold text-[#8b1e2d] transition-all duration-300 hover:bg-[#8b1e2d] hover:text-white"
    >
      {isWishlisted ? "♥ Wishlisted" : "♡ Add to Wishlist"}
    </button>
  );
}