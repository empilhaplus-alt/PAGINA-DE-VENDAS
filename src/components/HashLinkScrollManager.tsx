import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashLinkScrollManager = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 20; // Tenta por até 2 segundos (20 * 100ms)

      // Usamos um intervalo para verificar repetidamente se o elemento existe.
      // Isso é muito mais robusto do que um único timeout.
      const intervalId = setInterval(() => {
        const element = document.getElementById(id);
        attempts++;

        // Se o elemento for encontrado...
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearInterval(intervalId); // Para de verificar, pois o trabalho foi feito.
        } 
        // Se o elemento não for encontrado após um tempo razoável...
        else if (attempts >= maxAttempts) {
          // Para de verificar para não rodar para sempre.
          clearInterval(intervalId);
        }
      }, 100);

      // Função de limpeza para limpar o intervalo se a página for trocada.
      return () => clearInterval(intervalId);

    } else {
      // Comportamento padrão: rola para o topo em novas páginas sem âncora.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Roda sempre que a URL muda.

  return null;
};

export default HashLinkScrollManager;