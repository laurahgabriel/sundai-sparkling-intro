import { Linkedin, Twitter, Target, Users, Lightbulb, Zap } from "lucide-react";
import logo from "@/assets/sundai-logo-horizontal.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Sobre = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Geometric Background */}
      <div className="geometric-bg fixed inset-0"></div>

      {/* Content */}
      <div className="relative z-10">
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

        {/* Hero Section */}
        <section 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 py-20 opacity-0"
        >
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-mono">
              Sobre a SundAI LATAM
            </h1>
            <h2 className="mb-8 text-2xl font-medium text-foreground/70 md:text-3xl font-mono">
              Criada no ecossistema do MIT, agora conectando mentes inovadoras no Brasil.
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              A SundAI Foundation é uma organização global dedicada a promover inovação e educação em tecnologia.
              Nosso propósito é espalhar a mentalidade hacker e o uso criativo de IA para resolver problemas reais,
              conectando estudantes, pesquisadores, empreendedores e empresas que constroem o futuro com inteligência artificial.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="bg-white border-t border-foreground/10 px-6 md:px-12 lg:px-20 py-20 opacity-0"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl font-mono">
              Nossa missão
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              Acreditamos que o poder da inteligência artificial deve ser acessível, colaborativo e ético.
              Nosso papel é inspirar, capacitar e unir pessoas que acreditam no impacto positivo da tecnologia.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="px-6 md:px-12 lg:px-20 py-20 opacity-0"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl font-mono">
              O que fazemos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Eventos e Hackathons</h3>
                  <p className="text-foreground/70">
                    Promovemos eventos e hackathons focados em IA e inovação.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Programas Educacionais</h3>
                  <p className="text-foreground/70">
                    Oferecemos programas educacionais e mentorias com especialistas do MIT e parceiros globais.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Conexão com Startups</h3>
                  <p className="text-foreground/70">
                    Conectamos talentos com startups e empresas que buscam soluções reais baseadas em IA.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Comunidade Colaborativa</h3>
                  <p className="text-foreground/70">
                    Criamos uma comunidade de aprendizado e colaboração contínua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Community Section */}
        <section 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="bg-[#F3F3F3] px-6 md:px-12 lg:px-20 py-20 opacity-0"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl font-mono text-center">
              Nossa comunidade
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "João Almeida", role: "Diretor de Inovação" },
                { name: "Carla Torres", role: "Coordenadora Educacional" },
                { name: "Marcos Lima", role: "Relações Institucionais" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent/60" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-foreground/60">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section - Carousel */}
        <section 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="footer-section px-6 py-8 md:px-12 lg:px-20 opacity-0"
        >
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
        </section>
      </div>
    </div>
  );
};

export default Sobre;
