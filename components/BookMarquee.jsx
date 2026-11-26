import Image from "next/image";

const books = [
  { id: 1, title: "The Alchemist", image: "/images/alchemist.jpg" },
  { id: 2, title: "Atomic Habits", image: "/images/atomic-habits.jpg" },
  { id: 3, title: "Ikigai", image: "/images/ikigai.jpg" },
  { id: 4, title: "The Alchemist", image: "/images/alchemist.jpg" },
  { id: 5, title: "Atomic Habits", image: "/images/atomic-habits.jpg" },
  { id: 6, title: "Ikigai", image: "/images/ikigai.jpg" },
  { id: 7, title: "The Alchemist", image: "/images/alchemist.jpg" },
  { id: 8, title: "Atomic Habits", image: "/images/atomic-habits.jpg" },
  { id: 9, title: "Ikigai", image: "/images/ikigai.jpg" },
  { id: 10, title: "The Alchemist", image: "/images/alchemist.jpg" },
  { id: 11, title: "Atomic Habits", image: "/images/atomic-habits.jpg" },
  { id: 12, title: "Ikigai", image: "/images/ikigai.jpg" },
  { id: 13, title: "The Alchemist", image: "/images/alchemist.jpg" },
  { id: 14, title: "Atomic Habits", image: "/images/atomic-habits.jpg" },
  { id: 15, title: "The Psychology of Money", image: "/images/psychology-money.jpg" },
{ id: 16, title: "Rich Dad Poor Dad", image: "/images/rich-dad-poor-dad.jpg" },
{ id: 17, title: "The Power of Now", image: "/images/power-of-now.jpg" },
];
export default function BookMarquee() {
  return (
    <section className="overflow-hidden bg-[#3b0a0a] py-3">
      <div className="book-track">

        {/* Group 1 */}
        <div className="book-group">
          {books.map((book) => (
            <div
              key={`group1-${book.id}`}
              className="h-20 w-14 shrink-0 overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={160}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Group 2 */}
        <div className="book-group">
          {books.map((book) => (
            <div
              key={`group2-${book.id}`}
              className="h-20 w-14 shrink-0 overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={160}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Group 3 */}
        <div className="book-group">
          {books.map((book) => (
            <div
              key={`group3-${book.id}`}
              className="h-20 w-14 shrink-0 overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={160}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}