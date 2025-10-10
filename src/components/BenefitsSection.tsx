import React from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  Headphones, 
  Building,
  CheckCircle,
  Star
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Conteúdo Atualizado',
      description: 'Conforme as normas de segurança mais recentes e exigências do mercado'
    },
    {
      icon: Award,
      title: 'Certificado Nacional',
      description: 'Válido em todo o território nacional e reconhecido pelo MTE'
    },
    {
      icon: Users,
      title: 'Instrutores Especializados',
      description: 'Profissionais experientes em movimentação e segurança do trabalho'
    },
    {
      icon: Shield,
      title: 'Aulas Práticas + Teóricas',
      description: 'Combinação perfeita entre conhecimento e aplicação prática'
    },
    {
      icon: Headphones,
      title: 'Suporte Pós-Treinamento',
      description: 'Acesso imediato e suporte contínuo após a conclusão'
    },
    {
      icon: Building,
      title: 'Para Empresas e Autônomos',
      description: 'Ideal para empresas e profissionais que buscam qualificação'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
              <Star className="text-yellow-600 mr-2" size={20} />
              <span className="text-yellow-700 font-semibold">Por que somos a melhor escolha?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher a 
              <span className="text-yellow-600"> Empilha+ Plus?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossos treinamentos unem teoria e prática para formar operadores qualificados, 
              seguros e preparados para o mercado de trabalho.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-black" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Resultados que Comprovam Nossa Excelência</h3>
              <p className="text-gray-300 text-lg">Números que falam por si só</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300">Profissionais Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-gray-300">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">150+</div>
                <div className="text-gray-300">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">Aprovação no Mercado</div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 text-center">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 inline-block">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={32} />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-2">Garantia de Satisfação</h4>
              <p className="text-green-700 text-lg">
                Satisfação garantida ou seu dinheiro de volta em até <strong>30 dias</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;