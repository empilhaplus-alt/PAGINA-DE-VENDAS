import React from 'react';
import { Play, ArrowRight, ShieldCheck } from 'lucide-react';

// Hook personalizado para o countdown, mantendo a lógica de negócio separada do design.
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 7, hours: 23, minutes: 45, seconds: 30
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

   const formatTime = (time: number) => String(time).padStart(2, '0');

  return {
    days: formatTime(timeLeft.days),
    hours: formatTime(timeLeft.hours),
    minutes: formatTime(timeLeft.minutes),
    seconds: formatTime(timeLeft.seconds),
  };
};

const HeroSection = () => {
  const timeLeft = useCountdown();

  const handleScrollToCourses = () => {
    const courseSection = document.getElementById('lista-de-cursos');
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoPlay = () => {
    alert('Vídeo de apresentação será reproduzido aqui');
  };


  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
      {/* Efeitos de fundo para um visual mais sofisticado */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      <div className="absolute -top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 [mask-image:radial-gradient(50%_40%_at_center,white,transparent)] bg-gradient-to-br from-yellow-500/30 to-slate-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna Esquerda: Conteúdo e Chamada para Ação */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-montserrat text-yellow-400 border border-yellow-500/20 mb-6">
              <ShieldCheck size={16} />
              Certificação Válida em Todo o Brasil
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
              Capacitação Completa em Segurança do Trabalho
            </h1>
            
            <h2 className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8">
              Da operação de empilhadeiras às NRs essenciais, a <span className="text-yellow-400 font-montserrat">Empilha+ Plus</span> oferece o portfólio de treinamentos que sua equipe precisa para trabalhar com máxima segurança e eficiência.
            </h2>

            {/* ▼▼▼ SEÇÃO DOS BOTÕES ATUALIZADA ▼▼▼ */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToCourses} // Ação alterada para rolar a página
                className="group relative inline-flex items-center justify-center gap-2 text-lg font-bold bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {/* Texto do CTA alterado */}
                <span>Ver Nossos Cursos</span>
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={handleVideoPlay}
                className="group inline-flex items-center justify-center gap-2 text-lg font-bold text-yellow-400 bg-slate-900/50 border-2 border-slate-700 px-8 py-4 rounded-lg transition-all duration-300 hover:border-yellow-400 hover:bg-slate-800"
              >
                <Play size={20} className="fill-yellow-400" />
                {/* O texto deste botão permanece o mesmo */}
                <span>Ver Apresentação</span>
              </button>
            </div>
          </div>
          
          {/* Coluna Direita: Urgência e Prova Visual */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-center font-bold text-yellow-400 mb-4 tracking-widest">OFERTA EXPIRA EM:</p>
              <div className="grid grid-cols-4 gap-3 text-center">
                <CountdownUnit value={timeLeft.days} label="DIAS" />
                <CountdownUnit value={timeLeft.hours} label="HORAS" />
                <CountdownUnit value={timeLeft.minutes} label="MIN" />
                <CountdownUnit value={timeLeft.seconds} label="SEG" />
              </div>
            </div>

            <div 
              onClick={handleVideoPlay}
              className="group relative aspect-video bg-slate-800 rounded-2xl p-2 cursor-pointer
                         ring-2 ring-slate-700/50 transition-all duration-300 hover:ring-yellow-500/50
                         transform hover:-translate-y-2 hover:scale-[1.02] shadow-2xl"
            >
              <div className="w-full h-full rounded-lg bg-cover bg-center 
                          bg-[url('https://images.unsplash.com/photo-1583444383351-542345a7a35c?q=80&w=2070&auto=format&fit=crop')]">
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-yellow-500/80 rounded-full flex items-center justify-center
                                backdrop-blur-sm transition-all duration-300 group-hover:bg-yellow-500 group-hover:scale-110">
                  <Play size={36} className="text-slate-900 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="font-bold text-white text-lg">Veja o Treinamento na Prática</h4>
                <p className="text-slate-300">Aulas, equipamentos e certificação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CORREÇÃO: Adicionamos a tipagem para as props 'value' e 'label'.
const CountdownUnit = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-slate-900 p-3 rounded-lg">
    <div className="text-3xl lg:text-4xl font-black tracking-tighter">{value}</div>
    <div className="text-xs text-slate-500 tracking-widest">{label}</div>
  </div>
);

export default HeroSection;