
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Eventique has completely transformed how I discover and attend events. The curated selection is absolutely phenomenal.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "The platform's elegant design and seamless booking experience make it my go-to for finding exclusive events.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Art Collector",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "I've discovered some of the most amazing cultural events through Eventique. It's like having a personal curator.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-4 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
        >
          What Our Members Say
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 text-center mb-16 text-lg">
          Real stories from our event enthusiasts and their favorite experiences
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants} className="relative group">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/30 hover:shadow-[0_10px_30px_rgba(139,69,255,0.3)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
                {/* Quote Number */}
                <div className="absolute top-4 right-6 text-6xl font-bold text-violet-500/20 group-hover:text-violet-500/30 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-violet-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-8 text-lg leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection
