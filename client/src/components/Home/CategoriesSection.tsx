import { motion } from "framer-motion";
import { Building, Utensils, Palette, Music, Camera, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
  const categories = [
    { name: "Tech", icon: Building, color: "from-violet-500 to-purple-600" },
    { name: "Food & Drinks", icon: Utensils, color: "from-purple-500 to-pink-600" },
    { name: "Art & Culture", icon: Palette, color: "from-indigo-500 to-violet-600" },
    { name: "Music", icon: Music, color: "from-violet-600 to-fuchsia-600" },
    { name: "Photography", icon: Camera, color: "from-purple-600 to-violet-700" },
    { name: "Business", icon: Building, color: "from-violet-500 to-indigo-600" },
    { name: "Wellness", icon: Heart, color: "from-pink-500 to-violet-600" },
    { name: "Sports", icon: Users, color: "from-indigo-600 to-purple-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
        >
          Explore Categories
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-center mb-12 text-lg"
        >
          Explore events by your interests
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-violet-400 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CategoriesSection;