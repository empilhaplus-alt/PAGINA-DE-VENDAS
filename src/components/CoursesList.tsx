import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

// 1. Adicionada a propriedade checkout_url à interface
interface Curso {
  id: string;
  norma: string;
  title: string;
  image_url: string;
  price_individual: number;
  checkout_url?: string; // Tornamos opcional com '?'
}

const CoursesList = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCursos = async () => {
      // 2. Adicionamos checkout_url à query
      const { data, error } = await supabase
        .from('courses')
        .select('id, norma, title, image_url, price_individual, checkout_url')
        .order('ordem_exibicao', { ascending: true });

      if (error) {
        console.error('Erro ao buscar cursos:', error);
      } else {
        setCursos(data || []);
      }
      setLoading(false);
    };
    fetchCursos();
  }, []);

  if (loading) return <p className="text-center py-20 text-xl">Carregando Cursos...</p>;

  return (
    <section id="lista-de-cursos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* ... (cabeçalho da seção) ... */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              
              {/* ... (código da imagem) ... */}

              {/* Conteúdo do Card */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-slate-800 mb-2 h-20">
                  {curso.norma} - {curso.title}
                </h3>
                <p className="text-slate-500 mb-4">
                  A partir de <span className="font-bold text-xl text-green-600">R$ {curso.price_individual.toFixed(2).replace('.', ',')}</span>
                </p>
                
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <Link
                    to={`/curso/${curso.id}`}
                    className="w-full text-center bg-gray-200 text-gray-800 font-semibold py-2 rounded-md text-sm transition-colors duration-300 hover:bg-gray-300"
                  >
                    Detalhes
                  </Link>
                  {/* 3. Botão "Comprar" agora usa o link dinâmico */}
                  <a
                    href={curso.checkout_url || '#contato'} // Usa o link do curso ou volta para #contato se não houver link
                    target="_blank" // Abre o checkout em uma nova aba
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 text-center bg-green-500 text-white font-semibold py-2 rounded-md text-sm transition-colors duration-300 hover:bg-green-600"
                  >
                    <ShoppingCart size={14} />
                    Comprar
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;