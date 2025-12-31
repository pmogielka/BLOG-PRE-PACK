export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "brand" | "blue" | "green" | "purple";
  image: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "wprowadzenie-do-pre-pack",
    title: "Czym jest Pre-Pack? Wprowadzenie do przygotowanej likwidacji",
    excerpt:
      "Pre-pack to procedura w polskim prawie upadłościowym umożliwiająca szybkie przeprowadzenie sprzedaży przedsiębiorstwa dłużnika. Dowiedz się, jak działa ta nowoczesna instytucja.",
    category: "Podstawy",
    categoryColor: "brand",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "podstawy-prawne",
    title: "Podstawy prawne Pre-Pack w Polsce",
    excerpt:
      "Art. 56a-56h Prawa upadłościowego regulują procedurę przygotowanej likwidacji. Poznaj wymogi formalne, rolę sądu oraz zmiany wprowadzone nowelizacją z 2020 roku.",
    category: "Prawo",
    categoryColor: "blue",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    publishedAt: "2024-01-20",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "pre-pack-na-swiecie",
    title: "Pre-Pack na świecie - UK, Niemcy, USA",
    excerpt:
      "Porównanie procedury pre-pack w różnych jurysdykcjach. Jak wygląda przygotowana likwidacja w Wielkiej Brytanii, Niemczech i Stanach Zjednoczonych?",
    category: "Międzynarodowe",
    categoryColor: "purple",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
    publishedAt: "2024-02-01",
    readTime: "15 min",
    featured: true,
  },
  {
    slug: "statystyki",
    title: "Statystyki Pre-Pack w Polsce (2016-2018)",
    excerpt:
      "Analiza danych z polskich sądów upadłościowych. Ile wniosków złożono? Jaki jest średni czas procedury? Które sądy rozpatrują najwięcej spraw?",
    category: "Dane",
    categoryColor: "green",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    publishedAt: "2024-02-10",
    readTime: "10 min",
  },
  {
    slug: "ekonomiczne-skutki",
    title: "Ekonomiczne skutki Pre-Pack",
    excerpt:
      "Jakie korzyści przynosi pre-pack dla dłużnika, wierzycieli, pracowników i całej gospodarki? Analiza wpływu procedury na różne grupy interesariuszy.",
    category: "Ekonomia",
    categoryColor: "blue",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    publishedAt: "2024-02-20",
    readTime: "11 min",
  },
  {
    slug: "kontrowersje-case-studies",
    title: "Kontrowersje i znane sprawy Pre-Pack",
    excerpt:
      "Problemy transparentności, zarzuty 'ustawionych transakcji' oraz przykłady głośnych postępowań: Praktiker Polska, GAME UK, Chrysler. Co poszło dobrze, a co źle?",
    category: "Case Study",
    categoryColor: "purple",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    publishedAt: "2024-03-01",
    readTime: "14 min",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
