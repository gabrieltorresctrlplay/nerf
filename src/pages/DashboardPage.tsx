import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <h1 className="text-4xl font-bold">Bem-vindo ao seu Dashboard!</h1>
        {currentUser && (
          <p className="text-lg text-muted-foreground">
            Logado como: {currentUser.email}
          </p>
        )}
        <Button variant="destructive" onClick={handleLogout}>Sair</Button>
      </div>
    </div>
  );
}
