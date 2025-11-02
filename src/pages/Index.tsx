import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/sundai-logo-horizontal.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QRCodeSVG } from 'qrcode.react';

const Index = () => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showWhatsAppQR, setShowWhatsAppQR] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error submitting email:', errorData);
          throw new Error(errorData.error || 'Failed to subscribe');
        }

        const data = await response.json();
        console.log('Newsletter subscription successful:', data);
        
        setShowModal(true);
        setShowWhatsAppQR(false);
        setEmail('');
      } catch (error) {
        console.error('Error submitting email:', error);
        // Still show modal on error for better UX
        setShowModal(true);
        setShowWhatsAppQR(false);
      }
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp) {
      setShowWhatsAppQR(true);
    }
  };

  const whatsappGroupLink = "https://chat.whatsapp.com/JKHWWK5l0slDHFvg1dFI4Z?mode=wwt";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Geometric Background */}
      <div className="geometric-bg"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SundAI LATAM" className="h-8 md:h-10" />
            <span className="text-2xl">🇧🇷</span>
          </div>
          <div className="flex gap-6 md:gap-8">
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
            <a href="https://www.sundai.club/" target="_blank" rel="noopener noreferrer" className="nav-link">
              Projetos
            </a>
          </div>
        </nav>

        {/* Fixed Social Icons */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          <a href="https://www.linkedin.com/company/sundailatam/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/sundailatam/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="flex flex-1 items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-2 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl font-mono">
              SundAI LATAM
            </h1>
            <h2 className="mb-8 text-3xl font-bold text-foreground/80 md:text-4xl lg:text-5xl font-mono">
              Brazil chapter
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-foreground/80 md:text-xl max-w-xl">
              Criada no MIT, nosso propósito é espalhar o uso criativo de IA para resolver 
              problemas reais, conectando estudantes, pesquisadores, empreendedores.
            </p>

            {/* Stats Section - Above Button */}
            <div className="mb-8 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="stat-number">+1500</div>
                <div className="stat-label">Membros da comunidade</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="stat-number">+80</div>
                <div className="stat-label">Eventos</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="stat-number">+300</div>
                <div className="stat-label">Projetos</div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mb-4">
              <Button
                size="lg"
                className="w-full max-w-md px-8 py-6 text-base md:text-lg font-bold hover:brightness-90 transition-none"
                asChild
              >
                <a href="https://luma.com/calendar/cal-xWAs0uanG8v1TES" target="_blank" rel="noopener noreferrer">
                  Inscreva-se na próxima edição
                </a>
              </Button>
            </div>

            {/* Newsletter - Same width as button */}
            <div className="w-full max-w-md space-y-2">
              <p className="text-sm text-foreground/70 font-medium">Receba novidades da comunidade</p>
              <form onSubmit={handleEmailSubmit} className="relative w-full">
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
                  className="absolute right-1 top-1 h-10 w-10 hover:brightness-90 transition-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
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

      {/* Newsletter Modal - Two Column Layout */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Section - Confirmation */}
            <div className="flex flex-col justify-center space-y-4">
              <DialogHeader>
                <DialogTitle className="text-3xl font-mono text-foreground">
                  Inscrição confirmada!
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/70 leading-relaxed">
                  Você agora faz parte da comunidade SundAI LATAM. Receberá novidades e convites exclusivos das próximas edições.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center py-8">
                <span className="text-8xl">✅</span>
              </div>
            </div>

            {/* Right Section - WhatsApp Entry */}
            <div className="flex flex-col justify-center border-l border-border pl-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-mono text-foreground">
                  Entre no grupo do WhatsApp
                </DialogTitle>
                <DialogDescription className="text-sm text-foreground/60">
                  (opcional)
                </DialogDescription>
              </DialogHeader>
              
              {!showWhatsAppQR ? (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4 pt-6">
                  <p className="text-sm text-foreground/70">
                    Insira seu número para participar da comunidade no WhatsApp.
                  </p>
                  <Input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+55 11 99999-9999"
                    className="w-full"
                    required
                  />
                  <Button type="submit" className="w-full hover:brightness-90 transition-none">
                    Confirmar
                  </Button>
                </form>
              ) : (
                <div className="pt-6 space-y-6 transition-all duration-500">
                  <div className="flex items-center justify-center bg-white p-6 rounded-lg">
                    <QRCodeSVG 
                      value={whatsappGroupLink}
                      size={180}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <Button 
                    className="w-full hover:brightness-90 transition-none" 
                    asChild
                  >
                    <a 
                      href={whatsappGroupLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Entrar no Grupo
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
