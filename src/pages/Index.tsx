import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import logo from "@/assets/sundai-logo-horizontal.svg";
import { useEffect, useRef } from "react";

const Index = () => {
  const splineRef = useRef<HTMLDivElement>(null);

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
          <div className="flex items-center">
            <img src={logo} alt="SundAI LATAM" className="h-8 md:h-10" />
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
            <div className="relative w-full max-w-md">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="pr-12 h-12 bg-background/20 border-foreground/30 text-foreground placeholder:text-foreground/50"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-10 w-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - 3 Columns */}
        <div className="px-6 pb-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Left: Parceiros */}
            <div>
              <h3 className="text-sm font-medium text-foreground/70 mb-3 uppercase tracking-wider">
                Parceiros
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm">OpenAI</div>
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm">Google</div>
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm">AWS</div>
              </div>
            </div>

            {/* Center: Frequentado por */}
            <div>
              <h3 className="text-sm font-medium text-foreground/70 mb-3 uppercase tracking-wider">
                Frequentado por
              </h3>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm whitespace-nowrap">Meta</div>
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm whitespace-nowrap">Microsoft</div>
                <div className="glass-overlay px-4 py-2 text-foreground/80 text-sm whitespace-nowrap">Apple</div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex flex-col gap-2 md:items-end">
              <div className="stat-text">+1200 participantes</div>
              <div className="stat-text">+15 países</div>
              <div className="stat-text">+80 projetos com IA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
