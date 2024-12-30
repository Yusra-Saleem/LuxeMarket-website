'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-muted-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-center"
            {...fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            We&#39;re here to assist you. Reach out to us for any inquiries, support, or feedback.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We&#39;d love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to say hello, our team is here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-accent mr-4" />
                  <span>123 Luxury Lane, Prestige City, 90210</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-accent mr-4" />
                  <span>+1 (800) LUXE-MKT</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-accent mr-4" />
                  <span>contact@luxemarket.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-accent mr-4" />
                  <span>Mon-Fri: 9am-6pm EST</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-muted p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block  font-medium  mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block  font-medium  mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block font-medium  mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-muted hover:border border-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "What is your return policy?", a: "We offer a 30-day return policy for all unused items in their original packaging." },
              { q: "How long does shipping take?", a: "Shipping times vary by location, but typically range from 3-7 business days." },
              { q: "Do you offer international shipping?", a: "Yes, we ship to most countries worldwide. Shipping costs and times may vary." },
              { q: "Are your products authentic?", a: "Yes, we guarantee the authenticity of all our products. We source directly from authorized retailers and luxury brands." },
              { q: "How can I track my order?", a: "Once your order is shipped, you'll receive a tracking number via email to monitor your package's progress." }
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                className="bg-background p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Visit Our Showroom</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2141892399166!2d-73.98823492404069!3d40.75889083540627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1685123456789!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

