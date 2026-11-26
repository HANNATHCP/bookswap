import Link from "next/link";
import Image from "next/image";

export default function BookCard({
  id,
  title,
  author,
  price,
  condition,
  genre,
  image,
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#d6c7b2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#f3eadc] p-6">
      <Image
        src={image}
        alt={`${title} book cover`}
        width={400}
        height={500}
        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#3b0a0a]">
          {title}
        </h3>

        <p className="mt-1 text-sm text-[#6b5144]">
          by {author}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-[#8b1e2d]">
            ₹{price}
          </span>

          <span className="rounded-full bg-[#f3eadc] px-3 py-1 text-xs text-[#5c4033]">
            {condition}
          </span>
        </div>

        <Link href={`/books/${id}`}
          className="mt-5 block w-full rounded-lg border border-[#8b1e2d] py-2 text-center text-sm font-semibold text-[#8b1e2d] transition-all duration-300 hover:bg-[#8b1e2d] hover:text-white">
           View Book
        </Link>
      </div>
    </article>
  );
}