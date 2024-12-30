'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getCategories } from '@/lib/api'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([])
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories()
      setCategories(fetchedCategories)
    }
    fetchCategories()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <Image
              src={`/images/${category.toLowerCase()}-category.png`}
              alt={category}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.h2
                className="text-white text-2xl font-semibold"
                initial={{ scale: 1 }}
                animate={{ scale: hoveredCategory === category ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.h2>
            </div>
            <Link href={`/categories/${category.toLowerCase()}`} className="absolute inset-0">
              <span className="sr-only">View {category} category</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

