import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock,
  CheckCircle,
  User,
  Building,
  ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os treinamentos da Empilha+Plus.\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleCheckout = () => {
    window.open('#checkout', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pronto para 
              <span className="text-yellow-600"> Transformar sua Carreira?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar você a conquistar 
              sua certificação e alavancar sua carreira profissional!
            </p>
          </div>

          {/* Main CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Não Perca Esta Oportunidade!
            </h3>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Milhares de profissionais já transformaram suas vidas com nossos treinamentos. 
              Seja o próximo a conquistar sua independência profissional!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCheckout}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>GARANTIR MINHA VAGA AGORA</span>
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Fale Conosco</h3>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-sm text-gray-500">Atendimento: Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@empilhaplus.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Rua da Segurança, 123</p>
                    <p className="text-gray-600">São Paulo, SP - CEP 01234-567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Por que nos escolher?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Resposta rápida e personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Consultoria gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Suporte durante todo o processo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Garantia de satisfação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa (opcional)
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Conte-nos como podemos ajudar você..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;