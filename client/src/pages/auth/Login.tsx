
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Calendar } from 'lucide-react';
import LoginForm from '@/components/auth/LoginForm';
import { useAuthGuard } from '@/hooks/useAuthGuard';

const Login = () => {
    useAuthGuard();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-7xl lg:text-9xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-600 bg-clip-text text-transparent mb-4 relative">
              Eventium
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-violet-400"
              >
                <Sparkles className="h-8 w-8 lg:h-12 lg:w-12" />
              </motion.div>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-auto lg:mx-0" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
          >
            Transform your vision into reality with the ultimate platform for creating and managing{' '}
            <span className="text-violet-400 font-semibold">unforgettable events</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
          >
            <div className="flex flex-col items-center lg:items-start space-y-3 p-4 rounded-xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 backdrop-blur-sm border border-violet-500/20">
              <div className="p-3 bg-violet-600/20 rounded-full">
                <Calendar className="h-6 w-6 text-violet-400" />
              </div>
              <span className="text-gray-300 font-medium text-center lg:text-left">Smart Planning</span>
            </div>
            
            <div className="flex flex-col items-center lg:items-start space-y-3 p-4 rounded-xl bg-gradient-to-br from-purple-600/10 to-violet-600/10 backdrop-blur-sm border border-purple-500/20">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-gray-300 font-medium text-center lg:text-left">Lightning Fast</span>
            </div>
            
            <div className="flex flex-col items-center lg:items-start space-y-3 p-4 rounded-xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 backdrop-blur-sm border border-violet-500/20">
              <div className="p-3 bg-violet-600/20 rounded-full">
                <Sparkles className="h-6 w-6 text-violet-400" />
              </div>
              <span className="text-gray-300 font-medium text-center lg:text-left">Modern Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-3xl blur-xl" />
          <div className="relative bg-gray-900/40 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-white mb-3">Welcome Back</h2>
              <p className="text-gray-400 text-lg">Sign in to continue your journey</p>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-auto mt-4" />
            </motion.div>

            <LoginForm />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-8 pt-6 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-lg">
                New to Eventium?{' '}
                <Link 
                  to="/signup" 
                  className="text-violet-400 hover:text-violet-300 font-semibold transition-colors hover:underline"
                >
                  Create your account
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
