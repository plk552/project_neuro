
import React from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  listTitle?: string;
  list?: string[];
  specsTitle?: string;
  specs?: string[];
  price?: string;
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  description, 
  image, 
  listTitle, 
  list, 
  specsTitle, 
  specs,
  price 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl glass-effect border-indigo-500/30 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>

        {image && (
          <div className="md:w-1/2 relative bg-slate-900">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            {price && (
              <div className="absolute bottom-8 left-8">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Стоимость аренды</p>
                <p className="text-3xl font-bold text-white">{price}</p>
              </div>
            )}
          </div>
        )}

        <div className={`flex-1 p-8 md:p-12 overflow-y-auto ${!image ? 'md:w-full' : ''}`}>
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold text-white mb-2">{title}</h2>
            {subtitle && <p className="text-indigo-400 font-bold tracking-widest text-sm uppercase">{subtitle}</p>}
          </div>

          {description && (
            <div className="mb-10">
              <h4 className="text-white font-bold mb-4">Описание</h4>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {specs && specs.length > 0 && (
              <div>
                <h4 className="text-white font-bold mb-4">{specsTitle || 'Характеристики'}</h4>
                <ul className="space-y-3">
                  {specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {list && list.length > 0 && (
              <div>
                <h4 className="text-white font-bold mb-4">{listTitle || 'В комплекте'}</h4>
                <ul className="space-y-3">
                  {list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <i className="fas fa-check-circle text-indigo-500 mt-0.5"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-12 flex gap-4">
            <button className="flex-1 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 active:scale-95">
              {image ? 'Забронировать сейчас' : 'Выбрать этот тариф'}
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
