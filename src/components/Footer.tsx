import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Shield,
  FileText,
  CreditCard
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">E+</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Empilha+Plus</h3>
                <p className="text-gray-400">Treinamentos</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especializada em treinamentos de segurança do trabalho e capacitação de operadores de empilhadeira. 
              Formamos profissionais capacitados para atuar com segurança e eficiência.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="text-yellow-400" size={20} />
                <span className="text-sm text-gray-300">Certificado MTE</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="text-yellow-400" size={20} />
                <span className="text-sm text-gray-300">Pagamento Seguro</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-3 rounded-lg transition-colors duration-300 group">
                <Facebook className="group-hover:text-black" size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-3 rounded-lg transition-colors duration-300 group">
                <Instagram className="group-hover:text-black" size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-3 rounded-lg transition-colors duration-300 group">
                <Linkedin className="group-hover:text-black" size={20} />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lista-de-cursos')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Treinamentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">(21) 98213-4226</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">empilhaplus@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-300">
                  <p>Av. Brasil, 12.055</p>
                  <p>Rio de Janeiro/RJ</p>
                  <p>CEP 01234-567</p>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Atendimento</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-2">
                <FileText size={16} />
                <span>Termos de Uso</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-2">
                <Shield size={16} />
                <span>Política de Privacidade</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-2">
                <CreditCard size={16} />
                <span>Política de Devolução</span>
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              CNPJ: 35.077.899/0001-25
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Empilha+Plus Treinamentos. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span>Desenvolvido com</span>
              <span className="text-red-500">❤️</span>
              <span>para seu sucesso profissional</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;