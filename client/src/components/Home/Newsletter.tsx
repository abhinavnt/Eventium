
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-lg border border-violet-500/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8 text-lg">Get notified about exclusive events and premium experiences</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-black/50 border border-violet-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-violet-400"
            />
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;