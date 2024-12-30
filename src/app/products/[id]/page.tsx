import { getProduct } from '@/lib/api'
import ProductDetail from '@/components/ProductDetail'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(parseInt(params.id))

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-playfair font-bold mb-8">Product Not Found</h1>
        <p className="text-xl text-gray-600">Sorry, we couldn&#39;t find the product you&#39;re looking for.</p>
      </div>
    )
  }

  return <ProductDetail product={product} />
}

