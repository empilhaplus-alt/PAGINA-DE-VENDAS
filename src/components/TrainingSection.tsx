import React from 'react';
import { 
  Shield, 
  HardHat, 
  Wrench, 
  Building2, 
  AlertTriangle, 
  ArrowUp,
  Truck,
  Clock,
  Users,
  Award
} from 'lucide-react';

const TrainingSection = () => {
  const trainings = [
    {
      id: 'nr01',
      title: 'NR-01',
      subtitle: 'Disposições Gerais e Gerenciamento de Riscos',
      description: 'Fundamentos da segurança do trabalho e gestão de riscos ocupacionais.',
      icon: Shield,
      duration: '8h',
      participants: 'Até 20'
    },
    {
      id: 'nr06',
      title: 'NR-06',
      subtitle: 'Equipamentos de Proteção Individual (EPI)',
      description: 'Uso correto e manutenção de equipamentos de proteção individual.',
      icon: HardHat,
      duration: '4h',
      participants: 'Até 25'
    },
    {
      id: 'nr12',
      title: 'NR-12',
      subtitle: 'Segurança em Máquinas e Equipamentos',
      description: 'Operação segura de máquinas e equipamentos industriais.',
      icon: Wrench,
      duration: '16h',
      participants: 'Até 15'
    },
    {
      id: 'nr18',
      title: 'NR-18',
      subtitle: 'Condições e Meio Ambiente na Construção',
      description: 'Segurança específica para a indústria da construção civil.',
      icon: Building2,
      duration: '6h',
      participants: 'Até 20'
    },
    {
      id: 'nr33',
      title: 'NR-33',
      subtitle: 'Segurança em Espaços Confinados',
      description: 'Procedimentos seguros para trabalho em espaços confinados.',
      icon: AlertTriangle,
      duration: '16h',
      participants: 'Até 12'
    },
    {
      id: 'nr35',
      title: 'NR-35',
      subtitle: 'Trabalho em Altura',
      description: 'Técnicas e equipamentos para trabalho seguro em altura.',
      icon: ArrowUp,
      duration: '8h',
      participants: 'Até 15'
    }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Nossos Treinamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma ampla gama de treinamentos em segurança do trabalho, todos baseados nas 
              Normas Regulamentadoras (NRs) do Ministério do Trabalho.
            </p>
          </div>

          {/* Training Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trainings.map((training) => {
              const IconComponent = training.icon;
              return (
                <div key={training.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <span className="text-blue-800 font-bold text-lg">{training.title}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{training.subtitle}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{training.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{training.participants}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Training - Forklift Operator */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Truck className="text-blue-900" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Operador de Empilhadeira</h3>
                    <p className="text-blue-200">Nosso treinamento especializado</p>
                  </div>
                </div>
                
                <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                  Treinamento completo para formação de operadores de empilhadeira, incluindo teoria, 
                  prática e todas as normas de segurança exigidas pela legislação.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="text-yellow-400" size={20} />
                      <span className="font-semibold">Duração</span>
                    </div>
                    <p className="text-blue-200">40 horas</p>
                  </div>
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="text-yellow-400" size={20} />
                      <span className="font-semibold">Certificado</span>
                    </div>
                    <p className="text-blue-200">Válido nacionalmente</p>
                  </div>
                </div>
                
                <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300">
                  Saiba Mais
                </button>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
                  <h4 className="text-2xl font-bold mb-4">Diferenciais</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Aulas práticas com equipamentos reais</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Instrutores especializados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Certificação imediata</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Suporte pós-treinamento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;