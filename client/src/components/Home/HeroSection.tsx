"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/40 via-violet-800/30 to-purple-900/50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent"
        >
         <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">Discover</span>{' '}
          <span className="text-white">Extraordinary</span>
          <br />
          <span className="text-white">Events</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Step into a world of premium experiences. From exclusive galas to intimate concerts, find events that match
          your sophisticated taste.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Explore Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-violet-400 bg-black text-white hover:bg-violet-500/10 hover:text-black px-8 py-6 text-lg rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            Upcoming Events
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-12 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">1000+</div>
            <div className="text-gray-400">Premium Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">50K+</div>
            <div className="text-gray-400">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">25+</div>
            <div className="text-gray-400">Cities</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
