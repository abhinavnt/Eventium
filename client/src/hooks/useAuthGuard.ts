import { authUtils } from '@/utils/auth';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


export const useAuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const isAuthPage = ['/login', '/signup', '/otp-verification'].includes(currentPath);
    
    // Redirect authenticated users away from auth pages
    if (isAuthPage && authUtils.shouldRedirectFromAuth()) {
      navigate('/', { replace: true });
      return;
    }

    // Handle OTP page access
    if (currentPath === '/otp-verification') {
      const user = authUtils.getUser();
      if (!user || user.isVerified) {
        navigate('/login', { replace: true });
      }
    }
  }, [navigate, location.pathname]);
};