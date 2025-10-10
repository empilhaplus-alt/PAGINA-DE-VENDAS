import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashLinkScrollManager = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // O setTimeout garante que a rolagem aconteça depois
      // de qualquer outra renderização ou rolagem padrão do router.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Um pequeno atraso para garantir que a página tenha tempo de renderizar.
    }
  }, [hash]); // Este efeito roda toda vez que o hash na URL muda.

  return null; // Este componente não renderiza nada na tela.
};

export default HashLinkScrollManager;