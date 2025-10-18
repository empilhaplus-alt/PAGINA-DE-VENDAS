import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  User,
  Building,
  ArrowRight,
  Loader2
} from 'lucide-react';
// 1. Importe o ícone do WhatsApp da nova biblioteca
import { FaWhatsapp } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSubmitted(false);

    try {
      const { error: insertError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err: any) {
      console.error("Erro ao enviar mensagem:", err);
      setError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os treinamentos da Empilha+Plus.`
    );
    window.open(`https://wa.me/5521982134226?text=${message}`, '_blank');
  };
  
  const handleScrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ainda com Dúvidas ou Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe está pronta para ajudar você a tomar a melhor decisão para sua carreira ou sua empresa.
            </p>
          </div>

          {/* Main CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Garanta o Pacote Essencial com Desconto!
            </h3>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Aproveite a oferta por tempo limitado e adquira os 3 treinamentos mais importantes com um preço especial.
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={handleScrollToCheckout}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>VER OFERTA DO PACOTE</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Nossos Canais de Atendimento</h3>
              
              <div className="space-y-6 mb-8">
                {/* Contact Methods */}
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <a href="tel:+5521982134226" className="text-gray-600 hover:underline">(21) 98213-4226</a>
                    <p className="text-sm text-gray-500">Atendimento: Seg a Sex, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <a href="mailto:empilhaplus@gmail.com" className="text-gray-600 hover:underline">empilhaplus@gmail.com</a>
                    <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
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
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Seu nome" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Empresa (opcional)</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Nome da empresa" />
                    </div>
                  </div>
                </div>
                {/* ... (demais inputs: email, phone, message) ... */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Conte-nos como podemos ajudar você..."></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" disabled={isLoading} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {isLoading ? (<><Loader2 className="animate-spin mr-2" size={20} /><span>Enviando...</span></>) : (<><Send size={20} /><span>Enviar Mensagem</span></>)}
                  </button>
                  <button type="button" onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                    {/* Ícone do WhatsApp substituído aqui */}
                    <FaWhatsapp size={22} />
                    <span> WhatsApp </span>
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