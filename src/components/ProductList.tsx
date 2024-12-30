'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from './CartProvider'
import { Product } from '@/app/types/product'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type ProductListProps = {
  products: Product[]
  categories: string[]
}

export default function ProductList({ products, categories }: ProductListProps) {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'price' | 'name'>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredProducts = selectedCategory !== 'all'
    ? products.filter(product => product.category === selectedCategory)
    : products

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    } else {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    }
  })

  return (
    <div>
      <div className="flex  md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className=" w-[150px] md:w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem> {/* Updated value */}
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select onValueChange={(value) => {
            const [newSortBy, newSortOrder] = value.split('-') as [typeof sortBy, typeof sortOrder]
            setSortBy(newSortBy)
            setSortOrder(newSortOrder)
          }}>
            <SelectTrigger className=" w-[100px] md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="p-0">
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-accent mb-2">
                  ${product.price.toFixed(2)}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                  className="w-full"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
