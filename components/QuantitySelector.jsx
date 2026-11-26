"use client";

import { useState } from "react";

export default function QuantitySelector({ price }) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const totalPrice = price * quantity;

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-[#3b0a0a]">
        Quantity
      </p>

      <div className="mt-2 flex items-center gap-4">
        <button
          onClick={decreaseQuantity}
          className="h-9 w-9 rounded-lg border border-[#d6c7b2] bg-white text-lg font-bold text-[#8b1e2d] hover:bg-[#f3eadc]"
        >
          −
        </button>

        <span className="w-6 text-center font-semibold text-[#3b0a0a]">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          className="h-9 w-9 rounded-lg border border-[#d6c7b2] bg-white text-lg font-bold text-[#8b1e2d] hover:bg-[#f3eadc]"
        >
          +
        </button>
      </div>

      <p className="mt-4 font-bold text-[#8b1e2d]">
        Total: ₹{totalPrice}
      </p>
    </div>
  );
} 