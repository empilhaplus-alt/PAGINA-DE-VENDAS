import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
// 1. Importe o componente Link
import { Link } from 'react-router-dom';

interface Curso {
  id: string;
  norma: string;
  title: string;
  description: string;
  workload_hours: number;
}

const CoursesList = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCursos = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('id, norma, title, description, workload_hours') // Selecione apenas os campos necessários aqui
        .order('title', { ascending: true });

      if (error) {
        console.error('Erro ao buscar cursos:', error);
      } else {
        setCursos(data || []);
      }

      setLoading(false);
    };

    fetchCursos();
  }, []);

  if (loading) return <p className="text-center py-10">Carregando cursos...</p>;

  return (
    <section id="lista-de-cursos" className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Cursos de Segurança do Trabalho
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cursos.map((curso) => (
          <div key={curso.id} className="border border-gray-200 p-6 rounded-xl shadow-lg bg-white flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {curso.norma} - {curso.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {curso.description}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-700 mb-4">
                Carga Horária: {curso.workload_hours}h
              </p>
              {/* 2. Substitua o <button> por um <Link> */}
              <Link
                to={`/curso/${curso.id}`}
                className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesList;