import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f7f1e3] px-8 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b1e2d]">
            A marketplace for readers
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-[#3b0a0a]">
            Give Books a Second Life.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c4033]">
            Buy, sell, exchange, and discover books from fellow readers.
            Every book has a story. Yours could be next.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-[#8b1e2d] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1724] hover:shadow-lg">
              Browse Books
            </button>

            <button className="rounded-lg border border-[#8b1e2d] px-6 py-3 font-semibold text-[#8b1e2d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b1e2d] hover:text-white hover:shadow-lg">
              Sell a Book
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#d4af37]/20 blur-xl animate-pulse" />

          <div className="relative overflow-hidden rounded-2xl border border-[#d6c7b2] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/images/hero-books.jpg"
              alt="A collection of books"
              width={700}
              height={500}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}