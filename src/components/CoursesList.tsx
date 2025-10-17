import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface Curso {
  id: string;
  norma: string;
  title: string;
  image_url: string;
  price_individual: number;
}

const CoursesList = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCursos = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('id, norma, title, image_url, price_individual')
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
        <h2 className="text-4xl font-black text-center text-slate-800 mb-4 tracking-tight">
          Conheça Nossos Treinamentos
        </h2>
        <p className="text-center text-lg text-slate-600 mb-12">
          Cursos completos para capacitar sua equipe e garantir a conformidade da sua empresa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              
              <div
                className="relative h-32 flex items-center justify-center p-2"
                style={{
                  backgroundImage: `url('https://mavsxyowcvvirqtvzbms.supabase.co/storage/v1/object/public/logos%20dos%20cursos/jDJKYxPVo1-tI5SDxB738.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* ================================================================== */}
                {/* ▼▼▼ AJUSTE APLICADO AQUI: Opacidade do overlay aumentada ▼▼▼ */}
                <div className="absolute inset-0 bg-black/50"></div> {/* De 10% para 50% de opacidade */}
                {/* ▲▲▲ FIM DO AJUSTE ▲▲▲ */}
                {/* ================================================================== */}
                
                {/* Logo do Curso ou Placeholder */}
                {curso.image_url ? (
                  <img
                    src={curso.image_url}
                    alt={`Capa do curso ${curso.title}`}
                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative z-10 flex items-center justify-center h-full w-full">
                    <span className="bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-semibold px-4 py-2 rounded-md">
                      Sem Imagem
                    </span>
                  </div>
                )}
              </div>

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
                    className="w-full text-center bg-gray-200 text-black-200 font-semibold py-2 rounded-md text-sm transition-colors duration-300 hover:bg-green-500"
                  >
                    Detalhes
                  </Link>
                  <a
                    href="#checkout"
                    className="w-full flex items-center justify-center gap-1.5 text-center bg-yellow-400 text-black font-semibold py-2 rounded-md text-sm transition-colors duration-300 hover:bg-yellow-600"
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