import React from 'react';
import { X, CheckSquare } from 'lucide-react';

// Define as propriedades que o modal receberá (agora uma lista simples de strings)
interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  topics: string[];
}

const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, courseTitle, topics }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] animate-fade-in-up">
        {/* Cabeçalho do Modal */}
        <div className="p-5 border-b flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Conteúdo Programático</h3>
            <p className="text-slate-500">{courseTitle}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Corpo do Modal com Scroll */}
        <div className="p-6 overflow-y-auto">
          {topics && topics.length > 0 ? (
            <ul className="space-y-3">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{topic}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500 text-center py-8">O conteúdo programático para este curso ainda não foi cadastrado.</p>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 border-t flex justify-end bg-slate-50">
          <button onClick={onClose} className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors hover:bg-blue-700">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumModal;