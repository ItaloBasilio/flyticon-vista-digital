import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Tech Solutions",
      role: "CEO",
      content: "A Flyticon 360 transformou completamente nossa presença digital. O site desenvolvido aumentou nossas conversões em 250% nos primeiros 3 meses.",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Ana Paula Silva",
      company: "Boutique Fashion",
      role: "Proprietária",
      content: "Nossa loja virtual criada pela equipe superou todas as expectativas. O design é impecável e a funcionalidade é perfeita. Recomendo totalmente!",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Roberto Costa",
      company: "Consultoria Empresarial",
      role: "Diretor",
      content: "O chatbot com IA implementado pela Flyticon 360 revolucionou nosso atendimento. Automatizamos 80% das consultas iniciais com excelente qualidade.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Marina Santos",
      company: "Health Clinic",
      role: "Gerente de Marketing",
      content: "As landing pages desenvolvidas para nossas campanhas geraram um ROI excepcional. A taxa de conversão aumentou significativamente.",
      rating: 5,
      avatar: "MS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como ajudamos empresas a alcançar resultados extraordinários 
            através de nossas soluções digitais inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;