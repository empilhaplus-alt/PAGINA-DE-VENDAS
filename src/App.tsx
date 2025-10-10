import React from 'react';
// 1. Importe os componentes de rota e o novo componente de detalhe
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import PreviewSection from './components/PreviewSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import HashLinkScrollManager from './components/HashLinkScrollManager';
import Footer from './components/Footer';
import CoursesList from './components/CoursesList';
import CourseDetail from './components/CourseDetail'; // Importe a nova página

// Crie um componente para a página inicial para organizar o código
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PreviewSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <CoursesList />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      {/* 2. Configure as rotas */}
      <HashLinkScrollManager />
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota para a página de detalhes do curso. O :id é um parâmetro dinâmico. */}
        <Route path="/curso/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;