import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import logo from "@/assets/sundai-logo.png";

const Index = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Content */}
      <div className="flex h-full flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SundAI LATAM" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-lg font-bold text-foreground md:text-xl font-mono">
              SundAI LATAM
            </span>
          </div>
          <div className="hidden gap-6 md:flex lg:gap-8">
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
            <a href="#eventos" className="nav-link">
              Eventos
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </div>
        </nav>

        {/* Central Hero Content */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="mb-3 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              SundAI LATAM
            </h1>
            <h2 className="mb-8 text-2xl font-bold text-foreground/70 md:text-3xl lg:text-4xl">
              Brazil chapter
            </h2>
            <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg lg:text-xl max-w-2xl mx-auto">
              Criada no MIT, nosso propósito é espalhar o uso criativo de IA para resolver 
              problemas reais, conectando estudantes, pesquisadores, empreendedores.
            </p>

            {/* Primary CTA */}
            <div className="mb-8 flex justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-base md:text-lg font-bold transition-all hover:scale-105"
                asChild
              >
                <a href="https://lu.ma/sundai" target="_blank" rel="noopener noreferrer">
                  Participe da próxima edição
                </a>
              </Button>
            </div>

            {/* Newsletter */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="pr-12 h-12"
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
        </div>

        {/* Bottom Stats */}
        <div className="px-6 pb-10 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div className="stat-text">+1200 participantes</div>
            <div className="stat-text">+15 países</div>
            <div className="stat-text">+80 projetos com IA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
