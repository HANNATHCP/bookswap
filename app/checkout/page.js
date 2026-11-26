import {books} from "@/lib/book";



export default async function CheckoutPage({ searchParams }) {
  const { bookId } = await searchParams;

  const book = books.find((book) => book.id === bookId);

  return (
    <main className="min-h-screen bg-[#f7f1e3] px-8 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b1e2d]">
          Checkout
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#3b0a0a]">
          {book ? book.title : "Book not found"}
        </h1>

        {book && (
          <div className="mt-8 rounded-xl border border-[#d6c7b2] bg-white p-6 shadow-sm">
            <p className="text-[#6b5144]">
              Author: {book.author}
            </p>

            <p className="mt-2 font-bold text-[#8b1e2d]">
              Price: ₹{book.price}
            </p>

            <p className="mt-2 text-[#6b5144]">
              Condition: {book.condition}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}