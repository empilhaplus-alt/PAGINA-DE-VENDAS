import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// O import do 'BenefitsSection' foi removido daqui
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CoursesList from './components/CoursesList';
import CourseDetail, { CourseChoice } from './components/CourseDetail';
import QuoteForm from './components/QuoteForm';
import IndividualCourseView from './components/IndividualCourseView';
import HashLinkScrollManager from './components/HashLinkScrollManager';

const HomePage = () => {
  return (
    <>
      <Header />
      
      {/* ================================================================== */}
      {/* ▼▼▼ NOVA ORDEM OTIMIZADA DAS SEÇÕES ▼▼▼ */}
      {/* ================================================================== */}

      {/* 1. O Convite */}
      <HeroSection />

      {/* 2. A Vitrine - Direto ao Ponto! */}
      <CoursesList />

      {/* 3. A Oportunidade (Oferta do Pacote) */}
      <OfferSection />

      {/* 4. A Seção de Confiança (Agora consolidada) */}
      <TestimonialsSection /> 
      
      {/* A chamada para <BenefitsSection /> foi removida daqui, 
        pois seu conteúdo foi incorporado na TestimonialsSection.
        A <PreviewSection /> também foi eliminada.
      */}

      {/* 5. Quebra de Objeções */}
      <FAQSection />

      {/* 6. O Contato Final */}
      <ContactSection />
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <HashLinkScrollManager />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/curso/:id" element={<CourseDetail />}>
          <Route index element={<CourseChoice />} />
          <Route path="pf" element={<IndividualCourseView />} />
          <Route path="pj" element={<QuoteForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;