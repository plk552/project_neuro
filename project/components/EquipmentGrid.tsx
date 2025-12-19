
import React, { useState } from 'react';
import { EQUIPMENT_LIST } from '../constants';
import { Category, Equipment } from '../types';

interface EquipmentGridProps {
  onItemSelect: (item: Equipment) => void;
}

const categories: Category[] = ['Cameras', 'Lenses', 'Lighting', 'Audio', 'Accessories'];

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ onItemSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredItems = selectedCategory === 'All' 
    ? EQUIPMENT_LIST 
    : EQUIPMENT_LIST.filter(item => item.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Наше Оборудование</h2>
          <p className="text-gray-400 max-w-xl">Только профессиональная техника от мировых брендов. Мы следим за состоянием каждой единицы.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'All' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            Все
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="glass-effect rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all cursor-pointer"
            onClick={() => onItemSelect(item)}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4">
                <span className="bg-black/50 backdrop-blur-md text-xs font-bold text-white px-3 py-1 rounded-full uppercase tracking-widest">{item.brand}</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">Подробнее</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                <span className="text-indigo-400 font-bold">{item.pricePerDay}₽<span className="text-xs text-gray-500">/сут</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="space-y-2 mb-6">
                {item.specs.slice(0, 3).map((spec, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-500">
                    <i className="fas fa-check text-indigo-500 mr-2"></i>
                    {spec}
                  </div>
                ))}
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onItemSelect(item); }}
                className="w-full py-3 bg-white/5 hover:bg-indigo-600 text-white rounded-xl transition-all font-semibold flex items-center justify-center gap-2"
              >
                Проверить наличие
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentGrid;
