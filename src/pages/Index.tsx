import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/sundai-logo.png";

const Index = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/liquidgradientabstractbackground-Rh1K5YnJAn7FB6fwtBBuCV6S/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline Background"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SundAI Foundation" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-lg font-bold text-foreground text-glow md:text-xl">
              SundAI Foundation
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
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-foreground text-glow md:text-6xl lg:text-7xl">
              SundAI Foundation
            </h1>
            <p className="mb-10 text-base leading-relaxed text-foreground/90 text-glow md:text-lg lg:text-xl">
              A SundAI Foundation é uma organização global de inovação e educação em tecnologia
              que nasceu no ecossistema do MIT. Nosso propósito é espalhar a mentalidade hacker e
              o uso criativo de IA para resolver problemas reais, conectando estudantes,
              pesquisadores, empreendedores e empresas que constroem o futuro com inteligência
              artificial.
            </p>

            {/* Primary CTA */}
            <div className="mb-8 flex justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base md:text-lg font-bold shadow-2xl transition-all hover:scale-105"
                asChild
              >
                <a href="https://lu.ma/sundai" target="_blank" rel="noopener noreferrer">
                  Participe da próxima edição
                </a>
              </Button>
            </div>

            {/* Newsletter */}
            <div className="flex justify-center">
              <div className="glass-card flex w-full max-w-md flex-col gap-3 p-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 border-border/50 bg-background/20 text-foreground placeholder:text-foreground/50"
                />
                <Button
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats & Partners */}
        <div className="px-6 pb-8 md:px-12 lg:px-20">
          {/* Stats */}
          <div className="mb-8 grid grid-cols-3 gap-4 text-center md:gap-8">
            <div>
              <div className="stat-number">+1200</div>
              <div className="stat-label">participantes</div>
            </div>
            <div>
              <div className="stat-number">+15</div>
              <div className="stat-label">países</div>
            </div>
            <div>
              <div className="stat-number">+80</div>
              <div className="stat-label">projetos com IA</div>
            </div>
          </div>

          {/* Partners */}
          <div className="text-center">
            <p className="mb-4 text-xs text-foreground/60 md:text-sm">
              Parceiros & Frequentado por
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="text-2xl font-bold text-foreground/80 text-glow md:text-3xl">
                Google
              </div>
              <div className="text-2xl font-bold text-foreground/80 text-glow md:text-3xl">
                OpenAI
              </div>
              <div className="text-2xl font-bold text-foreground/80 text-glow md:text-3xl">
                AWS
              </div>
              <div className="text-2xl font-bold text-foreground/80 text-glow md:text-3xl">
                Meta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
