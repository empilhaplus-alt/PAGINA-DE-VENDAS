import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Building, BookOpen, Search, X, CheckSquare, Square, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface CourseOption {
  id: string;
  title: string;
}

const QuoteForm = () => {
  const location = useLocation();
  const initialCourseId = location.state?.initialCourseId;

  const [allCourses, setAllCourses] = useState<CourseOption[]>([]);
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<CourseOption[]>([]);
  const [tempSelectedCourses, setTempSelectedCourses] = useState<CourseOption[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      // ==================================================================
      // ▼▼▼ CORREÇÃO DA ORDEM DOS CURSOS APLICADA AQUI ▼▼▼
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, norma')
        .order('ordem_exibicao', { ascending: true }); // Ordenando pela coluna de ordem
      // ▲▲▲ FIM DA CORREÇÃO ▲▲▲
      // ==================================================================

      if (error) {
        console.error("Error fetching courses:", error);
      } else {
        const formattedData = data.map(course => ({
          id: course.id,
          title: `${course.norma} - ${course.title}`
        }));
        setAllCourses(formattedData);

        if (initialCourseId) {
          const initialCourse = formattedData.find(c => c.id === initialCourseId);
          if (initialCourse) {
            setSelectedCourses([initialCourse]);
          }
        }
      }
    };
    fetchCourses();
  }, [initialCourseId]);

  const handleOpenModal = () => {
    setTempSelectedCourses(selectedCourses);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmSelection = () => {
    setSelectedCourses(tempSelectedCourses);
    handleCloseModal();
  };

  const handleCheckboxChange = (course: CourseOption, isChecked: boolean) => {
    if (isChecked) {
      setTempSelectedCourses(prev => [...prev, course]);
    } else {
      setTempSelectedCourses(prev => prev.filter(c => c.id !== course.id));
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedCourses.length === 0) {
      setError("Por favor, selecione pelo menos um curso de interesse.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsSubmitted(false);

    try {
      const { error: insertError } = await supabase
        .from('quote_requests')
        .insert([{
          company_name: formData.companyName,
          cnpj: formData.cnpj,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          employees_count: parseInt(formData.employees, 10) || null,
          courses_of_interest: selectedCourses.map(c => c.title)
        }]);

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);
      setFormData({ companyName: '', cnpj: '', contactName: '', email: '', phone: '', employees: '' });
      setSelectedCourses([]);

    } catch (err: any) {
      console.error("Erro ao enviar solicitação:", err);
      setError("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setIsSubmitted(false);
    setError(null);
  }

  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Orçamento para Empresas</h2>
            <p className="text-slate-500">Preencha os dados para receber uma proposta personalizada.</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-slate-600">
              <BookOpen className="w-4 h-4 mr-2" /> Cursos de Interesse*
            </label>
            <div className="p-3 border border-slate-300 rounded-md min-h-[6rem] bg-slate-50">
              {selectedCourses.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedCourses.map(course => (
                    <span key={course.id} className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded-full">
                      {course.title}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">Nenhum curso selecionado.</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleOpenModal}
              className="w-full font-semibold text-blue-600 hover:text-blue-800 py-2 rounded-md"
            >
              + Adicionar ou Alterar Cursos
            </button>
          </div>

          <InputField label="Razão Social" name="companyName" value={formData.companyName} onChange={handleChange} required />
          <InputField label="CNPJ" name="cnpj" value={formData.cnpj} onChange={handleChange} />
          <InputField label="Nome do Contato" name="contactName" value={formData.contactName} onChange={handleChange} required />
          <InputField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <InputField label="Telefone" name="phone" value={formData.phone} onChange={handleChange} />
          <InputField label="Nº de Colaboradores" name="employees" type="number" value={formData.employees} onChange={handleChange} />
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 flex items-center justify-center gap-2 text-center bg-blue-600 text-white font-semibold py-3.5 rounded-lg text-lg transition-colors duration-300 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Solicitar Orçamento</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* ================================================================== */}
      {/* ▼▼▼ MODAL DE NOTIFICAÇÃO CENTRALIZADO ▼▼▼ */}
      {/* ================================================================== */}
      {(isSubmitted || error) && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center animate-fade-in-up">
            {isSubmitted ? (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800">Solicitação Enviada!</h3>
                <p className="text-slate-600 mt-2 mb-6">Recebemos seus dados e nossa equipe entrará em contato em breve. Obrigado!</p>
              </>
            ) : (
              <>
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800">Ocorreu um Erro</h3>
                <p className="text-slate-600 mt-2 mb-6">{error}</p>
              </>
            )}
            <button
              onClick={handleCloseNotification}
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-bold">Selecione os Cursos</h3>
              <button onClick={handleCloseModal} className="p-1 rounded-full hover:bg-slate-100"><X size={20} /></button>
            </div>
            <div className="p-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar curso..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md"
                />
              </div>
            </div>
            <div className="p-4 overflow-y-auto flex-grow">
              <div className="space-y-2">
                {filteredCourses.map(course => {
                  const isChecked = tempSelectedCourses.some(c => c.id === course.id);
                  return (
                    <label key={course.id} className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${isChecked ? 'bg-blue-50 border-blue-200 border' : 'hover:bg-slate-50'}`}>
                      <input type="checkbox" checked={isChecked} onChange={e => handleCheckboxChange(course, e.target.checked)} className="hidden" />
                      {isChecked ? <CheckSquare size={20} className="text-blue-600" /> : <Square size={20} className="text-slate-400" />}
                      <span className="ml-3">{course.title}</span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-3 bg-slate-50">
              <button onClick={handleCloseModal} className="px-4 py-2 font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-md">Cancelar</button>
              <button onClick={handleConfirmSelection} className="px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md">Confirmar Seleção</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField = (props: any) => (
  <div>
    <label htmlFor={props.name} className="block text-sm font-medium text-slate-600 mb-1">{props.label}</label>
    <input
      id={props.name}
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default QuoteForm;