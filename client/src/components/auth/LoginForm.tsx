import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateEmail, validatePassword } from '@/utils/form-validation';
import { useDispatch } from 'react-redux';
import { login } from '@/services/authService';
import { useNavigate } from 'react-router-dom';


interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [apiError, setApiError] = useState<string | null>(null);
  
    useEffect(() => {
      // Only set the timer if there’s a message
      if (apiError) {
        const timer = setTimeout(() => {
          setApiError(null); // Clear the message after 5 seconds
        }, 5000);
  
        // Cleanup function to clear the timer if the message changes or component unmounts
        return () => clearTimeout(timer);
      }
    }, [apiError]);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
     const response= await login(formData.email,formData.password,dispatch)

     if(response.status==200){
       setIsLoading(false);
      navigate('/')
      return
     }

     if(response==undefined){
         setApiError("something went wrong please try later")
         return
     }
     setApiError(response.data.message)
     return
    } catch (error) {
      console.error('Login failed:', error);
    }finally{
      setIsLoading(false)
    } 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >

     {apiError && (
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
               className="w-full mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-sm text-center"
             >
               <p className="text-red-400 text-sm">{apiError}</p>
             </motion.div>
           )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="group"
        >
          <Label htmlFor="email" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
            <Mail className="h-4 w-4 text-violet-400" />
            Email Address
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
              }`}
              placeholder="Enter your email address"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1"
            >
              <div className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="group"
        >
          <Label htmlFor="password" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
            <Lock className="h-4 w-4 text-violet-400" />
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`pr-12 bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-400 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1"
            >
              <div className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.password}
            </motion.p>
          )}
        </motion.div>

        {/* Forgot Password Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-right"
        >
          <button
            type="button"
            className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Forgot password?
          </button>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-2"
        >
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <span className="flex items-center justify-center gap-2">
                <LogIn className="h-5 w-5" />
                Sign In to Your Account
              </span>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LoginForm;