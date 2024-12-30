import { getProductsByCategory, getCategories } from '@/lib/api'
import ProductList from '@/components/ProductList'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category)
  const products = await getProductsByCategory(decodedCategory)
  const categories = await getCategories()
  if (products.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center capitalize">{decodedCategory}</h1>
      <ProductList products={products} categories={categories} />
    </div>
  )
}

