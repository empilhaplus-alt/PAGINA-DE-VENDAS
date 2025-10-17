import  { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react'; // Adicionados os ícones de Phone e Mail

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ==================================================================
  // ▼▼▼ LISTA DE LINKS ATUALIZADA (SEM "DEPOIMENTOS") ▼▼▼
  // ==================================================================
  const navLinks = [
    { href: '#home', label: 'Casa' },
    { href: '#lista-de-cursos', label: 'Treinamentos' },
    // O link para "Depoimentos" foi removido daqui
    { href: '#faq', label: 'Perguntas Frequentes' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    // Adicionamos a classe 'shadow-md' para um sombreamento mais pronunciado
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-md">
      
      {/* ================================================================== */}
      {/* ▼▼▼ NOVA SEÇÃO: BARRA SUPERIOR DE CONTATO ▼▼▼ */}
      {/* ================================================================== */}
      <div className="hidden md:block bg-slate-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a href="tel:+5521982134226" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Phone size={16} />
            <span>(21) 98213-4226</span>
          </a>
          <a href="mailto:empilhaplus@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Mail size={16} />
            <span>empilhaplus@gmail.com</span>
          </a>
        </div>
      </div>
      {/* ▲▲▲ FIM DA BARRA SUPERIOR ▲▲▲ */}
      {/* ================================================================== */}

      {/* Navegação Principal */}
      <nav className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-md">E+</span>
          <span className="ml-2">Empilha+Plus</span>
        </div>

        {/* Links do Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-600 hover:text-yellow-600 font-semibold transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Botões do Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold transition-colors">
            Quero Me Capacitar Agora
          </a>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-yellow-600 font-semibold py-2">
                {link.label}
              </a>
            ))}
            <a href="#checkout" onClick={() => setIsMenuOpen(false)} className="bg-yellow-400 hover:bg-yellow-500 text-black text-center px-6 py-3 rounded-lg font-bold transition-colors mt-4">
              Quero Me Capacitar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;