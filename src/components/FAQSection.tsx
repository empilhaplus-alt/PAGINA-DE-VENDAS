import  { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto tempo tenho de acesso ao treinamento?',
      answer: 'Você terá acesso ao treinamento por 1 ano! Isso significa que pode estudar no seu ritmo, revisar o conteúdo quantas vezes quiser dentro do período e terá acesso às todas as atualizações que fizermos no curso.'
    },
    {
      question: 'O certificado é aceito em todo o Brasil?',
      answer: 'Sim! Nosso certificado é emitido conforme as normas vigentes do Ministério do Trabalho e é reconhecido nacionalmente. Você pode trabalhar em qualquer empresa do Brasil com nossa certificação.'
    },
    {
      question: 'Como funciona a parte prática do treinamento?',
      answer: 'Oferecemos instruções detalhadas em vídeo sobre todos os procedimentos práticos, além de orientações para que você possa realizar a prática supervisionada em sua região. Também fornecemos uma lista de parceiros credenciados.'
    },
    {
      question: 'O curso é válido para empresas e profissionais autônomos?',
      answer: 'Absolutamente! Nosso treinamento atende tanto empresas que precisam capacitar suas equipes quanto profissionais autônomos e pessoas que desejam ingressar na área de operação de empilhadeiras.'
    },
    {
      question: 'Há suporte após a conclusão do curso?',
      answer: 'Sim! Oferecemos suporte contínuo via e-mail e WhatsApp para tirar dúvidas, orientações sobre o mercado de trabalho e atualizações sobre normas de segurança. Nosso compromisso é com seu sucesso profissional.'
    },
    {
      question: 'Quando recebo o certificado?',
      answer: 'O certificado digital é emitido automaticamente após a conclusão de todas as aulas e aprovação na avaliação final. Geralmente isso acontece no mesmo dia da conclusão do curso.'
    },
    {
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim! Oferecemos parcelamento em até 12x no cartão de crédito. Também aceitamos PIX, boleto bancário e outros métodos de pagamento para sua comodidade.'
    },
    {
      question: 'O que acontece se eu não conseguir aprender?',
      answer: 'Nosso método é comprovadamente eficaz, mas se por qualquer motivo você não conseguir aprender, colocaremos todo o nosso pessoal para lhe auxiliar até você ficar 100% satisfeito. Sem perguntas, sem complicações.'
    },
    {
      question: 'Preciso ter experiência prévia?',
      answer: 'Não! Nosso treinamento foi desenvolvido para pessoas sem experiência prévia. Começamos do básico e evoluímos gradualmente até os procedimentos mais avançados de operação segura.'
    },
    {
      question: 'Como funciona o acesso ao curso?',
      answer: 'Após a confirmação do pagamento, você recebe imediatamente por e-mail os dados de acesso à nossa plataforma. É só fazer login e começar a estudar na mesma hora!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="text-yellow-600 mr-2" size={20} />
              <span className="text-yellow-700 font-semibold">Tire suas dúvidas</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perguntas 
              <span className="text-yellow-600"> Frequentes</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Esclarecemos as principais dúvidas sobre nosso treinamento. 
              Se não encontrar sua resposta aqui, entre em contato conosco!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="text-yellow-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-yellow-600 flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Nossa equipe está pronta para ajudar você a tomar a melhor decisão para sua carreira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </button>
              
              <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Enviar E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;