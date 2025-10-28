import React from 'react';
import { CheckCircle, Gift, ArrowRight, ShieldCheck, Zap, Package } from 'lucide-react'; // Imports necessários restaurados

// Hook de countdown
const useCountdown = (initialDays = 2) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: initialDays, hours: 14, minutes: 32, seconds: 45
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

// Dados da oferta
const kitItems = [
  { icon: CheckCircle, title: 'NR-01: Disposições Gerais e GRO', description: 'A base para a gestão de segurança e conformidade da sua empresa.' },
  { icon: CheckCircle, title: 'NR-06: Equipamento de Proteção Individual (EPI)', description: 'Treinamento essencial sobre o uso, guarda e conservação dos EPIs.' },
  { icon: CheckCircle, title: 'NR-35: Trabalho em Altura', description: 'Capacitação obrigatória para todos que trabalham acima de 2 metros do solo.' },
];

const bonusItems = [
  { icon: Gift, title: 'BÔNUS #1: Guia Prático de Primeiros Socorros', description: 'Manual em PDF para ações rápidas em caso de acidentes.', value: 47 },
  { icon: Gift, title: 'BÔNUS #2: Planilha de Controle de EPIs', description: 'Modelo pronto para gerenciar a entrega e validade dos equipamentos.', value: 97 },
];


const OfferSection = () => {
  const timeLeft = useCountdown(); // timeLeft está sendo usado agora

  // Link de checkout do pacote
  const packageCheckoutUrl = 'https://pay.hotmart.com/R102640802X'; // Seu link está aqui

  const handlePackageCheckout = () => {
    // ==================================================================
    // ▼▼▼ CONDIÇÃO 'IF' SIMPLIFICADA AQUI ▼▼▼
    // Apenas verifica se a URL existe (não é vazia ou nula)
    if (packageCheckoutUrl) {
    // ▲▲▲ FIM DA CORREÇÃO ▲▲▲
    // ==================================================================
      window.open(packageCheckoutUrl, '_blank');
    } else {
      // Fallback
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      alert('Link de checkout do pacote não configurado. Entrando em contato...');
    }
  };

  // ==================================================================
  // ▼▼▼ JSX RESTAURADO AQUI ▼▼▼
  // ==================================================================
  return (
    <section id="checkout" className="relative bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full [mask-image:radial-gradient(100%_50%_at_center,white,transparent)] bg-gradient-to-t from-yellow-500/20 to-slate-900 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-semibold text-yellow-400 border border-yellow-500/20 mb-4">
            <Zap size={16} /> {/* Zap está sendo usado */}
            Oferta Exclusiva por Tempo Limitado
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">
            Adquira o Pacote de Segurança Essencial
          </h2>
          <p className="text-lg text-slate-400 mt-4">
            Os 3 treinamentos mais importantes para a conformidade de qualquer empresa, juntos em uma oferta com desconto imperdível.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Coluna Esquerda: Itens do Pacote */}
          <div className="lg:col-span-3 bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
              <Package size={28}/> {/* Package está sendo usado */}
              O que está incluso no Pacote:
            </h3>
            <div className="space-y-5">
              {/* kitItems está sendo usado */}
              {kitItems.map((item, index) => (
                <OfferItem key={index} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>

            <div className="my-8 border-t border-dashed border-slate-700"></div>

            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Mais 2 Bônus Exclusivos (Hoje):</h3>
            <div className="space-y-5">
              {/* bonusItems está sendo usado */}
              {bonusItems.map((item, index) => (
                <OfferItem key={index} icon={item.icon} title={item.title} description={item.description} value={item.value} />
              ))}
            </div>
          </div>

          {/* Coluna Direita: Caixa de Ação */}
          <div className="lg:col-span-2">
            <div className="sticky top-10 bg-slate-800 border-2 border-yellow-400 rounded-2xl p-8 shadow-2xl shadow-yellow-500/10">
              <div className="text-center mb-4">
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">ECONOMIZE R$ 90,00</span>
              </div>

              <p className="text-slate-400 text-center">De <span className="line-through">R$ 387,00</span> por apenas:</p>
              <p className="text-5xl lg:text-6xl font-black text-center text-yellow-400 my-2">R$ 297</p>
              <p className="text-lg text-slate-300 text-center mb-6">ou 12x de R$ 29,82 no cartão</p>

              <div className="my-6">
                <p className="text-center text-sm font-bold text-slate-400 mb-2">Esta oferta especial termina em:</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {/* CountdownUnit está sendo usado */}
                  <CountdownUnit value={timeLeft.days} label="DIAS" />
                  <CountdownUnit value={timeLeft.hours} label="HRS" />
                  <CountdownUnit value={timeLeft.minutes} label="MIN" />
                  <CountdownUnit value={timeLeft.seconds} label="SEG" />
                </div>
              </div>

              <button
                onClick={handlePackageCheckout}
                className="group w-full relative flex items-center justify-center gap-2 text-xl font-bold bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <span>QUERO O PACOTE COM DESCONTO</span>
                <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-slate-400 mt-2">Pagamento 100% seguro. Acesso imediato.</p>

              <div className="mt-6 pt-6 border-t border-slate-700 flex items-center gap-4">
                <ShieldCheck size={48} className="text-yellow-400 flex-shrink-0" /> {/* ShieldCheck está sendo usado */}
                <div>
                  <h4 className="font-bold text-white">Garantia Blindada de 30 Dias</h4>
                  <p className="text-sm text-slate-400">Seu risco é zero. Se não gostar, devolvemos 100% do seu dinheiro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para os itens da oferta
// OfferItem está sendo usado
const OfferItem = ({ icon: Icon, title, description, value }: { icon: React.ElementType, title: string, description: string, value?: number }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
      <Icon className={value ? "text-yellow-400" : "text-green-500"} size={22} />
    </div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
      {value && (
        <p className="text-xs font-bold mt-1">
          <span className="line-through text-slate-500">Valor: R${value},00</span>
          <span className="ml-2 text-yellow-400">GRÁTIS HOJE!</span>
        </p>
      )}
    </div>
  </div>
);

// Componente auxiliar para o countdown
// CountdownUnit está sendo usado
const CountdownUnit = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-slate-900/70 p-2 rounded-md">
    <div className="text-2xl font-black tracking-tighter">{value}</div>
    <div className="text-[10px] text-slate-500 font-bold">{label}</div>
  </div>
);

export default OfferSection;