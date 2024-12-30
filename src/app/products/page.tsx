import { getProducts, getCategories } from '@/lib/api'
import ProductList from '@/components/ProductList'

export default async function ProductsPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center">Our Products</h1>
      <ProductList products={products} categories={categories} />
    </div>
  )
}

