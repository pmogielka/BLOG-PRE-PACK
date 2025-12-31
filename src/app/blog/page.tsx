import { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Artykuły o Pre-Pack",
  description:
    "Kompleksowe artykuły o procedurze pre-pack w Polsce. Podstawy prawne, porównanie międzynarodowe, statystyki i studia przypadków.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 mesh-gradient relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-slate-200 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight mb-6">
              Baza wiedzy o
              <br />
              <span className="text-gradient">Pre-Pack</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Kompleksowe artykuły przygotowane przez ekspertów. Poznaj procedurę
              przygotowanej likwidacji od podstaw do zaawansowanych zagadnień.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
