import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center p-6 lg:p-8"
      >
        <motion.h1 
          className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Eventium
        </motion.h1>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-violet-600 hover:bg-violet-700">
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Create Extraordinary{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              Events
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-300 mb-12"
          >
            The ultimate platform for event management that brings people together
            and creates unforgettable experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/signup">
              <Button className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-4 group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white text-lg px-8 py-4">
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800">
            <Calendar className="h-12 w-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Event Creation</h3>
            <p className="text-gray-400">Create and customize events with our intuitive interface</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800">
            <Users className="h-12 w-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Building</h3>
            <p className="text-gray-400">Connect with attendees and build lasting relationships</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800">
            <Star className="h-12 w-12 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
            <p className="text-gray-400">Deliver exceptional events with professional tools</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
