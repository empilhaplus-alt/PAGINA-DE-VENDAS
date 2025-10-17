import { Star, CheckCircle, Award } from 'lucide-react';

// Dados dos depoimentos para manter o código limpo
const testimonials = [
  {
    name: 'João Carlos M.',
    role: 'Coordenador de Logística',
    text: 'A capacitação da equipe com a Empilha+ Plus foi um divisor de águas. Reduzimos os incidentes em 90% e a produtividade aumentou visivelmente.',
    rating: 5,
  },
  {
    name: 'Mariana Silva',
    role: 'Operadora de Empilhadeira',
    text: 'O curso é muito didático e os instrutores são excelentes. Consegui minha certificação rapidamente e me sinto muito mais segura no trabalho diário.',
    rating: 5,
  },
];

// Dados dos benefícios que foram consolidados aqui
const coreBenefits = [
  'Certificados Válidos em Todo o Brasil',
  'Instrutores Especializados e com Experiência de Mercado',
  'Aulas Teóricas e Práticas Focadas na Realidade do Trabalho',
  'Suporte Contínuo para Alunos e Empresas',
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
            Por que a Empilha+ Plus é a Escolha Certa?
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            Veja o que nossos alunos e parceiros dizem sobre nossos treinamentos e os diferenciais que oferecemos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Depoimentos */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna Direita: Benefícios Consolidados */}
          <div className="bg-slate-800 text-white p-8 rounded-2xl">
            <Award className="text-yellow-400 w-12 h-12 mb-6" />
            <h3 className="text-3xl font-bold mb-6">Sua Garantia de Qualidade e Conformidade</h3>
            <div className="space-y-4">
              {coreBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;