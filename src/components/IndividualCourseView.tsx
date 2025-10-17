import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Clock, Film, ShieldCheck, ShoppingCart, Calendar, BookOpen } from 'lucide-react';
import CurriculumModal from './CurriculumModal';

// A interface agora inclui a lista de tópicos
interface CursoCompleto {
  id: string;
  title: string;
  norma: string;
  instructor_type: string;
  modality: string;
  workload_hours: number;
  price_individual: number;
  description: string;
  image_url: string; 
  validity_months?: number;
  curriculum_topics?: string[]; // Adicionamos o novo campo
}

const IndividualCourseView = () => {
    // Os dados do curso (incluindo os tópicos) já vêm do componente pai
    const { curso } = useOutletContext<{ curso: CursoCompleto }>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Não precisamos mais do useEffect para buscar o currículo!

    return (
      <>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            {/* Coluna Esquerda: Imagem e Descrição */}
            <div>
              <div className="max-w-sm mx-auto mb-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-800">
                  <img src={curso.image_url || ''} aria-hidden="true" alt="" className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 opacity-50" />
                  <img src={curso.image_url || 'https://placehold.co/600x450?text=Sem+Imagem'} alt={`Imagem do curso ${curso.title}`} className="relative z-10 w-full h-full object-contain" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-700 mb-3">Descrição do Curso</h2>
              <p className="text-slate-600 leading-relaxed">{curso.description}</p>
            </div>
            
            {/* Coluna Direita: Detalhes e Compra */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col">
              <h2 className="text-xl font-bold text-slate-700 mb-4">Detalhes do Treinamento</h2>
              <div className="space-y-3 mb-6">
                <DetailItem icon={Clock} label="Carga Horária" value={`${curso.workload_hours} horas`} />
                <DetailItem icon={Film} label="Modalidade" value={curso.modality} />
                <DetailItem icon={ShieldCheck} label="Tipo de Instrutor" value={curso.instructor_type} />
                {curso.validity_months && (<DetailItem icon={Calendar} label="Validade do Certificado" value={`${curso.validity_months} meses`} />)}
              </div>

              {/* Botão do Conteúdo Programático */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 text-center bg-blue-100 text-blue-700 font-semibold py-3 rounded-lg transition-colors duration-300 hover:bg-blue-200 mb-6"
              >
                <BookOpen size={18} />
                Ver Conteúdo Programático
              </button>
              
              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="text-slate-500">Valor para inscrição individual:</p>
                <p className="text-4xl font-black text-green-600 my-2">R$ {curso.price_individual.toFixed(2).replace('.', ',')}</p>
                <a href="#checkout" className="w-full mt-4 flex items-center justify-center gap-2 text-center bg-green-500 text-white font-semibold py-3.5 rounded-lg text-lg transition-colors duration-300 hover:bg-green-600">
                  <ShoppingCart size={20} />
                  Realizar Inscrição
                </a>
              </div>
            </div>
        </div>

        {/* Modal renderizado */}
        <CurriculumModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseTitle={`${curso.norma} - ${curso.title}`}
          topics={curso.curriculum_topics || []} // Passamos a lista de tópicos diretamente
        />
      </>
    );
};

const DetailItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => (
  <div className="flex items-center text-slate-600">
    <Icon className="w-5 h-5 mr-3 text-blue-500" />
    <span className="font-semibold mr-2">{label}:</span>
    <span>{value}</span>
  </div>
);

export default IndividualCourseView;