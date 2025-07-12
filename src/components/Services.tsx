import { Globe, ShoppingCart, Rocket, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Desenvolvimento de websites profissionais que transmitem credibilidade e fortalecem sua marca no mercado digital.",
      features: ["Design Responsivo", "SEO Otimizado", "CMS Intuitivo", "Performance Superior"]
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "Páginas de conversão estratégicas desenvolvidas para maximizar resultados e gerar leads qualificados.",
      features: ["Alta Conversão", "A/B Testing", "Analytics Avançado", "Mobile-First"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais completas com integração de pagamentos, gestão de estoque e experiência otimizada de compra.",
      features: ["Pagamentos Seguros", "Gestão Completa", "UX Otimizada", "Relatórios Detalhados"]
    },
    {
      icon: Brain,
      title: "IA Generativa",
      description: "Implementação de inteligência artificial para automatizar processos, chatbots inteligentes e análises preditivas.",
      features: ["Automação", "Chatbots IA", "Análise Preditiva", "Personalização"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${servicesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Completas em{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Visão 360°
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de serviços digitais para elevar 
            sua presença online e acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para desenvolver a solução 
              perfeita para suas necessidades digitais.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background text-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-elegant transition-all duration-300"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;