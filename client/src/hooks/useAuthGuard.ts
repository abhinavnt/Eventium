import { useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Adjust the import path based on your store file location

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const isAuthenticatedLocal = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const currentPath = location.pathname;
    const isAuthPage = ['/login', '/signup', '/otp-verification','/'].includes(currentPath);

    // Redirect authenticated users away from auth pages
    if (isAuthPage && (isAuthenticated || isAuthenticatedLocal)) {
      navigate('/home', { replace: true });
      return;
    }

  }, [navigate, location.pathname, isAuthenticated, isAuthenticatedLocal, user]);
};