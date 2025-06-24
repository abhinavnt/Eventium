import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { OrganizerRegistrationRequestDto, UserRegistrationRequestDto, type UserType } from '@/types/auth';
import { validateEmail, validatePassword, validatePhone, validatePincode, validateRequired } from '@/utils/form-validation';

interface SignupFormData {
  email: string;
  password: string;
  name: string;
  organizationName?: string;
  phone?: string;
  state?: string;
  city?: string;
  pincode?: string;
}

interface SignupFormErrors {
  [key: string]: string | undefined;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('user');
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    name: '',
    organizationName: '',
    phone: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleUserTypeChange = (isOrganizer: boolean) => {
    setUserType(isOrganizer ? 'organizer' : 'user');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: SignupFormErrors = {};
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    const nameError = validateRequired(formData.name, 'Name');
    if (nameError) newErrors.name = nameError;
    
    if (userType === 'organizer') {
      const orgNameError = validateRequired(formData.organizationName || '', 'Organization Name');
      if (orgNameError) newErrors.organizationName = orgNameError;
      
      const phoneError = validateRequired(formData.phone || '', 'Phone');
      if (!phoneError) {
        const phoneFormatError = validatePhone(formData.phone || '');
        if (phoneFormatError) newErrors.phone = phoneFormatError;
      } else {
        newErrors.phone = phoneError;
      }
      
      const stateError = validateRequired(formData.state || '', 'State');
      if (stateError) newErrors.state = stateError;
      
      const cityError = validateRequired(formData.city || '', 'City');
      if (cityError) newErrors.city = cityError;
      
      const pincodeError = validateRequired(formData.pincode || '', 'Pincode');
      if (!pincodeError) {
        const pincodeFormatError = validatePincode(formData.pincode || '');
        if (pincodeFormatError) newErrors.pincode = pincodeFormatError;
      } else {
        newErrors.pincode = pincodeError;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      let dto;
      if (userType === 'user') {
        dto = new UserRegistrationRequestDto(formData);
      } else {
        dto = new OrganizerRegistrationRequestDto(formData);
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Signup attempt:', dto);
      console.log('Query param: ?role=' + userType);
      
      // Navigate to OTP verification page with email
      navigate('/otp-verification', { 
        state: { 
          email: formData.email,
          userType: userType
        } 
      });
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      {/* User Type Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative mb-8 p-1 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-violet-500/30"
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <User className={`h-5 w-5 transition-colors ${userType === 'user' ? 'text-violet-400' : 'text-gray-500'}`} />
            <span className={`font-medium transition-colors ${userType === 'user' ? 'text-violet-400' : 'text-gray-400'}`}>
              User
            </span>
          </div>
          
          <Switch
            checked={userType === 'organizer'}
            onCheckedChange={handleUserTypeChange}
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-violet-600 data-[state=checked]:to-purple-600"
          />
          
          <div className="flex items-center space-x-3">
            <Building className={`h-5 w-5 transition-colors ${userType === 'organizer' ? 'text-violet-400' : 'text-gray-500'}`} />
            <span className={`font-medium transition-colors ${userType === 'organizer' ? 'text-violet-400' : 'text-gray-400'}`}>
              Organizer
            </span>
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="group"
        >
          <Label htmlFor="name" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
            <User className="h-4 w-4 text-violet-400" />
            Full Name
          </Label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
              }`}
              placeholder="Enter your full name"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-1"
            >
              <div className="w-1 h-1 bg-red-400 rounded-full" />
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
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
          transition={{ delay: 0.4, duration: 0.5 }}
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
              placeholder="Create a strong password"
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

        {/* Organizer Fields */}
        <AnimatePresence mode="wait">
          {userType === 'organizer' && (
            <motion.div
              key="organizer-fields"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-6 pt-4 border-t border-violet-600/20"
            >
              <div className="flex items-center gap-2 text-violet-400 mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Organization Details</span>
              </div>

              {/* Organization Name */}
              <div className="group">
                <Label htmlFor="organizationName" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
                  <Building className="h-4 w-4 text-violet-400" />
                  Organization Name
                </Label>
                <div className="relative">
                  <Input
                    id="organizationName"
                    type="text"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                      errors.organizationName ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                    }`}
                    placeholder="Enter organization name"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                {errors.organizationName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <div className="w-1 h-1 bg-red-400 rounded-full" />
                    {errors.organizationName}
                  </motion.p>
                )}
              </div>

              {/* Phone */}
              <div className="group">
                <Label htmlFor="phone" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
                  <Phone className="h-4 w-4 text-violet-400" />
                  Phone Number
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                      errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                    }`}
                    placeholder="Enter phone number"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <div className="w-1 h-1 bg-red-400 rounded-full" />
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              {/* Address Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <Label htmlFor="state" className="text-gray-200 font-medium mb-2 block flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-violet-400" />
                    State
                  </Label>
                  <div className="relative">
                    <Input
                      id="state"
                      type="text"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                        errors.state ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                      }`}
                      placeholder="State"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.state && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <div className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.state}
                    </motion.p>
                  )}
                </div>

                <div className="group">
                  <Label htmlFor="city" className="text-gray-200 font-medium mb-2 block">
                    City
                  </Label>
                  <div className="relative">
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                        errors.city ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                      }`}
                      placeholder="City"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.city && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <div className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.city}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Pincode */}
              <div className="group">
                <Label htmlFor="pincode" className="text-gray-200 font-medium mb-2 block">
                  Pincode
                </Label>
                <div className="relative">
                  <Input
                    id="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className={`bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 ${
                      errors.pincode ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                    }`}
                    placeholder="Enter pincode"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                {errors.pincode && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <div className="w-1 h-1 bg-red-400 rounded-full" />
                    {errors.pincode}
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-4"
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
                <Sparkles className="h-5 w-5" />
                Create {userType === 'user' ? 'User' : 'Organizer'} Account
              </span>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default SignupForm;