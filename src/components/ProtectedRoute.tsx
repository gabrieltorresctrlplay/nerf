import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function ProtectedRoute() {
  const { currentUser } = useAuth();

  // If the user is not logged in, redirect them to the login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the child routes
  return <Outlet />;
}
