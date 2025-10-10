import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ArrowLeft } from 'lucide-react';

// Interface com todos os campos da sua tabela
interface CursoCompleto {
  id: string;
  title: string;
  norma: string;
  instructor_type: string;
  modality: string;
  workload_hours: number;
  price_individual: number;
  price_company: number;
  category: string;
  description: string;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [curso, setCurso] = useState<CursoCompleto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurso = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single(); // .single() para buscar apenas um registro

      if (error) {
        console.error('Erro ao buscar detalhes do curso:', error);
      } else {
        setCurso(data);
      }
      setLoading(false);
    };

    fetchCurso();
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Carregando detalhes do curso...</p>;
  }

  if (!curso) {
    return <p className="text-center py-20">Curso não encontrado.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-8">
        <Link to="/#lista-de-cursos" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft size={18} />
          Voltar para a lista de cursos
        </Link>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <p className="text-sm font-semibold text-yellow-600">{curso.category}</p>
            <h1 className="text-4xl font-bold text-blue-900">{curso.norma} - {curso.title}</h1>
          </div>

          <p className="text-lg text-gray-700 mb-8">{curso.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t pt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-1">Carga Horária</h3>
              <p>{curso.workload_hours} horas</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-1">Modalidade</h3>
              <p>{curso.modality}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-1">Tipo de Instrutor</h3>
              <p>{curso.instructor_type}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-1">Preço (Individual)</h3>
              <p>R$ {curso.price_individual}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-1">Preço (Para Empresas)</h3>
              <p>R$ {curso.price_company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;