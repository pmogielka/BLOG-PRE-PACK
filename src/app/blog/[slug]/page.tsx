import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, Calendar, Share2 } from "lucide-react";
import { getArticleBySlug, formatDate, getAllArticles } from "@/lib/articles";
import { getArticleContent } from "@/lib/articleContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleCard } from "@/components/blog/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artykuł nie znaleziony",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const content = getArticleContent(slug);

  if (!article || !content) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 mesh-gradient relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />

        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Wróć do artykułów</span>
          </Link>

          <div className="max-w-4xl">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-100 mb-4">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} czytania</span>
              </div>
              <button className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Udostępnij</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-4 mb-12 md:mb-16">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Article Content */}
            <article className="prose-prepack">
              {content.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2>{section.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}

              {/* CTA Box */}
              <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
                <h3 className="font-heading text-2xl font-bold mb-3 text-white">
                  Potrzebujesz pomocy?
                </h3>
                <p className="text-slate-300 mb-6">
                  Skonsultuj swoją sytuację z ekspertem. Pomożemy Ci zrozumieć
                  możliwości procedury pre-pack.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-colors"
                >
                  Umów bezpłatną konsultację
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <TableOfContents sections={content.sections} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
            Przeczytaj również
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={index}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
