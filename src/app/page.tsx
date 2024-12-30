'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image
          src="/images/shopping.png"
          alt="Luxury shopping"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
            {...fadeInUp}
          >
            Welcome to <span className="text-accent">Luxe</span>Market
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Discover a world of luxury and elegance. Indulge in premium products curated just for you.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/products" className="inline-flex items-center">
                Shop Now
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Accessories', 'Fashion', 'Electronics'].map((category, index) => (
              <motion.div
                key={category}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/images/${category.toLowerCase()}-category.png`}
                  alt={category}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-60">
                  <h3 className="text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300">{category}</h3>
                </div>
                <Link href={`/categories/${category.toLowerCase()}`} className="absolute inset-0">
                  <span className="sr-only">View {category} category</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1 , name: 'Luxury Watch', price: 1999.99, image: '/images/watch.png' },
              { id: 2 , name: 'Designer Handbag', price: 799.99, image: '/images/handbag.png' },
              { id: 3  ,name: 'Wireless Headphones', price: 349.99, image:'/images/headphones.png' },
              { id: 4 ,name: 'Premium Sunglasses', price: 299.99, image: '/images/sunglasses.png' },
            ].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="p-0">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-accent mt-2">
                      ${product.price.toFixed(2)}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products" className="inline-flex items-center">
                View All Products
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John D.', text: 'LuxeMarket offers an unparalleled shopping experience. The quality of their products is outstanding!' },
              { name: 'Sarah M.', text: 'I\'m impressed by the range of luxury items available. LuxeMarket has become my go-to for high-end shopping.' },
              { name: 'Robert L.', text: 'The customer service at LuxeMarket is exceptional. They go above and beyond to ensure customer satisfaction.' },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="text-yellow-400 mr-2" />
                      <Star className="text-yellow-400 mr-2" />
                      <Star className="text-yellow-400 mr-2" />
                      <Star className="text-yellow-400 mr-2" />
                      <Star className="text-yellow-400" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">&#34;{testimonial.text}&#34;</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 text-lg">Subscribe to our newsletter for exclusive offers and the latest in luxury products.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-foreground bg-background"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

