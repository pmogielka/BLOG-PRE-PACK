"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Article, formatDate } from "@/lib/articles";
import { clsx } from "clsx";

interface ArticleCardProps {
  article: Article;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

const categoryColors = {
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

export function ArticleCard({ article, index = 0, variant = "default" }: ArticleCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={clsx(
        "group relative",
        !isCompact && "card card-hover overflow-hidden"
      )}
    >
      <Link href={`/blog/${article.slug}`} className="block">
        {/* Image */}
        {!isCompact && (
          <div className={clsx(
            "relative overflow-hidden",
            isFeatured ? "aspect-[16/10]" : "aspect-[16/9]"
          )}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}

        {/* Content */}
        <div className={clsx(
          !isCompact && "p-6",
          isCompact && "flex items-start gap-4"
        )}>
          {/* Compact variant image */}
          {isCompact && (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className={clsx(isCompact && "flex-1 min-w-0")}>
            {/* Category & Meta */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className={clsx(
                  "inline-block px-2.5 py-1 text-xs font-semibold rounded-full border",
                  categoryColors[article.categoryColor]
                )}
              >
                {article.category}
              </span>
              {!isCompact && (
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime} czytania</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3
              className={clsx(
                "font-heading font-semibold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2",
                isFeatured ? "text-xl md:text-2xl mb-3" : "text-lg mb-2",
                isCompact && "text-base"
              )}
            >
              {article.title}
            </h3>

            {/* Excerpt */}
            {!isCompact && (
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                {article.excerpt}
              </p>
            )}

            {/* Footer */}
            {!isCompact && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {formatDate(article.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
                  Czytaj dalej
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            )}

            {isCompact && (
              <span className="text-xs text-slate-400">
                {formatDate(article.publishedAt)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
