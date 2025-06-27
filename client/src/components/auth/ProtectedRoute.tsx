// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/store'; // Adjust the path to your Redux store hook
import type { ReactNode } from 'react';


interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  // If the user is not authenticated or doesn't have the required role, redirect
  if (!isAuthenticated || !user || user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If authenticated and role matches, render the children (route content)
  return <>{children}</>;
};

export default ProtectedRoute;