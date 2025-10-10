import React from 'react';
import { Award, FileText, Shield, CheckCircle, Download, Users } from 'lucide-react';

const CertificationSection = () => {
  const documents = [
    {
      title: 'ASO - Atestado de Saúde Ocupacional',
      description: 'Documento médico que comprova a aptidão do trabalhador para a função.',
      icon: FileText
    },
    {
      title: 'Ficha de EPI',
      description: 'Registro de entrega e uso de Equipamentos de Proteção Individual.',
      icon: Shield
    },
    {
      title: 'Certificado de Conclusão',
      description: 'Certificado oficial de conclusão do treinamento, reconhecido nacionalmente.',
      icon: Award
    }
  ];

  const certificationFeatures = [
    'Certificados digitais e impressos',
    'Registro no sistema do Ministério do Trabalho',
    'Validade conforme legislação vigente',
    'Consulta online de autenticidade',
    'Renovação com desconto especial',
    'Suporte técnico permanente'
  ];

  return (
    <section id="certification" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Documentação e Certificação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Todos os nossos cursos são certificados e seguem rigorosamente as normas do Ministério do Trabalho, 
              garantindo a validade e reconhecimento em todo território nacional.
            </p>
          </div>

          {/* Certification Promise */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="text-center">
              <Award className="text-yellow-400 mx-auto mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-4">100% Certificados</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Garantimos que todos os participantes que concluírem nossos treinamentos receberão 
                certificação oficial, válida em todo o Brasil e reconhecida pelos órgãos competentes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users className="text-yellow-400 mx-auto mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2">500+</h4>
                  <p className="text-blue-200">Profissionais Certificados</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle className="text-yellow-400 mx-auto mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2">100%</h4>
                  <p className="text-blue-200">Taxa de Aprovação</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Award className="text-yellow-400 mx-auto mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2">15+</h4>
                  <p className="text-blue-200">Tipos de Certificados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Types */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Documentação Emitida</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {documents.map((doc, index) => {
                const IconComponent = doc.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">{doc.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{doc.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certification Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Diferenciais da Nossa Certificação</h3>
              <div className="space-y-4">
                {certificationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center space-x-2">
                  <Download size={24} />
                  <span>Baixar Exemplo de Certificado</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200">
              <div className="text-center">
                <Shield className="text-blue-800 mx-auto mb-6" size={64} />
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Garantia de Qualidade</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nossos certificados são emitidos em conformidade com as exigências legais e 
                  possuem QR Code para verificação de autenticidade online.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-800 mb-3">Informações do Certificado:</h5>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• Número de registro único</li>
                    <li>• Data de emissão e validade</li>
                    <li>• Carga horária completa</li>
                    <li>• Assinatura digital do instrutor</li>
                    <li>• Selo de autenticidade</li>
                    <li>• QR Code para verificação</li>
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

export default CertificationSection;