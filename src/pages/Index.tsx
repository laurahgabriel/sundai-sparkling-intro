import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import logo from "@/assets/sundai-logo-horizontal.svg";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const splineRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowModal(true);
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp) {
      setShowSuccess(true);
      toast({
        title: "Bem-vindo à comunidade SundAI LATAM!",
        description: "Clique no botão abaixo para entrar no grupo do WhatsApp.",
      });
    }
  };

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.90/build/spline-viewer.js';
    document.head.appendChild(script);
    
    // Create spline-viewer element after script loads
    script.onload = () => {
      if (splineRef.current && !splineRef.current.querySelector('spline-viewer')) {
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/xeyILXhBc-CAlyW9/scene.splinecode');
        splineRef.current.appendChild(viewer);
      }
    };
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Spline Background */}
      <div className="spline-container" ref={splineRef}></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SundAI LATAM" className="h-8 md:h-10" />
            <span className="text-2xl">🇧🇷</span>
          </div>
          <div className="flex gap-6 md:gap-8">
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
          </div>
        </nav>

        {/* Hero Content - Left Aligned */}
        <div className="flex flex-1 items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-2 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl font-mono">
              SundAI LATAM
            </h1>
            <h2 className="mb-8 text-3xl font-bold text-foreground/80 md:text-4xl lg:text-5xl font-mono">
              Brazil chapter
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-foreground/90 md:text-xl max-w-xl">
              Criada no MIT, nosso propósito é espalhar o uso criativo de IA para resolver 
              problemas reais, conectando estudantes, pesquisadores, empreendedores.
            </p>

            {/* Stats Section - Above Button */}
            <div className="mb-8 flex flex-col gap-2 max-w-md">
              <div className="stat-text">+1200 participantes</div>
              <div className="stat-text">+15 países</div>
              <div className="stat-text">+80 projetos com IA</div>
            </div>

            {/* Primary CTA */}
            <div className="mb-4">
              <Button
                size="lg"
                className="w-full max-w-md px-8 py-6 text-base md:text-lg font-bold transition-all hover:scale-105"
                asChild
              >
                <a href="https://lu.ma/sundai" target="_blank" rel="noopener noreferrer">
                  Participe da próxima edição
                </a>
              </Button>
            </div>

            {/* Newsletter - Same width as button */}
            <form onSubmit={handleEmailSubmit} className="relative w-full max-w-md">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="pr-12 h-12 bg-background/20 border-foreground/30 text-foreground placeholder:text-foreground/50"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-10 w-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Carousel */}
        <div className="px-6 pb-8 md:px-12 lg:px-20">
          <h3 className="text-sm font-medium text-foreground/70 mb-4 uppercase tracking-wider">
            Frequentado por
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Google</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Meta</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">OpenAI</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">AWS</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Microsoft</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Apple</div>
              {/* Duplicate for infinite scroll effect */}
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Google</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Meta</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">OpenAI</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">AWS</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Microsoft</div>
              <div className="glass-overlay px-6 py-3 text-foreground/80 text-base whitespace-nowrap">Apple</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-mono">
              {showSuccess ? "Bem-vindo à comunidade!" : "Quase lá!"}
            </DialogTitle>
            <DialogDescription>
              {showSuccess 
                ? "Clique no botão abaixo para entrar no grupo oficial do WhatsApp."
                : "Para completar sua inscrição, precisamos do seu WhatsApp."}
            </DialogDescription>
          </DialogHeader>
          
          {!showSuccess ? (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 pt-4">
              <Input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+55 11 99999-9999"
                className="w-full"
                required
              />
              <Button type="submit" className="w-full">
                Confirmar
              </Button>
            </form>
          ) : (
            <div className="pt-4 space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg flex items-center justify-center">
                <span className="text-6xl">✅</span>
              </div>
              <Button 
                className="w-full" 
                asChild
              >
                <a 
                  href="https://wa.me/group_link_placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Entrar no Grupo WhatsApp
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
