
import { books } from "@/lib/book";
import { notFound } from "next/navigation";
import WishlistButton from "@/components/WishlistButton";
import BuyNowButton from "@/components/BuyNowButton";


export default async function BookDetails({ params }) {
  const { id } = await params;
  
  const book = books.find((book) => book.id === id);
  
  if (!book) {
    notFound();
  }

  return (
  <main className="min-h-screen bg-[#f7f1e3] px-8 py-16">
    <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

      {/* Book Cover */}
      <div className="flex items-center justify-center rounded-2xl bg-[#f3eadc] p-8">
        <img
          src={book.image}
          alt={`${book.title} book cover`}
          className="h-[500px] w-auto rounded-lg object-contain shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-col justify-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b1e2d]">
          {book.genre}
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#3b0a0a]">
          {book.title}
        </h1>

        <p className="mt-3 text-lg text-[#6b5144]">
          by {book.author}
        </p>

        <p className="mt-6 text-3xl font-bold text-[#8b1e2d]">
          ₹{book.price}
        </p>

        <div className="mt-4">
          <span className="rounded-full bg-[#e8dccb] px-4 py-2 text-sm font-medium text-[#5c4033]">
            {book.condition}
          </span>
        </div>

        <p className="mt-8 leading-7 text-[#5c4033]">
          {book.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <BuyNowButton bookId={book.id} />

          <WishlistButton />-
        </div>

      </div>
    </div>
  </main>
);
}