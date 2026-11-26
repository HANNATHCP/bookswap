import Hero from "@/components/Hero";
import BookMarquee from "@/components/BookMarquee";
import FeaturedBooks from "@/components/FeaturedBooks";


export default function Home() {
  return (
    <main>
      <Hero />
      <BookMarquee />
      <FeaturedBooks />
    </main>
  );
}