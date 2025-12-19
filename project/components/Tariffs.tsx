
import React from 'react';
import { TARIFFS } from '../constants';
import { Tariff } from '../types';

interface TariffsProps {
  onTariffSelect: (tariff: Tariff) => void;
}

const Tariffs: React.FC<TariffsProps> = ({ onTariffSelect }) => {
  return (
    <section id="tariffs" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Тарифные Планы</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Выберите оптимальный уровень сервиса для ваших задач. Больше съемок — больше выгоды.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARIFFS.map(tariff => (
            <div 
              key={tariff.id} 
              className={`relative p-8 rounded-3xl transition-all cursor-pointer group ${
                tariff.isPopular 
                ? 'bg-indigo-600/10 border-2 border-indigo-500 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] scale-105 z-10' 
                : 'glass-effect hover:border-white/20'
              }`}
              onClick={() => onTariffSelect(tariff)}
            >
              {tariff.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">{tariff.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{tariff.description}</p>
              <div className="text-3xl font-bold mb-8 text-white">{tariff.price}</div>
              
              <ul className="space-y-4 mb-8">
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <i className="fas fa-check-circle text-indigo-400 mt-0.5"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tariff.isPopular 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                : 'bg-white/5 hover:bg-white/10 text-white'
              }`}>
                Узнать детали
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
