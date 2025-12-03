import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Bem-vindo ao Nerf App!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Aqui você vai fazer coisas incríveis. Explore o tanto de coisa legal que temos a oferecer e junte-se à nossa comunidade.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg">
            <Link to="/login">Entrar</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/cadastro">Criar Conta</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
