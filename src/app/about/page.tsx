'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/about.png"
          alt="LuxeMarket showroom"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair font-bold mb-4"
            {...fadeInUp}
          >
            About LuxeMarket
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Redefining Luxury Shopping Since 2023
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-gray-500 font-medium mb-4">
                Founded in 2023, LuxeMarket emerged from a passion for curating the finest luxury products from around the world. Our founders, driven by a vision to make high-end goods accessible to discerning customers globally, embarked on this journey to redefine online luxury shopping.
              </p>
              <p className="text-gray-500 font-medium mb-4">
                What started as a small collection of handpicked items has now grown into a comprehensive platform offering a wide range of premium products across various categories. Our team of experts meticulously selects each item, ensuring it meets our stringent standards for quality, design, and value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/ourstory.png"
                alt="LuxeMarket founders"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-playfair font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Curate Excellence", description: "We handpick each product to ensure the highest quality and design standards." },
              { title: "Empower Accessibility", description: "Making luxury accessible to discerning customers around the globe." },
              { title: "Foster Sustainability", description: "Promoting ethical luxury and supporting sustainable practices in the industry." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl text-accent font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 justify-center max-auto gap-8">
            {[
              { name: "Emma Thompson", role: "Founder & CEO", image: "/images/team-1.png" },
              { name: "Michael Chen", role: "Head of Curation", image: "/images/team-2.png" },
              { name: "Sophia Patel", role: "Chief Marketing Officer", image: "/images/team-3.png" },
              { name: "David Müller", role: "Customer Experience Director", image: "/images/team-4.png" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                

                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className=" w-[200px] h-[190px] flex justif-center mx-auto mb-4 rounded-full "
                />
          
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-[#355f4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Join the LuxeMarket Family</h2>
          <p className="text-xl mb-8">Experience luxury like never before. Start your journey with us today.</p>
          <motion.a
            href="/products"
            className="inline-block bg-secondary text-accent px-8 py-3 rounded-full text-lg font-semibold hover:primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Collection
          </motion.a>
        </div>
      </section>
    </div>
  )
}

