import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gamepad2, Users, Trophy, ArrowRight, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-white">
            <div className="p-1.5 bg-primary rounded-lg">
              <Gamepad2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span>Nerf<span className="text-primary">App</span></span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#community" className="hover:text-white transition-colors">Comunidade</a>
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20">
              <Link to="/cadastro">Começar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                A nova era das batalhas Nerf
              </div>
              <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                Domine o <br/>Campo de Batalha
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-slate-400 md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Organize times, registre pontuações e suba no ranking. A plataforma definitiva para entusiastas de Nerf.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105">
                  <Link to="/cadastro">
                    Criar Conta Grátis <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white hover:border-white/30 backdrop-blur-sm transition-all hover:scale-105">
                  <Link to="/login">Já tenho conta</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse delay-1000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-900/50 border-t border-white/5 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Arsenal Completo</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Tudo o que você precisa para elevar o nível das suas guerras de Nerf.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-slate-950 border-white/10 shadow-2xl hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-white text-xl">Squads & Clãs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    Monte seu esquadrão, gerencie membros e desafie outros clãs para batalhas épicas na sua região.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-950 border-white/10 shadow-2xl hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Trophy className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-white text-xl">Leaderboards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    Visualize estatísticas detalhadas, K/D ratio e conquiste seu lugar no topo do ranking global.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-950 border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-xl">Eventos Ao Vivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    Organize torneios com chaves, eliminação e pontuação em tempo real direto do app.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <Gamepad2 className="h-6 w-6 text-slate-600" />
              <span>Nerf App <span className="text-slate-600 font-normal text-sm ml-2">© 2024</span></span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Suporte</a>
            </div>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"></div>
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
