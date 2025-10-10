import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCheckout = () => {
    // Link para checkout - será substituído pelo link real
    window.open('#checkout', '_blank');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">E+</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Empilha+Plus</h1>
              <p className="text-sm text-gray-600">Treinamentos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('treinamentos')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Treinamentos
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleCheckout}
            className="hidden md:flex bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 items-center space-x-2 shadow-lg"
          >
            <ShoppingCart size={20} />
            <span>Quero Me Capacitar Agora</span>
          </button>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('treinamentos')} className="text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Treinamentos
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                Contato
              </button>
              <button
                onClick={handleCheckout}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center"
              >
                Quero Me Capacitar Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;