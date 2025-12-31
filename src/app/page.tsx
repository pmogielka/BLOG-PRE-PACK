import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedArticles />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
