"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getFeaturedArticles } from "@/lib/articles";

export function FeaturedArticles() {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #64748b 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-slate-200">
              <BookOpen className="w-3.5 h-3.5" />
              Baza wiedzy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
              Przeczytaj nasze
              <br />
              <span className="text-gradient">artykuły</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium group"
          >
            Zobacz wszystkie artykuły
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={index}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
