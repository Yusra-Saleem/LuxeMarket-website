'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion} from 'framer-motion'
import { useCart } from './CartProvider'
import { Product } from '@/app/types/product'
import { Star, Truck, RotateCcw, ShieldCheck, Minus, Plus, Heart, ZoomIn } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/hooks/use-toast"

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const [isWishlisted, setIsWishlisted] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity })
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    })
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    })
  }

 

  
  return (
    <div className="container mx-auto md:w-[1177px] px-4 py-12">
      <div className="grid grid-cols-1 justify-center mx-auto lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 md:w-[500px]"
        >
          <div className="relative aspect-square overflow-hidden md:h-[500px] md:w-[500px] rounded-lg bg-gray-100">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              className="object-cover"
              style={{ transform: `scale(${zoomLevel})` }}
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
              <ZoomIn className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <Slider
            defaultValue={[1]}
            max={2}
            step={0.1}
            onValueChange={(value) => setZoomLevel(value[0])}
            className="md:w-[500px]"
          />
         
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:w-[500px] "
        >
          <div>
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <h1 className="text-4xl font-playfair font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">(121 reviews)</span>
            </div>
            <p className="text-3xl font-semibold text-accent">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600">{product.description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="flex items-center space-x-2">
          <p className="text-xl font-semibold">Quantity :</p>
            <div className="flex items-center border border-primary rounded">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="bg-transparent border-r border-primary rounded-r-none">
                <Minus className="h-4 w-4  " />
              </Button>
              <Input
                type="text"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-10 text-center border-none"
              />
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="border-l rounded-l-none  rounded-r border-primary">
                <Plus className="h-4 " />
              </Button>
            </div>
          
           
          </div>
          <div>
          <Button onClick={handleAddToCart} size="lg" className="w-[200px] rounded-2xl">
              Add to Cart
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleWishlist}
              className="rounded-full bg-pink-200 ml-4 "
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-600 bg-transparent text-red-600' : ' bg-transparent text-red-600 '}`} />
            </Button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-green-500" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-5 h-5 text-blue-500" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-purple-500" />
              <span>2-year warranty</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p className="text-gray-600">
              {product.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Key Features</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>High-quality materials for durability</li>
              <li>Ergonomic design for comfort</li>
              <li>Versatile functionality for various uses</li>
              <li>Easy to clean and maintain</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Material</td>
                  <td className="py-2">Premium quality materials</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Dimensions</td>
                  <td className="py-2">10 x 5 x 2 inches</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Weight</td>
                  <td className="py-2">0.5 lbs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Color</td>
                  <td className="py-2">Available in multiple colors</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Compatibility</td>
                  <td className="py-2">Works with all standard devices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Customer Reviews</h3>
              <Button variant="outline">Write a Review</Button>
            </div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="font-semibold">John Doe</span>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                <p className="text-gray-600 mb-2">Great product! Exactly as described and arrived quickly. The quality is excellent and it fits perfectly. I would definitely recommend this to others.</p>
                <Button variant="link" className="text-sm p-0">Helpful (3)</Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">Load More Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

