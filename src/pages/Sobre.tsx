import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/sundai-logo-horizontal.svg";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Geometric Background */}
      <div className="geometric-bg"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SundAI LATAM" className="h-8 md:h-10" />
            <span className="text-2xl">🇧🇷</span>
          </Link>
          <div className="flex gap-6 md:gap-8">
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
          </div>
        </nav>

        {/* Fixed Social Icons */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          <a href="https://www.linkedin.com/company/sundailatam/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Main Content - Centered */}
        <div className="flex flex-1 items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-mono">
              Sobre a SundAI LATAM
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
              <p>
                A SundAI Foundation é uma organização global de inovação e educação em 
                tecnologia que nasceu no ecossistema do MIT.
              </p>
              <p>
                Nosso propósito é espalhar a mentalidade hacker e o uso criativo de IA 
                para resolver problemas reais.
              </p>
              <p>
                Conectamos estudantes, pesquisadores, empreendedores e empresas que 
                constroem o futuro com inteligência artificial.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Carousel */}
        <div className="footer-section px-6 py-8 md:px-12 lg:px-20">
          <h3 className="text-sm font-medium text-foreground/60 mb-4 uppercase tracking-wider">
            Frequentado por
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Google</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Meta</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">OpenAI</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">AWS</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Microsoft</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Apple</div>
              {/* Duplicate for infinite scroll effect */}
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Google</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Meta</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">OpenAI</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">AWS</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Microsoft</div>
              <div className="glass-overlay px-6 py-3 text-foreground/70 text-base whitespace-nowrap">Apple</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
