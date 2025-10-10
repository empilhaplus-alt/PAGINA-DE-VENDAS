import React from 'react';
import { Target, Shield, Users, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Sobre a Empilha+Plus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma empresa especializada em treinamentos de segurança do trabalho e capacitação de operadores de empilhadeira, 
              comprometida com a formação de profissionais qualificados e seguros.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Company Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Nossa Empresa</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Empilha+Plus Treinamentos nasceu da necessidade de oferecer capacitação de qualidade em segurança do trabalho, 
                com foco especial na operação segura de empilhadeiras e equipamentos industriais.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossos instrutores são profissionais experientes e certificados, que combinam conhecimento técnico com 
                experiência prática para oferecer treinamentos que realmente fazem a diferença na vida profissional dos nossos alunos.
              </p>
              
              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Instrutores certificados e experientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Treinamentos práticos e teóricos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Certificação reconhecida nacionalmente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Suporte contínuo aos alunos</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Target className="text-blue-800 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-blue-800">Nossa Missão</h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Formar profissionais capacitados para atuar com segurança e eficiência no mercado de trabalho, 
                contribuindo para a redução de acidentes e o aumento da produtividade nas empresas.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Nossos Valores</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Segurança</h4>
                <p className="text-gray-600">
                  A segurança é nossa prioridade máxima em todos os treinamentos e procedimentos.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Responsabilidade</h4>
                <p className="text-gray-600">
                  Assumimos o compromisso de formar profissionais conscientes e responsáveis.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Users className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Profissionalismo</h4>
                <p className="text-gray-600">
                  Mantemos sempre o mais alto padrão de qualidade em nossos serviços.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Credibilidade</h4>
                <p className="text-gray-600">
                  Nossa reputação é construída com base na confiança e resultados entregues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;