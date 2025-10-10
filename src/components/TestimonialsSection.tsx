
import { Star, Quote, CheckCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'João Silva',
      position: 'Operador de Empilhadeira',
      company: 'Logística Brasil Ltda',
      rating: 5,
      text: 'Com a Empilha+ Plus, consegui minha certificação rapidamente e hoje trabalho em uma empresa excelente. O treinamento é completo e os instrutores são muito competentes!',
      type: 'individual',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Paula',
      position: 'Gerente de Logística',
      company: 'Indústria ABC S.A.',
      rating: 5,
      text: 'Minha equipe reduziu incidentes e ganhou produtividade após o treinamento. Recomendo para todas as empresas que buscam segurança e eficiência.',
      type: 'company',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos Mendes',
      position: 'Supervisor de Produção',
      company: 'Construtech Engenharia',
      rating: 5,
      text: 'O treinamento é completo e atualizado, recomendo! Nossos operadores ficaram muito mais preparados e seguros no trabalho.',
      type: 'company',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      position: 'Operadora Industrial',
      company: 'Metalúrgica São Paulo',
      rating: 5,
      text: 'Consegui meu emprego graças ao certificado da Empilha+ Plus. O treinamento me deu toda a base que precisava. Muito obrigada!',
      type: 'individual',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Santos',
      position: 'Gerente de RH',
      company: 'Transportes Rápidos Ltda',
      rating: 5,
      text: 'Parceria de longa data com a Empilha+ Plus. Sempre prestam um serviço de qualidade e nossos funcionários ficam muito bem preparados.',
      type: 'company',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lucas Pereira',
      position: 'Almoxarife',
      company: 'Distribuidora Central',
      rating: 5,
      text: 'Fiz o curso e hoje trabalho em uma empresa excelente. O treinamento realmente abriu portas na minha vida profissional.',
      type: 'individual',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="text-yellow-600 mr-2" size={20} />
              <span className="text-yellow-700 font-semibold">Prova Social</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O que dizem nossos
              <span className="text-yellow-600"> alunos e empresas parceiras</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Veja os depoimentos de profissionais que transformaram suas carreiras e empresas que 
              melhoraram sua segurança com nossos treinamentos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Alunos</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Profissionais Formados</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">150+</div>
              <div className="text-gray-600">Empresas Atendidas</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.9</div>
              <div className="text-gray-600 flex items-center justify-center space-x-1">
                <span>Avaliação</span>
                {renderStars(5)}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100">
                <Quote className="text-yellow-200 absolute top-4 right-4" size={32} />
                
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-yellow-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
                
                {testimonial.type === 'company' && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Empresa
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Depoimentos em Vídeo</h3>
              <p className="text-gray-300 text-lg">Veja o que nossos alunos têm a dizer</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Depoimento João"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">João Silva</h4>
                  <p className="text-gray-400 text-sm">Operador de Empilhadeira</p>
                </div>
              </div>
              
              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Depoimento Maria"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Maria Paula</h4>
                  <p className="text-gray-400 text-sm">Gerente de Logística</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;