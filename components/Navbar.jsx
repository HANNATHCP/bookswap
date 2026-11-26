export default function Navbar({ brandName }) {
  return (
    <nav className="flex items-center justify-between bg-[#3b0a0a] px-8 py-4 text-white">
      <h2 className="text-2xl font-bold tracking-wide">
        {brandName}
      </h2>

      <div className="flex gap-6">
        <a href="/" className="hover:text-[#d4af37]">
          Home
        </a>

        <a href="/books" className="hover:text-[#d4af37]">
          Books
        </a>

        <a href="/sell" className="hover:text-[#d4af37]">
          Sell
        </a>

        <a href="/exchange" className="hover:text-[#d4af37]">
          Exchange
        </a>
      </div>
    </nav>
  );
}