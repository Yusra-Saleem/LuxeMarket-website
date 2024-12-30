import { NextResponse } from 'next/server'
import { Product } from '../../../types/product'

const products: Product[] = [
  { id: 1, name: "Luxury Watch", price: 1999.99, image: "/images/watch.png", description: "A premium timepiece that combines elegance with precision.", category: "Accessories" },
  { id: 2, name: "Designer Handbag", price: 799.99, image: "/images/handbag.png", description: "A stylish and spacious handbag perfect for any occasion.", category: "Fashion" },
  { id: 3, name: "Wireless Headphones", price: 349.99, image: "/images/headphones.png", description: "High-quality sound with noise-cancelling technology.", category: "Electronics" },
  { id: 4, name: "Premium Sunglasses", price: 299.99, image: "/images/sunglasses.png", description: "Stylish sunglasses with UV protection.", category: "Accessories" },
  { id: 5, name: "Smart Watch", price: 399.99, image: "/images/smartwatch.png", description: "A feature-packed smartwatch for the modern lifestyle.", category: "Electronics" },
  { id: 6, name: "Leather Wallet", price: 129.99, image: "/images/leather-wallet.png", description: "A sleek and durable leather wallet.", category: "Accessories" },
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const product = products.find(p => p.id === id)

  if (product) {
    return NextResponse.json(product)
  } else {
    return new NextResponse('Product not found', { status: 404 })
  }
}

