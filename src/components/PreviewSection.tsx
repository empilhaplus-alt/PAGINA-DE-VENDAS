import React from 'react';
import { 
  Play, 
  FileText, 
  Award, 
  CheckCircle, 
  Download,
  BookOpen,
  Video,
  ClipboardList
} from 'lucide-react';

const PreviewSection = () => {
  const materials = [
    {
      icon: Video,
      title: 'Vídeo-Aulas Interativas',
      description: 'Conteúdo em alta qualidade com explicações detalhadas',
      preview: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: FileText,
      title: 'Material Didático Completo',
      description: 'PDFs, slides e apostilas para download',
      preview: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Award,
      title: 'Certificado Digital',
      description: 'Certificado oficial válido em todo território nacional',
      preview: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: ClipboardList,
      title: 'Checklists Exclusivos',
      description: 'Modelos práticos para inspeção e segurança',
      preview: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleVideoPlay = () => {
    alert('Vídeo de demonstração será reproduzido aqui');
  };

  return (
    <section id="treinamentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Veja como é o nosso 
              <span className="text-yellow-600"> treinamento na prática</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tenha acesso a aulas interativas, materiais exclusivos, checklists e modelos 
              que vão facilitar seu aprendizado e garantir sua certificação.
            </p>
          </div>

          {/* Main Preview Video */}
          <div className="mb-16">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <img 
                  src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Treinamento de Empilhadeira"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <button
                  onClick={handleVideoPlay}
                  className="relative bg-yellow-400 hover:bg-yellow-500 text-black w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl z-10"
                >
                  <Play size={40} className="ml-2" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Demonstração Completa do Treinamento
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Veja exatamente o que você vai aprender e como funciona nossa metodologia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {materials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={material.preview} 
                      alt={material.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-black" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{material.title}</h4>
                    <p className="text-gray-600 text-sm">{material.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What You'll Receive */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 lg:p-12 border border-yellow-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                O Que Você Vai Receber
              </h3>
              <p className="text-gray-700 text-lg">
                Pacote completo para sua capacitação profissional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Acesso Vitalício</h4>
                  <p className="text-gray-700 text-sm">Estude no seu ritmo, quando e onde quiser</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Certificado Digital</h4>
                  <p className="text-gray-700 text-sm">Válido nacionalmente com QR Code</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Suporte Especializado</h4>
                  <p className="text-gray-700 text-sm">Tire dúvidas com nossos instrutores</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Material Complementar</h4>
                  <p className="text-gray-700 text-sm">PDFs, checklists e modelos práticos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Atualizações Gratuitas</h4>
                  <p className="text-gray-700 text-sm">Conteúdo sempre atualizado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comunidade Exclusiva</h4>
                  <p className="text-gray-700 text-sm">Networking com outros profissionais</p>
                </div>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="mt-12 bg-white rounded-xl p-8 border-2 border-yellow-300">
              <div className="text-center">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold">🎁 BÔNUS EXCLUSIVO</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Checklist de Inspeção Diária
                </h4>
                <p className="text-gray-700 mb-6">
                  Receba gratuitamente nosso checklist exclusivo para inspeção diária de empilhadeira, 
                  garantindo ainda mais segurança e eficiência no seu trabalho.
                </p>
                <div className="flex items-center justify-center space-x-2 text-yellow-600">
                  <Download size={20} />
                  <span className="font-semibold">Valor: R$ 97,00 - GRÁTIS para você!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;