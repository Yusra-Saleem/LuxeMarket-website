'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/components/CartProvider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const steps = ['Shipping', 'Payment', 'Review']

export default function CheckoutPage() {
  const { cart, total } = useCart()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Here you would typically process the order
      console.log('Order submitted:', { cart, formData, total })
      alert('Thank you for your order!')
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair font-bold mb-8 text-center">Checkout</h1>
      <div className="flex justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`h-1 w-12 ${
                index < currentStep ? 'bg-accent' : 'bg-muted'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-2xl transition duration-300 ">
          <CardHeader>
            <CardTitle>{steps[currentStep]}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" name="country" value={formData.country} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                      </div>
                    </div>
                  </motion.div>
                )}
                {currentStep === 1 && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" name="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid gap-4">
                      <h3 className="text-lg font-semibold">Order Summary</h3>
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.name} x {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentStep > 0 && (
              <Button onClick={handleBack} variant="outline">Back</Button>
            )}
            <Button onClick={handleSubmit}>
              {currentStep === steps.length - 1 ? 'Place Order' : 'Next'}
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-lg hover:shadow-2xl transition duration-300 ">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

