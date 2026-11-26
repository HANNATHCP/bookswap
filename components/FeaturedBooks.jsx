"use client";
import { useState } from "react";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/book";

export default function FeaturedBooks() {
  const [category, setCategory] = useState("All");
  const filteredBooks =
  category === "All"
    ? books
    : books.filter((book) => book.genre === category);
  return (
    <section className="bg-[#f7f1e3] px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b1e2d]">
            Discover
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#3b0a0a]">
            Featured Books
          </h2>

          <p className="mt-3 text-[#6b5144]">
            Find your next great read from our community.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
            {["All", "Fiction", "Self Help"].map((genre) => (
            <button
               key={genre}
               onClick={() => setCategory(genre)}
               className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
               category === genre
               ? "bg-[#8b1e2d] text-white"
               : "border border-[#d6c7b2] bg-white text-[#5c4033] hover:border-[#8b1e2d] hover:text-[#8b1e2d]"
            }`}
        >
         {genre}
        </button>
        ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                condition={book.condition}
                genre={book.genre}
                image={book.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}