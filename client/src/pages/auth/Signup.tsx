import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Zap, Trophy } from 'lucide-react';
import SignupForm from '@/components/auth/SignupForm';
import { useAuthGuard } from '@/hooks/useAuthGuard';

const Signup = () => {
    useAuthGuard();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-8 lg:sticky lg:top-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent mb-4 relative">
              Eventium
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-purple-400"
              >
                <Sparkles className="h-6 w-6 lg:h-10 lg:w-10" />
              </motion.div>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto lg:mx-0" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
          >
            Join thousands of{' '}
            <span className="text-purple-400 font-semibold">event creators</span>{' '}
            and attendees in building amazing experiences that bring people together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-violet-600/10 backdrop-blur-sm border border-purple-500/20">
              <div className="p-2 bg-purple-600/20 rounded-lg flex-shrink-0">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Create & Manage Events</h3>
                <p className="text-gray-400 text-sm">Design unforgettable experiences with our intuitive tools</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-600/10 to-purple-600/10 backdrop-blur-sm border border-violet-500/20">
              <div className="p-2 bg-violet-600/20 rounded-lg flex-shrink-0">
                <Zap className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Connect with Your Audience</h3>
                <p className="text-gray-400 text-sm">Build meaningful relationships and grow your community</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-violet-600/10 backdrop-blur-sm border border-purple-500/20">
              <div className="p-2 bg-purple-600/20 rounded-lg flex-shrink-0">
                <Trophy className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Track Analytics & Insights</h3>
                <p className="text-gray-400 text-sm">Make data-driven decisions to improve your events</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-3xl blur-xl" />
          <div className="relative bg-gray-900/40 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-white mb-3">Get Started Today</h2>
              <p className="text-gray-400 text-lg">Create your account and join the community</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mx-auto mt-4" />
            </motion.div>

            <SignupForm />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-8 pt-6 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-lg">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;