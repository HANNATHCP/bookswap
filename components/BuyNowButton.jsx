"use client";

import { useRouter } from "next/navigation";

export default function BuyNowButton({ bookId }) {
  const router = useRouter();

  function handleBuy() {
    router.push(`/checkout?bookId=${bookId}`);
  }

  return (
    <button
      onClick={handleBuy}
      className="rounded-lg bg-[#8b1e2d] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1724] hover:shadow-lg"
    >
      Buy Now
    </button>
  );
}