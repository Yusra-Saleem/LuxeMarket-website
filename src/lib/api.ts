import { Product } from '@/app/types/product'

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://luxe-market-website.vercel.app/api/products', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json()
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return [] 
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`https://luxe-market-website.vercel.app/api/products/${id}`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json()
  } catch (error) {
    console.error(`Failed to fetch product with id ${id}:`, error)
    return null 
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch('https://luxe-market-website.vercel.app/api/categories', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json()
  } catch (error) {
    console.error("Failed to fetch categories:", error)
    return [] 
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const res = await fetch(`https://luxe-market-website.vercel.app/api/products?category=${encodeURIComponent(category)}`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json()
  } catch (error) {
    console.error(`Failed to fetch products for category ${category}:`, error)
    return []
  }
}

