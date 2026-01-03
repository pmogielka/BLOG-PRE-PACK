// CMS API Integration
// Uses internal URL for server-side requests, public URL for client-side

const CMS_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3013'

export interface Category {
  id: string
  name: string
  slug: string
  color: 'brand' | 'blue' | 'green' | 'purple'
}

export interface Media {
  id: string
  url: string
  alt: string
  filename: string
  mimeType: string
  sizes?: {
    thumbnail?: { url: string }
    card?: { url: string }
    hero?: { url: string }
  }
}

export interface CMSArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  category: Category
  image: Media
  content: unknown // Lexical rich text JSON
  publishedAt: string
  readTime: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface PaginatedResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

/**
 * Fetch all articles from CMS
 */
export async function getArticlesFromCMS(): Promise<CMSArticle[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/articles?limit=100&sort=-publishedAt`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Failed to fetch articles from CMS:', res.status)
      return []
    }

    const data: PaginatedResponse<CMSArticle> = await res.json()
    return data.docs
  } catch (error) {
    console.error('Error fetching articles from CMS:', error)
    return []
  }
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlugFromCMS(slug: string): Promise<CMSArticle | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/articles?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Failed to fetch article from CMS:', res.status)
      return null
    }

    const data: PaginatedResponse<CMSArticle> = await res.json()
    return data.docs[0] || null
  } catch (error) {
    console.error('Error fetching article from CMS:', error)
    return null
  }
}

/**
 * Fetch featured articles
 */
export async function getFeaturedArticlesFromCMS(): Promise<CMSArticle[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/articles?where[featured][equals]=true&limit=3&sort=-publishedAt`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Failed to fetch featured articles from CMS:', res.status)
      return []
    }

    const data: PaginatedResponse<CMSArticle> = await res.json()
    return data.docs
  } catch (error) {
    console.error('Error fetching featured articles from CMS:', error)
    return []
  }
}

/**
 * Fetch all categories
 */
export async function getCategoriesFromCMS(): Promise<Category[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/categories?limit=100`, {
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      console.error('Failed to fetch categories from CMS:', res.status)
      return []
    }

    const data: PaginatedResponse<Category> = await res.json()
    return data.docs
  } catch (error) {
    console.error('Error fetching categories from CMS:', error)
    return []
  }
}

/**
 * Check if CMS is available
 */
export async function checkCMSHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${CMS_URL}/api/health`, {
      next: { revalidate: 0 },
    })
    return res.ok
  } catch {
    return false
  }
}
