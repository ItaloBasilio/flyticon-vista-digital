import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Soluções 360° em Marketing Digital</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme sua{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  visão digital
                </span>{" "}
                em realidade
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Na Flyticon 360, oferecemos soluções completas em marketing digital: 
                sites institucionais, landing pages, e-commerce e IA generativa para 
                impulsionar seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8"
              >
                Começar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-secondary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
              <img 
                src={heroImage} 
                alt="Tecnologia e Inovação Digital" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;