import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useOutletContext } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ArrowLeft, User, Building } from 'lucide-react';

interface CursoCompleto {
  id: string;
  title: string;
  norma: string;
  category: string;
  image_url: string;
}

const CourseChoice = () => {
  const { curso } = useOutletContext<{ curso: CursoCompleto }>();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Como você deseja se inscrever?</h2>
      <p className="text-slate-500 mb-8">Selecione uma opção abaixo para ver os detalhes.</p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link to="pf" className="block p-6 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
          <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800">Pessoa Física</h3>
          <p className="text-slate-500">Inscrição individual</p>
        </Link>
        <Link to="pj" state={{ initialCourseId: curso.id }} className="block p-6 border-2 border-slate-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300">
          <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800">Pessoa Jurídica</h3>
          <p className="text-slate-500">Orçamento para empresas</p>
        </Link>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [curso, setCurso] = useState<CursoCompleto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurso = async () => {
      if (!id) return;
      const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
      if (error) console.error('Erro:', error);
      else setCurso(data);
      setLoading(false);
    };
    fetchCurso();
  }, [id]);

  if (loading) return <p className="text-center py-20">Carregando...</p>;
  if (!curso) return <p className="text-center py-20">Curso não encontrado.</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/#lista-de-cursos" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft size={18} />
          Voltar para a lista de cursos
        </Link>
        
        <div className="mb-6">
          <p className="text-sm font-semibold text-yellow-600">{curso.category}</p>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">{curso.norma} - {curso.title}</h1>
        </div>

        <Outlet context={{ curso }} />
      </div>
    </div>
  );
};

export { CourseChoice };
export default CourseDetail;